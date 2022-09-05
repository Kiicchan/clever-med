import { Form } from "./Form.tsx";

export function Main() {
    return (
        <main className="mx-auto w-2/3 max-w-xl">
            <h2 className="text-2xl leading-snug font-semibold my-1">Diário de Saúde</h2>
            <p className="text-base leading-relaxed font-regular my-1">Crie o seu relatório diário de saúde</p>
            <Form />
        </main>
    )
}
