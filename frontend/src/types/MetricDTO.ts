export interface MetricDTO {
    measuredAt: Date
    heartRateBPM: number
    bloodPressureHigh: number
    bloodPressureLow: number
}

export interface RequestDataDTO {
    name: string
    birthDate: string
    metrics: MetricDTO[]
}