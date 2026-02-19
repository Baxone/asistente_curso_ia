# Endpoint GET /api/orders paginado

Código listo para integrar en tu API .NET 8 con Entity Framework Core 8.

## Estructura

```
sesion_2/
├── controllers/OrdersController.cs
├── dtos/
│   ├── OrderFilterRequest.cs
│   ├── OrderDto.cs
│   └── PagedResult.cs
├── Enums/OrderStatus.cs
├── entities/Order.cs          ← Eliminar si ya tienes Order
├── repositories/
│   ├── BaseRepository.cs      ← Eliminar si ya tienes BaseRepository
│   ├── IOrderRepository.cs
│   ├── IUnitOfWork.cs         ← Eliminar si ya tienes Unit of Work
│   └── OrderRepository.cs
```

## Integración

1. Copia los archivos a tu proyecto ajustando los namespaces (`TuProyecto.Api` → el tuyo).
2. Si ya tienes `Order`, `BaseRepository`, `IUnitOfWork` o `OrderStatus`: elimina los stubs y actualiza las referencias en `OrderRepository` y `OrdersController`.
3. Registra en DI: `IUnitOfWork`, `IOrderRepository` → `OrderRepository`.

## Uso del endpoint

```
GET /api/orders?Page=1&PageSize=20
GET /api/orders?CustomerId=guid&Status=1&DateFrom=2025-01-01&DateTo=2025-12-31
```

Filtros opcionales: `CustomerId`, `Status`, `DateFrom`, `DateTo`, `Page` (default 1), `PageSize` (default 20, max 100).
