/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import { MetricDTO } from "@/types/MetricDTO"
import { ReactComponent as BPMIcon } from "@/assets/bpm.svg";
import { ReactComponent as PressureIcon } from "@/assets/pressure.svg";
import { Chart } from "react-google-charts";

interface HealthChartProps {
    metrics: MetricDTO[]
}
export function HealthChart(props: HealthChartProps) {
    const [viewMode, setViewMode] = useState<'BPM' | 'PA'>('BPM')

    const measuredAtDate = new Date(props.metrics[0]?.measuredAt).toLocaleDateString()

    let chartData: (number | string | Date)[][]
    if (viewMode === 'BPM') {
        chartData = props.metrics.map(item => [new Date(item.measuredAt), item.heartRateBPM])
        chartData.unshift(['hora', 'Batimento Cardíaco'])
    } else {
        chartData = props.metrics.map(item => [new Date(item.measuredAt), item.bloodPressureHigh, item.bloodPressureLow])
        chartData.unshift(['hora', 'Pressão Sistólica', 'Pressão Diastólica'])
    }

    return (
        <div>
            <p className="text-sm font-semibold text-shades-600 text-center">Diário de Saúde</p>
            <p className="text-sm font-regular text-shades-600 text-center">{measuredAtDate}</p>
            <div className="flex gap-2 mt-4 [&>*]:min-w-[6.25rem]">
                <button onClick={() => setViewMode('BPM')}
                    className={`flex items-center gap-2 p-2 rounded font-bold active:scale-95 transition-transform
                            ${viewMode === 'BPM' ?
                            'bg-gradient-to-b from-gradient-blue to-gradient-purple text-white' :
                            'bg-[#E5E5E5] opacity-40 text-shades-600'}`}>
                    <BPMIcon />
                    BPM
                </button>
                <button onClick={() => setViewMode('PA')}
                    className={`flex items-center gap-2 p-2 rounded font-bold active:scale-95 transition-transform
                            ${viewMode === 'PA' ?
                            'bg-gradient-to-b from-gradient-blue to-gradient-purple text-white' :
                            'bg-[#E5E5E5] opacity-40 text-shades-600'}`}>
                    <PressureIcon />
                    PA
                </button>
            </div>
            <div>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="300px"
                    data={chartData}
                    options={{
                        legend: { position: "bottom" },
                        hAxis: {
                            format: 'HH:mm',
                            ticks: [...props.metrics.map(metric => new Date(metric.measuredAt))]
                        },
                    }}
                />
            </div>
        </div>
    )
}
