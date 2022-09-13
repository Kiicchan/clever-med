import { Patient } from "@prisma/client";
import { prisma } from "../db";

export interface IPatientsRepository {
    create(patient: Omit<Patient, 'id'>): Promise<Patient>
    findByNameAndBirthDate(patient: Omit<Patient, 'id'>): Promise<Patient | null>
    findById(id: Patient['id']): Promise<Patient | null>
}

export class PatientsRepository implements IPatientsRepository {
    async create(patient: Omit<Patient, 'id'>): Promise<Patient> {
        const newPatient = await prisma.patient.create({ data: patient })
        return newPatient
    }

    async findByNameAndBirthDate(patient: Omit<Patient, 'id'>): Promise<Patient | null> {
        const foundPatient = await prisma.patient.findUnique({
            where: {
                name_birthDate: patient,
            },
        })
        return foundPatient
    }

    async findById(id: Patient['id']): Promise<Patient | null> {
        const foundPatient = await prisma.patient.findUnique({
            where: { id }
        })
        return foundPatient
    }
}