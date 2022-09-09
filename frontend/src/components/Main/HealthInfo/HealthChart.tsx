import { MetricDTO } from "@/types/MetricDTO"
import { Metric } from "../Form.tsx/MetricsList"

interface HealthChartProps {
    metrics: MetricDTO[]
}
export function HealthChart(props: HealthChartProps) {
    const measuredAtDate = new Date(props.metrics[0]?.measuredAt).toLocaleDateString()
    return (
        <div>
            <p className="text-sm font-semibold text-shades-600 text-center">Diário de Saúde</p>
            <p className="text-sm font-regular text-shades-600 text-center">{measuredAtDate}</p>
        </div>
    )
}
