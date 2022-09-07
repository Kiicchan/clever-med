import { MetricsListRow } from "./MetricsListRow";
import { MetricsInserter } from "./MetricsInserter";
import { useRef } from "react";

export interface Metric {
    hour: string
    heartRate: number
    bloodPressureHigh: number
    bloodPressureLow: number
}

interface IMetricsList {
    metrics: Metric[]
    setMetrics: React.Dispatch<React.SetStateAction<Metric[]>>
}

export function MetricsList({ metrics, setMetrics }: IMetricsList) {
    const stateHistoryRef = useRef<Metric[][]>([])
    const setMetricHandle = useRef(() => { }) as any

    const handleInsert = (metric: Metric) => {
        stateHistoryRef.current.push(metrics)
        setMetrics(metrics => {
            const newMetrics = metrics.filter(({ hour }) => hour !== metric.hour)
            newMetrics.push(metric)
            newMetrics.sort((a, b) => Number(a.hour.substring(0, 2)) - Number(b.hour.substring(0, 2)))
            return newMetrics
        })
    }

    const handleDelete = (hour: string) => {
        stateHistoryRef.current.push(metrics)
        setMetrics(metrics => metrics.filter(metric => hour !== metric.hour))
    }

    const handleUndo = () => {
        const previousState = stateHistoryRef.current.pop()
        if (previousState) setMetrics(previousState)
    }

    const handleEdit = (metric: Metric) => {
        setMetricHandle.current(metric)
    }

    return (
        <>
            <MetricsInserter
                setMetricHandle={setMetricHandle}
                handleInsert={handleInsert}
                handleUndo={handleUndo}
                isBackPossible={stateHistoryRef.current.length > 0} />
            <div className="mt-5 [&>*]:mb-3">
                {metrics.map(metric =>
                    <MetricsListRow
                        key={metric.hour}
                        {...metric}
                        onDelete={handleDelete}
                        onEdit={() => handleEdit(metric)} />)}
            </div>
        </>
    )
}
