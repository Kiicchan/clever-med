import { MetricsInserter } from "./MetricsInserter";
import { MetricsList } from "./MetricsList";

export function Form() {
    return (
        <form>
            <fieldset name="patient-info">
                <div className="flex flex-col gap-1 my-1 text-sm font-medium">
                    <label htmlFor="patient-name" className="text-shades-600 leading-none block">Nome completo</label>
                    <input type="text" name="Nome" id="patient-name" required className="text-shades-700 p-2 leading-2 shadow rounded-md" />
                </div>
                <div className="flex flex-col gap-1 my-1 text-sm font-medium">
                    <label htmlFor="patient-birth" className="text-shades-600 leading-none block">Data de nascimento</label>
                    <input type="date" name="Nascimento" id="patient-birth" required className="text-shades-700 p-2 leading-2 shadow rounded-md invalid:opacity-50 focus:opacity-100" />
                </div>
            </fieldset>
            <div className="flex flex-col gap-1 my-1 text-sm font-bold">
                <label htmlFor="metrics-date" className="text-shades-600 leading-none block">Para qual dia você deseja gerar o gráfico de saúde?</label>
                <input type="date" name="Nascimento" id="metrics-date" required className="font-medium text-shades-700 p-2 leading-2 shadow rounded-md invalid:opacity-50 focus:opacity-100" />
            </div>
            <p className="my-1 text-sm font-bold text-shades-600 leading-none">Selecione o horário para preencher os dados</p>
            <MetricsList />
            <button type="submit" disabled className="block ml-auto mt-7 text-white text-sm font-semibold leading-none bg-gradient-blue rounded-full py-4 px-6 disabled:opacity-50">Gerar Diário de Saúde</button>
        </form>
    )
}
