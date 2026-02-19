Esto iria acompañado de un prompt en el chat como este
```dentro de la carpeta @sesion_2 estudia el fichero @sesion_2/instrucciones_iniciales.md y planteame las preguntas necesarias que consideres antes de llevarlo a cabo. No ejecutes ninguna accion hasta que yo te diga```

[CONTEXT]
Estoy trabajando en una API .NET 8 con Entity Framework Core 8.
La entidad Order tiene: Id, CustomerId, OrderDate, TotalAmount, Status (enum).
Usamos el patrón Repository con Unit of Work.
Ya existe un BaseRepository<T> con métodos GetAll(), GetById(), Add(), Update().

[INSTRUCTION]

Crea un endpoint GET /api/orders que devuelva pedidos paginados.
Debe soportar filtros por: CustomerId (opcional), Status (opcional), fecha desde/hasta.
Implementa la paginación en el repositorio, no en el controller.


[ROLE]
Quiero que actues como un desarrollador senior de .NET 8 con Entity Framework Core 8.

[RESTRICTIONS]
- No uses librerías externas de paginación
- No hagas Include() de navegaciones, solo datos de Order
- Los filtros deben ser opcionales e independientes
- Máximo 100 items por página

[FORMAT]
Devuelve:
1. La clase DTO de request (OrderFilterRequest)
2. La clase DTO de response (PagedResult<OrderDto>)
3. El método del repositorio
4. El endpoint del controller
Incluye comentarios XML en métodos públicos.