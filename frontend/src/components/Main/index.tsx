import { useState } from "react";
import { axios } from "@/api/axios";
import { AxiosError } from "axios";
import { Loading } from "./Loading";
import { Form } from "./Form.tsx";
import { HealthChart } from "./HealthInfo/HealthChart";
import { PatientInfo } from "./HealthInfo/PatientInfo";


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

    const handleReset = () => {
        setData(null)
        setError(null)
        setLoading(false)
    }

    if (loading) return <Loading />

    if (!!data) return (
        <main className="mx-auto w-2/3 max-w-xl">
            <div className="bg-white rounded-2xl shadow p-6 mt-10">
                <PatientInfo name={data.name} birthDate={data.birthDate} />
                <hr className="text-shades-100 w-1/3 mx-auto my-4" />
                <HealthChart metrics={data.metrics} />
            </div>
            <button onClick={handleReset}
                className="block ml-auto my-7 text-blue-500 border text-sm font-semibold leading-none rounded-full py-4 px-6 hover:bg-blue-500 hover:text-white">
                Novo relatório
            </button>
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
