import defaultIcon from "@/assets/smiley.svg";
interface PatientInfoProps {
    name: string
    birthDate: string
    photoURL?: string
}

export function PatientInfo(props: PatientInfoProps) {
    const ageInMiliseconds = Date.now() - new Date(props.birthDate).valueOf()
    const ageInYears = new Date(ageInMiliseconds).getFullYear() - 1970 //base year

    return (
        <div>
            <div className="mx-auto w-20 h-20 rounded-xl bg-shades-700 flex items-center justify-center">
                <img src={props.photoURL || defaultIcon} alt="Patient photo" />
            </div>
            <p className="text-xl font-semibold text-shades-900 text-center">{props.name}</p>
            <p className="text-sm font-regular text-shades-600 text-center">{ageInYears} ANOS</p>
        </div>
    )
}
