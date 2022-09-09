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
    const chartData = [
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
    ]

    return (
        <div>
            <p className="text-sm font-semibold text-shades-600 text-center">Diário de Saúde</p>
            <p className="text-sm font-regular text-shades-600 text-center">{measuredAtDate}</p>
            <div className="flex gap-2 my- [&>*]:min-w-[6.25rem]">
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
                    height="400px"
                    data={chartData}
                />
            </div>
        </div>
    )
}
