import { HealthMetrics } from "@prisma/client";
import { HealthMetricsRepository } from "../../repositories/HealthMetricsRepository";
import { PatientsRepository } from "../../repositories/PatientsRepository";
import { IAddHealthMetricsDTO } from "./AddHealthMetricsDTO";

export class AddHealthMetricsUseCase {
    patientsRepository = new PatientsRepository
    healthMetricsRepository = new HealthMetricsRepository

    async execute({ name, birthDate, metrics }: IAddHealthMetricsDTO): Promise<HealthMetrics[]> {
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