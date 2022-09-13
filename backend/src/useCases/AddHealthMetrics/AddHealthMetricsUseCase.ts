import { HealthMetrics } from "@prisma/client";
import { HealthMetricsRepository } from "../../repositories/HealthMetricsRepository";
import { PatientsRepository } from "../../repositories/PatientsRepository";
import { IAddHealthMetricsDTO } from "./AddHealthMetricsDTO";

export class AddHealthMetricsUseCase {

    constructor(
        private patientsRepository: PatientsRepository,
        private healthMetricsRepository: HealthMetricsRepository
    ) { }

    async execute({ name, birthDate, metrics }: IAddHealthMetricsDTO): Promise<HealthMetrics[]> {
        const today = new Date()
        const birthDateObject = new Date(birthDate)

        if (birthDateObject >= today) {
            throw new Error("Data de nascimento excede o dia de hoje");
        }

        metrics.forEach(value => {
            const measuredAtDateObject = new Date(value.measuredAt)
            if (measuredAtDateObject < birthDateObject || measuredAtDateObject > today) {
                throw new Error("Data de medição deve estar entre a data de hoje e a data de nascimento");
            }
        })

        let patient = await this.patientsRepository.findByNameAndBirthDate({ name, birthDate: new Date(birthDate) })
        if (!patient) {
            patient = await this.patientsRepository.create({ name, birthDate: new Date(birthDate) })
        }

        const healthMetricsCollection = await this.healthMetricsRepository.upsertMany(
            metrics.map(metric => ({
                ...metric,
                measuredAt: new Date(metric.measuredAt),
                patientId: patient!.id //typescript fails to narrow down the type here (issue: #12825)
            })))

        return healthMetricsCollection
    }
}