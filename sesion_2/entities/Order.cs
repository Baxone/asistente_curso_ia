using TuProyecto.Api.DTOs;

namespace TuProyecto.Api.Entities;

/// <summary>
/// Entidad de pedido. Nota: Si tu proyecto ya tiene esta entidad en el dominio, elimina este archivo.
/// </summary>
public class Order
{
    public Guid Id { get; set; }
    public Guid CustomerId { get; set; }
    public DateTime OrderDate { get; set; }
    public decimal TotalAmount { get; set; }
    public OrderStatus Status { get; set; }
}
