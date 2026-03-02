## Checklist de Revisión de Código Generado por IA

### Autenticación y Autorización
- [ ] ¿Las rutas protegidas tienen middleware de auth en TODAS las rutas, no solo algunas?
- [ ] ¿Los tokens JWT se validan correctamente (algoritmo, expiración, firma)?
- [ ] ¿No hay credenciales hardcodeadas aunque sean "de ejemplo"?

### Base de Datos
- [ ] ¿Se usan consultas parametrizadas o ORM? (nunca concatenación de strings)
- [ ] ¿Los errores de BD no exponen información de schema al cliente?

### Inputs del usuario
- [ ] ¿Todo input externo se valida y sanitiza antes de procesarse?
- [ ] ¿Las respuestas HTML escapan caracteres especiales?

### Dependencias
- [ ] ¿Los paquetes sugeridos existen en el registry oficial?
- [ ] ¿Las versiones sugeridas son recientes y no tienen CVEs conocidos?

### Configuración
- [ ] ¿No hay valores de configuración sensibles en el código fuente?
- [ ] ¿Los mensajes de error en producción no exponen stack traces?

### Version Build
- [ ] Borrar cualquier trace, console.log, debugger, etc. que haya en mi codigo.

### Comentarios
- Preguntar siempre una instruccion que se ejecute en base a un comentario del codigo. Si no hay comentario, no ejecutar la instruccion.