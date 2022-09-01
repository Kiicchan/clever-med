-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealtMetrics" (
    "measuredAt" TIMESTAMP(3) NOT NULL,
    "heartRateBPM" INTEGER NOT NULL,
    "bloodPressureHigh" INTEGER NOT NULL,
    "bloodPressureLow" INTEGER NOT NULL,
    "patientId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HealtMetrics_patientId_measuredAt_key" ON "HealtMetrics"("patientId", "measuredAt");

-- AddForeignKey
ALTER TABLE "HealtMetrics" ADD CONSTRAINT "HealtMetrics_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
