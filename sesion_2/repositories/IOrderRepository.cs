using TuProyecto.Api.DTOs;

namespace TuProyecto.Api.Repositories;

/// <summary>
/// Repositorio de pedidos. Extiende las operaciones base con consultas paginadas.
/// </summary>
public interface IOrderRepository
{
    /// <summary>
    /// Obtiene pedidos paginados con filtros opcionales.
    /// </summary>
    /// <param name="request">Filtros y parámetros de paginación.</param>
    /// <param name="ct">Token de cancelación.</param>
    /// <returns>Resultado paginado de pedidos.</returns>
    Task<PagedResult<OrderDto>> GetPagedAsync(
        OrderFilterRequest request,
        CancellationToken ct = default);
}
