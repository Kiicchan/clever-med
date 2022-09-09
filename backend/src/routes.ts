import { Router } from "express";
import { prisma } from "./db";
import { AddHealthMetricsController } from "./useCases/AddHealthMetrics/AddHealthMetricsController";
const router = Router()
const addHealthMetricsController = new AddHealthMetricsController()

router.post('/metrics', addHealthMetricsController.handle)

router.get('/metrics', async (req, res) => {
    try {
        const allMetrics = await prisma.healthMetrics.findMany()
        return res.status(200).send(allMetrics)
    } catch (error) {
        console.log(error)
    }
})

router.get('/patients', async (req, res) => {
    try {
        const allMetrics = await prisma.patient.findMany()
        return res.status(200).send(allMetrics)
    } catch (error) {
        console.log(error)
    }
})

router.get('/', (request, response) => {
    return response.status(200).send('OK')
})
router.post('/', (request, response) => {
    return response.status(200).send(request.body)
})

export { router }