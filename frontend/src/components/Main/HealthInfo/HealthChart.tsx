/// <reference types="vite-plugin-svgr/client" />
import { MetricDTO } from "@/types/MetricDTO"
import { ReactComponent as BPMIcon } from "@/assets/bpm.svg";
import { ReactComponent as PressureIcon } from "@/assets/pressure.svg";

interface HealthChartProps {
    metrics: MetricDTO[]
}
export function HealthChart(props: HealthChartProps) {
    const measuredAtDate = new Date(props.metrics[0]?.measuredAt).toLocaleDateString()
    return (
        <div>
            <p className="text-sm font-semibold text-shades-600 text-center">Diário de Saúde</p>
            <p className="text-sm font-regular text-shades-600 text-center">{measuredAtDate}</p>
            <div>
                <button className="flex items-center gap-2 p-2">
                    <BPMIcon className="text-purple" />
                    BPM
                </button>
                <button className="flex items-center gap-2 p-2">
                    <PressureIcon className="text-blue-500" />
                    PA
                </button>
            </div>
        </div>
    )
}
