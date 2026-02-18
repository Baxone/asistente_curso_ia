// Esta línea en React/TypeScript:
const [isLoading, setIsLoading] = useState<boolean>(false);

// Se tokeniza aproximadamente así (simplificado):
["const", " [", "is", "Loading", ",", " set", "Is", "Loading", "]", 
" =", " use", "State", "<", "boolean", ">(", "false", ");"]


Un nombre de variable getUserById consume menos tokens que obtenerUsuarioPorIdentificador

┌─────────────────────────────────────────────────────────────────┐
│                    CONCEPTO DE TOKEN                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  El tokenizador NO divide por:                                  │
│  ❌ Caracteres individuales                                     │
│  ❌ Palabras completas                                          │
│  ❌ Espacios                                                    │
│                                                                 │
│  El tokenizador divide por:                                     │
│  ✅ Patrones estadísticos aprendidos del corpus de training    │
│  ✅ Subpalabras frecuentes (prefijos, sufijos, raíces)         │
│  ✅ Secuencias de caracteres comunes                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Modos de trabajo de cursor:

┌─────────────────────────────────────────────────────────────────────────┐
│                        MODOS DE CURSOR                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   TAB (Autocomplete)          CHAT (⌘L / Ctrl+L)                        │
│   ─────────────────           ──────────────────                        │
│   • Inline mientras escribes   • Conversación lateral                   │
│   • Sugerencias línea a línea  • Explicaciones y Q&A                    │
│   • Ideal para completar       • Puede ver archivos con @               │
│     código predecible          • No modifica archivos directamente      │
│                                                                         │
│   COMPOSER (⌘I / Ctrl+I)      AGENT (Composer + Agent Mode)             │
│   ─────────────────────       ─────────────────────────────             │
│   • Edición inline/multi-file  • Autónomo, ejecuta comandos             │
│   • Diff preview antes de      • Lee/escribe múltiples archivos         │
│     aplicar                    • Corre tests, instala paquetes          │
│   • Control granular           • Ideal para tareas complejas            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

1. Atajos de Teclado Principales