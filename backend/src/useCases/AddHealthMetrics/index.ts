import { HealthMetricsRepository } from "../../repositories/HealthMetricsRepository";
import { PatientsRepository } from "../../repositories/PatientsRepository";
import { AddHealthMetricsController } from "./AddHealthMetricsController";
import { AddHealthMetricsUseCase } from "./AddHealthMetricsUseCase";

const patientsRepository = new PatientsRepository()
const healthMetricsRepository = new HealthMetricsRepository()

const addHealthMetricsUseCase = new AddHealthMetricsUseCase(patientsRepository, healthMetricsRepository)

const addHealthMetricsController = new AddHealthMetricsController(addHealthMetricsUseCase)

export { addHealthMetricsController, addHealthMetricsUseCase }