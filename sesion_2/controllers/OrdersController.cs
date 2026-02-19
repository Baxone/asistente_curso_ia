using Microsoft.AspNetCore.Mvc;
using TuProyecto.Api.DTOs;
using TuProyecto.Api.Repositories;

namespace TuProyecto.Api.Controllers;

/// <summary>
/// Controlador de pedidos.
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly IUnitOfWork _unitOfWork;

    /// <summary>
    /// Inicializa el controlador con el Unit of Work.
    /// </summary>
    /// <param name="unitOfWork">Unit of Work que proporciona acceso a los repositorios.</param>
    public OrdersController(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    /// <summary>
    /// Obtiene pedidos paginados con filtros opcionales.
    /// </summary>
    /// <param name="request">Filtros por CustomerId, Status, DateFrom, DateTo y parámetros de paginación (Page, PageSize).</param>
    /// <param name="ct">Token de cancelación.</param>
    /// <returns>Resultado paginado de pedidos.</returns>
    [HttpGet]
    [ProducesResponseType(typeof(PagedResult<OrderDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<PagedResult<OrderDto>>> GetOrders(
        [FromQuery] OrderFilterRequest request,
        CancellationToken ct = default)
    {
        var result = await _unitOfWork.Orders.GetPagedAsync(request, ct);
        return Ok(result);
    }
}
