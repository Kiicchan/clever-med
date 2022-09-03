import { HealthMetrics } from "@prisma/client";
import { prisma } from "../db";

export class HealthMetricsRepository {
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