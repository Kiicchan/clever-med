import { HealthMetrics } from "@prisma/client";
import { prisma } from "../db";

export interface IHealthMetricsRepository {
    upsertMany(metrics: HealthMetrics[]): Promise<HealthMetrics[]>
}

export class HealthMetricsRepository implements IHealthMetricsRepository {
    async upsertMany(metrics: HealthMetrics[]): Promise<HealthMetrics[]> {
        const collection = await prisma.$transaction(
            metrics.map(metric =>
                prisma.healthMetrics.upsert({
                    where: { patientId_measuredAt: { measuredAt: metric.measuredAt, patientId: metric.patientId } },
                    update: metric,
                    create: metric
                })))
        return collection
    }
}