import { Router } from "express";
import { AddHealthMetricsController } from "./useCases/AddHealthMetrics/AddHealthMetricsController";
const router = Router()
const addHealthMetricsController = new AddHealthMetricsController()

router.post('/metrics', addHealthMetricsController.handle)

export { router }