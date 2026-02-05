# Simulador de Telemetría Weenav

Este script en Python simula el envío de datos de telemetría (voltaje, corriente, potencia, estado de batería, temperatura y velocidad) para todos los barcos registrados en el sistema.

## Cómo ejecutar

Para iniciar el simulador, simplemente ejecuta el script de ayuda desde la raíz del proyecto:

```bash
./start_simulator.sh
```

Este comando:
1. Verificará que tengas Python 3.
2. Creará un entorno virtual automáticamente (si no existe).
3. Instalará las dependencias necesarias.
4. Iniciará la simulación.

## Cómo pararlo

Para detener el simulador:
- Presiona `Ctrl + C` en la terminal donde se está ejecutando.

## Detalles técnicos
- Los datos se envían cada **10 segundos** (coincidiendo con la frecuencia de actualización del frontend).
- El simulador detecta automáticamente los barcos existentes consultando la API local (`http://localhost:3000/boats`).
- Los valores generados son aleatorios pero dentro de rangos realistas para sistemas de 12V.
