import { HealthMetrics } from "@prisma/client";

interface HealthMetricsDTO extends Omit<HealthMetrics, 'patientId' | 'measuredAt'> {
    measuredAt: string
}

export interface IAddHealthMetricsDTO {
    metrics: HealthMetricsDTO[]
    name: string
    birthDate: string
}