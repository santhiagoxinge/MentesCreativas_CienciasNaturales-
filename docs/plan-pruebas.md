# Plan de pruebas

## Alcance

Este plan valida la aplicacion educativa Mentes Creativas - Ciencias Naturales, enfocada en estudiantes de cuarto y quinto grado.

## Tipos de prueba

| Tipo | Herramienta | Objetivo | Evidencia |
| --- | --- | --- | --- |
| Unitarias | Jest + React Testing Library | Validar renderizado, navegacion, audio y evaluacion. | Salida de `npm test`. |
| Integracion | Postman | Validar endpoint estatico `/api/lessons.json` y carga del sitio. | Coleccion exportada y capturas. |
| Sistema | JMeter | Simular usuarios concurrentes contra Vercel. | Archivo `.jmx` y resumen de resultados. |
| Implantacion | Vercel + navegador | Confirmar despliegue funcional en produccion. | URL publica y capturas. |
| Aceptacion | Checklist | Verificar criterios del documento final. | Checklist diligenciado. |

## Criterios de aceptacion de calidad

- La aplicacion debe compilar con `npm run build`.
- Las pruebas unitarias deben pasar en local y GitHub Actions.
- La URL de Vercel debe cargar sin errores visibles.
- El endpoint `/api/lessons.json` debe responder estado 200.
- El promedio de respuesta en JMeter debe ser menor a 5 segundos.
- La navegacion entre temas y secciones debe ser fluida.

## Riesgos

- Si el profesor exige Jest estrictamente, se debe evidenciar que el proyecto usa Jest y no Vitest.
- Si Vercel cambia la URL del despliegue, se deben actualizar Postman, JMeter y el documento final.
- Si las pruebas de sistema se ejecutan con una red lenta, se debe registrar la condicion como observacion.
