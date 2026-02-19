namespace TuProyecto.Api.DTOs;

/// <summary>
/// Estados posibles de un pedido.
/// Nota: Si tu proyecto ya tiene este enum en el dominio, usa ese y elimina este archivo.
/// </summary>
public enum OrderStatus
{
    Pending,
    Shipped,
    Delivered,
    Cancelled
}
