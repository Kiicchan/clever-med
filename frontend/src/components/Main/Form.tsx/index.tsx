import { RequestDataDTO } from "@/types/MetricDTO";
import { FormEventHandler, useState } from "react";
import { Metric, MetricsList } from "./MetricsList";

export interface FormProps {
    onRequest: (data: RequestDataDTO) => void
}

export function Form(props: FormProps) {
    const [metrics, setMetrics] = useState<Metric[]>([])
    const [name, setName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [measuredAtDate, setMeasuredAtDate] = useState('')

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        const data = {
            name,
            birthDate,
            metrics: metrics.map(metric => ({
                measuredAt: new Date(`${measuredAtDate} ${metric.hour}`),
                heartRateBPM: metric.heartRate,
                bloodPressureHigh: metric.bloodPressureHigh,
                bloodPressureLow: metric.bloodPressureLow
            }))
        }

        props.onRequest(data)
    }

    const canSubmit = metrics.length > 0 && name && birthDate && measuredAtDate
    const today = new Date().toISOString().split('T')[0]

    return (
        <form onSubmit={handleSubmit}>
            <fieldset name="patient-info">
                <div className="flex flex-col gap-2 my-2 text-sm font-medium">
                    <label htmlFor="patient-name" className="text-shades-600 leading-none block">Nome completo</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" name="nome" id="patient-name" required className="text-shades-700 p-2 leading-2 shadow rounded-md" />
                </div>
                <div className="flex flex-col gap-2 my-2 text-sm font-medium">
                    <label htmlFor="patient-birth" className="text-shades-600 leading-none block">Data de nascimento</label>
                    <input onChange={(e) => setBirthDate(e.target.value)}
                        type="date"
                        name="birth-date"
                        id="patient-birth"
                        max={today}
                        required
                        className="text-shades-700 p-2 leading-2 shadow rounded-md invalid:opacity-50 focus:opacity-100" />
                </div>
            </fieldset>
            <div className="flex flex-col gap-2 my-2 text-sm font-bold">
                <label htmlFor="metrics-date" className="text-shades-600 leading-none block">Para qual dia você deseja gerar o gráfico de saúde?</label>
                <input onChange={(e) => setMeasuredAtDate(e.target.value)}
                    type="date"
                    name="measured-at-date"
                    id="metrics-date"
                    min={birthDate}
                    max={today}
                    required
                    className="font-medium text-shades-700 p-2 leading-2 shadow rounded-md invalid:opacity-50 focus:opacity-100" />
            </div>
            {measuredAtDate &&
                <>
                    <p className="my-2 text-sm font-bold text-shades-600 leading-none">Selecione o horário para preencher os dados</p>
                    <MetricsList metrics={metrics} setMetrics={setMetrics} />
                </>
            }
            <button type="submit" disabled={!canSubmit} className="block ml-auto mt-7 text-white text-sm font-semibold leading-none bg-gradient-blue rounded-full py-4 px-6 disabled:opacity-50">Gerar Diário de Saúde</button>
        </form>
    )
}
