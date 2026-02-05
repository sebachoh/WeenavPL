import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function BoatChart({ historyData }) {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            chartInstance.current = echarts.init(chartRef.current);

            const option = {
                tooltip: { trigger: 'axis' },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: []
                },
                yAxis: { type: 'value', scale: true },
                series: [{
                    data: [],
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

    // mise a jour des données
    useEffect(() => {
        if (chartInstance.current && historyData?.values) {
            chartInstance.current.setOption({
                xAxis: {
                    data: historyData.labels // Actualiza las horas
                },
                series: [{
                    data: historyData.values // Actualiza los números
                }]
            });
        }
    }, [historyData]);

    return <div ref={chartRef} className="w-full h-full" />;
}