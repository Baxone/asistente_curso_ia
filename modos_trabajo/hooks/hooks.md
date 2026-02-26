## ¿Qué es un Hook?

Un **Hook** es un script que se ejecuta **automáticamente** después de un evento en Cursor IA.

## Limitación Importante

⚠️ Los Hooks solo se ejecutan cuando **el agente** edita archivos, **no** cuando tú editas manualmente.

## Comparación Rápida

| **Rule** | Siempre automática | "Usa TypeScript estricto" |

| **Slash Command** | Tú escribes `/comando` | `/test` genera tests |

| **Skill** | El agente decide | "Documenta este código" |

| **Hook** | Tras un evento del agente | Formatear después de editar |

# Prettier

| Hook | Cuándo se ejecuta |
| `afterFileEdit` | Después de que el agente edita un archivo |
| `afterFileCreate` | Después de que el agente crea un archivo |
| `afterCommand` | Después de que el agente ejecuta un comando en terminal |