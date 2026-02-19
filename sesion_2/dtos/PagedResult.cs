namespace TuProyecto.Api.DTOs;

/// <summary>
/// Resultado paginado genérico.
/// </summary>
/// <typeparam name="T">Tipo de los elementos de la página.</typeparam>
public class PagedResult<T>
{
    /// <summary>
    /// Elementos de la página actual.
    /// </summary>
    public IEnumerable<T> Items { get; set; } = [];

    /// <summary>
    /// Número total de registros que cumplen los filtros.
    /// </summary>
    public int TotalCount { get; set; }

    /// <summary>
    /// Número de página actual (base 1).
    /// </summary>
    public int Page { get; set; }

    /// <summary>
    /// Tamaño de la página.
    /// </summary>
    public int PageSize { get; set; }

    /// <summary>
    /// Número total de páginas.
    /// </summary>
    public int TotalPages => PageSize > 0 ? (int)Math.Ceiling(TotalCount / (double)PageSize) : 0;
}
