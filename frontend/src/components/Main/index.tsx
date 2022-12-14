import { useState } from "react";
import { axios } from "@/api/axios";
import { AxiosError } from "axios";
import { Form } from "./Form.tsx";
import { HealthChart } from "./HealthInfo/HealthChart";
import { PatientInfo } from "./HealthInfo/PatientInfo";
import { RequestDataDTO } from "@/types/MetricDTO";
import { Error } from "./Layout/Error";
import { Loading } from "./Layout/Loading";
import { Wrapper } from "./Layout/Wrapper";


export function Main() {
    const [data, setData] = useState<RequestDataDTO | null>(null)
    const [error, setError] = useState<AxiosError | null | Error>(null)
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

    if (error) return (
        <Wrapper>
            <Error error={error} />
            <button onClick={handleReset}
                className="block mx-auto mt-7 text-blue-500 border text-sm font-semibold leading-none rounded-full py-4 px-6 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                Tente Novamente
            </button>
        </Wrapper>
    )

    if (loading) return (
        <Wrapper>
            <Loading />
        </Wrapper>
    )

    if (!!data) return (
        <Wrapper>
            <div className="bg-white rounded-2xl shadow p-2 md:p-6">
                <PatientInfo name={data.name} birthDate={data.birthDate} />
                <hr className="text-shades-100 w-1/3 mx-auto my-4" />
                <HealthChart metrics={data.metrics} />
            </div>
            <button onClick={handleReset}
                className="block ml-auto mt-7 text-blue-500 border text-sm font-semibold leading-none rounded-full py-4 px-6 hover:bg-blue-500 hover:text-white">
                Novo relatório
            </button>
        </Wrapper>
    )

    return (
        <Wrapper>
            <h2 className="text-2xl leading-snug font-semibold">Diário de Saúde</h2>
            <p className="text-base leading-relaxed font-regular my-1">Crie o seu relatório diário de saúde</p>
            <Form onRequest={handleRequest} />
        </Wrapper>
    )
}
