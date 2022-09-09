import { useState } from "react";
import { axios } from "@/api/axios";
import { AxiosError } from "axios";
import { Loading } from "./Loading";
import { Form } from "./Form.tsx";
import { HealthChart } from "./HealthInfo/HealthChart";
import { PatientInfo } from "./HealthInfo/PatientInfo";
import { mockData } from "./mockDataTemp";


export function Main() {
    const [data, setData] = useState<any | null>(null)
    const [error, setError] = useState<AxiosError | null>(null)
    const [loading, setLoading] = useState(false)

    const handleRequest = (data: any) => {
        setLoading(true)
        axios.post('/metrics', data)
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }

    if (loading) return <Loading />

    if (!data) return (
        <main className="mx-auto w-2/3 max-w-xl">
            <div className="bg-white rounded-2xl shadow p-6 mt-32">
                <PatientInfo name={mockData.name} birthDate={mockData.birthDate} />
                <hr className="text-shades-100 w-1/3 mx-auto my-4" />
                <HealthChart metrics={mockData.metrics} />
            </div>
        </main>
    )

    return (
        <main className="mx-auto w-2/3 max-w-xl">
            <h2 className="text-2xl leading-snug font-semibold my-1">Diário de Saúde</h2>
            <p className="text-base leading-relaxed font-regular my-1">Crie o seu relatório diário de saúde</p>
            <Form onRequest={handleRequest} />
        </main>
    )
}
