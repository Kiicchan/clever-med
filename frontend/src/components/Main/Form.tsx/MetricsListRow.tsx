import PenIcon from "@/assets/pen.svg";
import TrashIcon from "@/assets/trash-can.svg";
import { Metric } from "./MetricsList";

export interface IMetricsListRow extends Metric {
    handleDelete: (hour: string) => void
}

export function MetricsListRow(props: IMetricsListRow) {
    return (
        <div className="flex justify-around items-center py-2 bg-blue-100 rounded-md text-sm font-regular leading-none text-blue-700 [&_span]:font-bold">
            <p>HORA: <span>{props.hour}</span></p>
            <p>BPM: <span>{props.heartRate}</span></p>
            <p>PRESSÃO ARTERIAL <span>{props.bloodPressureHigh}/{props.bloodPressureLow}</span></p>
            <img src={PenIcon} onClick={() => { }} className="cursor-pointer" />
            <img src={TrashIcon} onClick={() => props.handleDelete(props.hour)} className="cursor-pointer" />
        </div>
    )
}
