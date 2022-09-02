/*
  Warnings:

  - You are about to drop the `HealtMetrics` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name,birthDate]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "HealtMetrics" DROP CONSTRAINT "HealtMetrics_patientId_fkey";

-- DropTable
DROP TABLE "HealtMetrics";

-- CreateTable
CREATE TABLE "HealthMetrics" (
    "measuredAt" TIMESTAMP(3) NOT NULL,
    "heartRateBPM" INTEGER NOT NULL,
    "bloodPressureHigh" INTEGER NOT NULL,
    "bloodPressureLow" INTEGER NOT NULL,
    "patientId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HealthMetrics_patientId_measuredAt_key" ON "HealthMetrics"("patientId", "measuredAt");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_name_birthDate_key" ON "Patient"("name", "birthDate");

-- AddForeignKey
ALTER TABLE "HealthMetrics" ADD CONSTRAINT "HealthMetrics_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
