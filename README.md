# Sesion 1: Introducción a la IA Generativa en Desarrollo y Prompting

•	¿Cómo "piensa" un LLM de código? Contexto, Tokens y Alucinaciones.
•	Buenas Prácticas de Prompting: Contexto, Instrucción, Restricción y Formato, inputs y outputs
•	Diferencias entre Chat, Completado (Copilot) y Edición (Composer y modo Agent).

# Sesion 2: Prompting y contexto
FRAMEWORK - CIRF (CONTEXTO, INSTRUCCION, ROLE, RESTRICCIONES, FORMATO)
    1 - Contexto: El contexto es el conjunto de información que se le proporciona al modelo para que pueda generar una respuesta.   
            - desde .js con comentarios
            - desde .md con con diferentes puntos y estructuras. Agents.md https://agents.md/
            - fichero PPT con diferentes puntos y estructuras.
            - Documentacion oficial, MCP o bien directamente url de la documentacion.

    2 - Instrucción: Dime los más exacto posible lo quieres.
    3 - Role: El role es el papel que desempeña el modelo en la conversación.
   4 - Restricciones: Las restricciones son las limitaciones que se le imponen al modelo para que no genere una respuesta que no sea la deseada. 
    5 - Formato: El formato es el formato en el que se quiere que se genere la respuesta.

FRAMEWORK - CO-STAR-D Context,Objective, Style,Tono, User, Response, Data
- C (Contexto): Rol y situación (“Experto en React migrando a Vite”)
- O (Objetivo): Tarea atómica (“Crear componente para el sidebar”)
- S (Estilo): Paradigmas (“Componentes funcionales, Typescript estricto”)
- T (Tono): Verbosidad (“Sé conciso, solo el código”)
- A (Audiencia): Mantenedores (“Código apto para producción/juniors”)
- R (Respuesta): Formato (“Bloque de markdown único”)
- D (Datos): Interfaces de entrada (“Usa la siguiente interfaz…”)
