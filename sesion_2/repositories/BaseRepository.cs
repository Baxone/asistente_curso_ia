using Microsoft.EntityFrameworkCore;

namespace TuProyecto.Api.Repositories;

/// <summary>
/// Repositorio base genérico. Nota: Si tu proyecto ya tiene esta clase, elimina este archivo.
/// </summary>
public abstract class BaseRepository<T> where T : class
{
    protected readonly DbContext Context;

    protected BaseRepository(DbContext context)
    {
        Context = context;
    }

    public virtual IQueryable<T> GetAll() => Context.Set<T>().AsQueryable();
    public virtual async Task<T?> GetByIdAsync(Guid id, CancellationToken ct = default) => await Context.Set<T>().FindAsync([id], ct);
    public virtual void Add(T entity) => Context.Set<T>().Add(entity);
    public virtual void Update(T entity) => Context.Set<T>().Update(entity);
}
