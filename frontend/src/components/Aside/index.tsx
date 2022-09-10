import { Logo } from "./Logo";
import Img from "@/assets/fitness-woman.png"

export function Aside() {
    return (
        <div className="h-full p-1 md:p-0 bg-gradient-to-b from-gradient-blue to-gradient-purple">
            <header className="md:p-10">
                <Logo />
            </header>
            <h1 className="text-xl md:text-3xl text-white font-bold text-center md:text-left leading-tight lg:mx-20">Relatórios de saúde em gráficos</h1>
            <div className="relative">
                <p className="text-sm md:text-lg text-white font-regular text-left md:max-w-[60%] ml-auto md:mt-6 md:mr-5">Em poucos segundos, transforme os seus dados de saúde em gráficos de fácil leitura.</p>
                <img src={Img} alt="Exercising woman" className="absolute md:top-0 md:max-w-[40%] mix-blend-multiply opacity-50 md:opacity-100 pointer-events-none -z-10 md:z-0" />
            </div>
        </div>
    )
}