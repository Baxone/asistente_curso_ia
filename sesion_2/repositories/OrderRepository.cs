using Microsoft.EntityFrameworkCore;
using TuProyecto.Api.DTOs;
using TuProyecto.Api.Entities;

namespace TuProyecto.Api.Repositories;

/// <summary>
/// Implementación del repositorio de pedidos con paginación.
/// Nota: Ajusta el namespace de Order (ej. TuProyecto.Domain.Entities) y la clase base BaseRepository según tu proyecto.
/// </summary>
public class OrderRepository : BaseRepository<Order>, IOrderRepository
{
    private readonly DbContext _context;

    /// <summary>
    /// Inicializa el repositorio con el contexto de base de datos.
    /// </summary>
    /// <param name="context">Contexto de Entity Framework.</param>
    public OrderRepository(DbContext context) : base(context)
    {
        _context = context;
    }

    /// <inheritdoc />
    public async Task<PagedResult<OrderDto>> GetPagedAsync(
        OrderFilterRequest request,
        CancellationToken ct = default)
    {
        // Normalizar y validar paginación
        var page = Math.Max(1, request.Page);
        var pageSize = Math.Clamp(request.PageSize, 1, 100);

        var query = _context.Set<Order>().AsQueryable();

        // Filtros opcionales e independientes
        if (request.CustomerId.HasValue)
            query = query.Where(x => x.CustomerId == request.CustomerId.Value);

        if (request.Status.HasValue)
            query = query.Where(x => x.Status == request.Status.Value);

        if (request.DateFrom.HasValue)
            query = query.Where(x => x.OrderDate >= request.DateFrom.Value);

        if (request.DateTo.HasValue)
            query = query.Where(x => x.OrderDate <= request.DateTo.Value);

        var totalCount = await query.CountAsync(ct);

        var items = await query
            .OrderBy(x => x.OrderDate)
            .ThenBy(x => x.Id)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .Select(x => new OrderDto
            {
                Id = x.Id,
                CustomerId = x.CustomerId,
                OrderDate = x.OrderDate,
                TotalAmount = x.TotalAmount,
                Status = x.Status
            })
            .ToListAsync(ct);

        return new PagedResult<OrderDto>
        {
            Items = items,
            TotalCount = totalCount,
            Page = page,
            PageSize = pageSize
        };
    }
}
