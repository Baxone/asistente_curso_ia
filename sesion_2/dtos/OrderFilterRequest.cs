namespace TuProyecto.Api.DTOs;

/// <summary>
/// Filtros opcionales para la consulta paginada de pedidos.
/// </summary>
public class OrderFilterRequest
{
    /// <summary>
    /// Filtra por identificador de cliente. Opcional.
    /// </summary>
    public Guid? CustomerId { get; set; }

    /// <summary>
    /// Filtra por estado del pedido. Opcional.
    /// </summary>
    public OrderStatus? Status { get; set; }

    /// <summary>
    /// Fecha desde (inclusive). Opcional.
    /// </summary>
    public DateTime? DateFrom { get; set; }

    /// <summary>
    /// Fecha hasta (inclusive). Opcional.
    /// </summary>
    public DateTime? DateTo { get; set; }

    /// <summary>
    /// Número de página (base 1). Valor por defecto: 1.
    /// </summary>
    public int Page { get; set; } = 1;

    /// <summary>
    /// Tamaño de página. Valor por defecto: 20. Máximo: 100.
    /// </summary>
    public int PageSize { get; set; } = 20;
}
