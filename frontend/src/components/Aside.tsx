import { Logo } from "./Logo";
import Img from "../assets/fitness-woman.png"

export function Aside() {
    return (
        <div className="relative h-full bg-gradient-to-b from-gradient-blue to-gradient-purple">
            <header className="p-10">
                <Logo />
            </header>
            <h1 className="text-3xl text-white font-bold text-left leading-tight mx-20">Relatórios de saúde em gráficos</h1>
            <div className="relative">
                <p className="text-lg text-white font-regular text-left max-w-[60%] ml-auto mt-6 mr-5">Em poucos segundos, transforme os seus dados de saúde em gráficos de fácil leitura.</p>
                <img src={Img} alt="Exercising woman" className="absolute top-0 max-w-[40%] mix-blend-multiply" />
            </div>
        </div>
    )
}