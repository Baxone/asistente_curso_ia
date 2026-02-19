namespace TuProyecto.Api.Repositories;

/// <summary>
/// Unit of Work. Nota: Si tu proyecto ya tiene esta interfaz, elimina este archivo y ajusta el namespace.
/// </summary>
public interface IUnitOfWork
{
    IOrderRepository Orders { get; }
}
