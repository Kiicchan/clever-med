import { Router } from "express";
import { prisma } from "./db";
const router = Router()

router.get('/patients', async (request, response) => {
    const allPatients = await prisma.patient.findMany()
    return response.status(200).send(allPatients)
})

export { router }