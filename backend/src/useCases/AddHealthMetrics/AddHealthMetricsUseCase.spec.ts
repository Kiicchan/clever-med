import { AddHealthMetricsUseCase } from "./AddHealthMetricsUseCase";
import { assert, describe, expect, it } from 'vitest'
import { HealthMetrics, Patient } from "@prisma/client";
import { IPatientsRepository } from "../../repositories/PatientsRepository";
import { IHealthMetricsRepository } from "../../repositories/HealthMetricsRepository";

describe("Adding metrics", () => {
    const patients: Patient[] = []                  // Defining an in memory repository and its methods 
    const healthMetrics: HealthMetrics[] = []

    const patientsRepo: IPatientsRepository = {

        async create({ name, birthDate }) {
            const patient = { name, birthDate, id: Math.random().toString() }
            patients.push(patient)
            return patient
        },
        async findByNameAndBirthDate(patient) {
            const foundPatient = patients.find(({ name, birthDate }) => {
                const sameName = name === patient.name
                const sameBirth = birthDate.toISOString() === patient.birthDate.toISOString()
                return sameName && sameBirth
            })
            return foundPatient || null
        },
        async findById(id) {
            const foundPatient = await patients.find((patient) => patient.id === id)
            return foundPatient || null
        }
    }

    const metricsRepo: IHealthMetricsRepository = {
        async upsertMany(metrics) {
            healthMetrics
                .filter(({ measuredAt }) => metrics
                    .some((metric) => metric
                        .measuredAt.toISOString() === measuredAt.toISOString()))
            metrics.forEach(value => healthMetrics.push(value))

            return metrics
        }
    }

    const addHealthMetricsUseCase = new AddHealthMetricsUseCase(patientsRepo, metricsRepo)

    addHealthMetricsUseCase.execute({
        name: 'John Doe',
        birthDate: '1991-01-01',
        metrics: [
            {
                bloodPressureHigh: 130,
                bloodPressureLow: 90,
                heartRateBPM: 120,
                measuredAt: '2022-09-09 02:00'
            },
            {
                bloodPressureHigh: 100,
                bloodPressureLow: 70,
                heartRateBPM: 150,
                measuredAt: '2022-09-09 06:00'
            },
            {
                bloodPressureHigh: 120,
                bloodPressureLow: 80,
                heartRateBPM: 120,
                measuredAt: '2022-09-09 14:00'
            },
        ]
    })

    it('should be possible to create an user', () => {
        const foundJohn = patients.find(({ name, birthDate }) => {
            const sameName = name === 'John Doe'
            const sameBirth = birthDate.toISOString() === new Date('1991-01-01').toISOString()
            return sameName && sameBirth
        })
        expect(foundJohn).toBeDefined()
    })

    it('should be possible to add metrics', () => {
        expect(healthMetrics.length).not.toEqual(0)
    })

    it('should not be possible to add a future born person', () => {
        expect(async () => {
            await addHealthMetricsUseCase.execute({
                name: 'Mary Dee',
                birthDate: '2300-01-01',
                metrics: []
            })
        }).rejects.toThrowError()
    })

    it('should not be possible to add future metrics', () => {
        expect(async () => {
            await addHealthMetricsUseCase.execute({
                name: 'Mary Dee',
                birthDate: '1995-11-10',
                metrics: [
                    {
                        bloodPressureHigh: 130,
                        bloodPressureLow: 90,
                        heartRateBPM: 120,
                        measuredAt: '2300-11-10 02:00'
                    }
                ]
            })
        }).rejects.toThrowError()
    })
})