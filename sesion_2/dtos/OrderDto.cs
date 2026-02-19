namespace TuProyecto.Api.DTOs;

/// <summary>
/// DTO de respuesta para un pedido.
/// </summary>
public class OrderDto
{
    /// <summary>
    /// Identificador del pedido.
    /// </summary>
    public Guid Id { get; set; }

    /// <summary>
    /// Identificador del cliente.
    /// </summary>
    public Guid CustomerId { get; set; }

    /// <summary>
    /// Fecha del pedido.
    /// </summary>
    public DateTime OrderDate { get; set; }

    /// <summary>
    /// Importe total del pedido.
    /// </summary>
    public decimal TotalAmount { get; set; }

    /// <summary>
    /// Estado del pedido.
    /// </summary>
    public OrderStatus Status { get; set; }
}
