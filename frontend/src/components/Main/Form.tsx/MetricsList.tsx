import { MetricsListRow } from "./MetricsListRow";
import { MetricsInserter } from "./MetricsInserter";
import { useRef, useState } from "react";

export interface Metric {
    hour: string
    heartRate: number
    bloodPressureHigh: number
    bloodPressureLow: number
}

export function MetricsList() {
    const [metrics, setMetrics] = useState<Metric[]>([])
    const stateHistoryRef = useRef<Metric[][]>([])

    const handleInsert = (metric: Metric) => {
        setMetrics(metrics => {
            stateHistoryRef.current.push(metrics)

            const newMetrics = metrics.filter(({ hour }) => hour !== metric.hour)
            newMetrics.push(metric)
            newMetrics.sort((a, b) => Number(a.hour.substring(0, 2)) - Number(b.hour.substring(0, 2)))
            return newMetrics
        })
    }

    const handleDelete = (hour: string) => {
        setMetrics(metrics => metrics.filter(metric => hour !== metric.hour))
    }

    const handleUndo = () => {
        const previousState = stateHistoryRef.current.pop()
        if (previousState) setMetrics(previousState)
    }

    return (
        <>
            <MetricsInserter handleInsert={handleInsert} handleUndo={handleUndo} />
            <div className="mt-5 [&>*]:mb-3">
                {metrics.map(metric => <MetricsListRow key={metric.hour} {...metric} editHandle={() => { }} handleDelete={handleDelete} />)}
            </div>
        </>
    )
}