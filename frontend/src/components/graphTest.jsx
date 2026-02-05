import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function BoatChart({ newData }) { // Recibimos el nuevo dato por props
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // Guardamos la instancia en una referencia

    // 1. Inicialización de la gráfica (Solo una vez)
    useEffect(() => {
        if (chartRef.current) {
            chartInstance.current = echarts.init(chartRef.current);

            const option = {
                tooltip: { trigger: 'axis' },
                xAxis: {
                    type: 'category',
                    data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '00:00']
                },
                yAxis: { type: 'value' },
                series: [{
                    data: [5.2, 6.0, 5.8, 7.1, 5.4, 7.7, 2.0],
                    type: 'line',
                    smooth: true,
                    color: '#000000'
                }]
            };

            chartInstance.current.setOption(option);
        }

        const handleResize = () => chartInstance.current?.resize();
        window.addEventListener('resize', handleResize);

        return () => {
            chartInstance.current?.dispose();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 2. Efecto para ACTUALIZAR en tiempo real
    useEffect(() => {
        if (chartInstance.current && newData) {
            // Aquí actualizamos solo la serie de datos
            chartInstance.current.setOption({
                series: [{
                    data: newData // Enviamos el array de datos actualizado
                }]
            });
        }
    }, [newData]); // Este efecto se dispara cada vez que cambien los datos

    return <div ref={chartRef} className="w-full h-full min-h-[200px]" />;
}