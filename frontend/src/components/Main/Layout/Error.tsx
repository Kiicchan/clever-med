import { AxiosError } from "axios"

interface ErrorProps {
    error: AxiosError | Error
}
export function Error({ error }: ErrorProps) {
    return (
        <div className="mx-auto border p-2 bg-red rounded-lg text-white text-center">
            Parece que algo deu errado...
            <br />
            --{error.message}
        </div>
    )

}
