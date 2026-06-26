<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Linear MCP Usage

**Default Strategy:** Usa solo `linear` MCP para todas las operaciones.

**Operaciones soportadas:**
- Listar/buscar/filtrar issues, proyectos, ciclos, equipos
- Crear/actualizar/eliminar issues
- Agregar comentarios
- Cambiar estados, prioridades, asignados, labels
- Mover issues entre proyectos

**Operaciones NO soportadas (requieren Composio):**
- Sub-issues y relaciones parent/child explícitas
- Adjuntos/attachments
- Reacciones en comentarios
- Queries GraphQL personalizadas

**Si el usuario pide algo no soportado:**
1. Intenta resolverlo con las herramientas disponibles de Linear MCP
2. Si es imposible, informa al usuario que necesita habilitar Composio
3. Explica cómo habilitarlo: `composio.enabled = true` en config

**Performance Benchmark:**
- Linear solo: 19s, 34.5K tokens (ÓPTIMO)
- Composio solo: 45s, 33K tokens
- Ambos juntos: 2m50s, 41.5K tokens (EVITAR)
