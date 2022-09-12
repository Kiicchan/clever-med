import { Request, Response } from "express";
import { IAddHealthMetricsDTO } from "./AddHealthMetricsDTO";
import { AddHealthMetricsUseCase } from "./AddHealthMetricsUseCase";

export class AddHealthMetricsController {

    constructor(
        private addHealthMetricsUseCase: AddHealthMetricsUseCase,
    ) { }


    async handle(request: Request, response: Response): Promise<Response> {
        const { name, birthDate, metrics }: IAddHealthMetricsDTO = request.body

        if (!name || !birthDate || !metrics) {
            return response.status(400).send()
        }

        try {
            const healthMetrics = await this.addHealthMetricsUseCase.execute({ name, birthDate, metrics })
            const returnData = {
                name,
                birthDate,
                metrics: healthMetrics.map(({ patientId, ...rest }) => rest) //exclude patient ID for security purposes
            }

            return response.status(201).send(returnData)
        } catch (error) {
            console.log(error)
            return response.status(500).send()
        }
    }
}