import { MetricsListRow } from "./MetricsListRow";

export function MetricsList() {
    return (
        <div className="mt-5 [&>*]:mb-3">
            <MetricsListRow
                hour="02:00"
                bloodPressureHigh={120}
                bloodPressureLow={90}
                heartRate={180}
                editHandle={() => undefined}
                deleteHandle={() => undefined}
            />
            <MetricsListRow
                hour="02:00"
                bloodPressureHigh={120}
                bloodPressureLow={90}
                heartRate={180}
                editHandle={() => undefined}
                deleteHandle={() => undefined}
            />
            <MetricsListRow
                hour="02:00"
                bloodPressureHigh={120}
                bloodPressureLow={90}
                heartRate={180}
                editHandle={() => undefined}
                deleteHandle={() => undefined}
            />
        </div>
    )
}
