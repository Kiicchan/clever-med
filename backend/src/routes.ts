import { Router } from "express";
import { addHealthMetricsController } from "./useCases/AddHealthMetrics";

const router = Router()

router.post('/metrics', (req, res) => {
    return addHealthMetricsController.handle(req, res)
})

export { router }