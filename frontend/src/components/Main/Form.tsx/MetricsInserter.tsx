import BPMIcon from "@/assets/bpm.svg";
import PressureIcon from "@/assets/pressure.svg";
import { MutableRefObject, useState } from "react";
import { Metric } from "./MetricsList";

const radioOptions = [
  '02:00',
  '06:00',
  '10:00',
  '14:00',
  '18:00',
  '22:00',
]

interface IMetricsInserter {
  handleInsert: (metric: Metric) => void
  handleUndo: () => void
  isBackPossible: boolean
  setMetricHandle: MutableRefObject<(metric: Metric) => void>
}

export function MetricsInserter({ handleInsert, handleUndo, isBackPossible, setMetricHandle }: IMetricsInserter) {
  const [BPM, setBPM] = useState('')
  const [highPressure, setHighPressure] = useState('')
  const [lowPressure, setLowPressure] = useState('')
  const [hour, setHour] = useState('')

  const onAdvance = () => {
    handleInsert({
      hour,
      heartRate: Number(BPM),
      bloodPressureLow: Number(lowPressure),
      bloodPressureHigh: Number(highPressure)
    })

    setBPM('')
    setHighPressure('')
    setLowPressure('')
    setHour('')
  }

  setMetricHandle.current = (metric) => {
    setBPM(metric.heartRate.toString())
    setHighPressure(metric.bloodPressureHigh.toString())
    setLowPressure(metric.bloodPressureLow.toString())
    setHour(metric.hour)
  }

  return (
    <div className="flex border-2 border-shades-100 rounded-2xl">
      <fieldset className="flex flex-col gap-4 p-6 border-r border-shades-100" name="hour">
        {radioOptions.map(value => {
          return (
            <label key={value} className="flex items-center gap-2 text-shades-600 text-sm font-bold leading-none">
              <input type="radio" name="hour" value={value} checked={hour === value} onChange={(e) => setHour(e.target.value)}
                className="form-radio w-6 h-6 shadow-[0px_0px_3px_rgba(0,0,0,0.3)] focus:ring-offset-0 focus:ring-inset checked:ring-white checked:ring-4 checked:ring-inset checked:outline-none border-none checked:text-blue-500 checked:bg-none"
              />
              {value}
            </label>)
        })}
      </fieldset>
      <fieldset className="flex-1 min-w-0 p-8 mt-auto" name="metric">
        <div className="flex items-center gap-2 flex-wrap">
          <img src={BPMIcon} />
          <label htmlFor="metric-bpm" className="text-sm font-bold text-shades-600 mr-auto">BPM</label>
          <input value={BPM} onChange={(e) => setBPM(e.target.value)} id="metric-bpm" type="number" className="form-input appearance-none rounded-md border-none shadow min-w-0 max-w-[8.5rem] h-9" />
        </div>
        <div className="flex items-center gap-2 flex-wrap mt-7">
          <img src={PressureIcon} />
          <label htmlFor="metric-pressure-low" className="text-sm font-bold text-shades-600 mr-auto">PRESSÃO ARTERIAL</label>
          <label htmlFor="metric-pressure-high" hidden></label>
          <span>
            <input value={highPressure} onChange={(e) => setHighPressure(e.target.value)} id="metric-pressure-low" type="number" className="form-input appearance-none rounded-md border-none shadow min-w-0 w-[60px] h-9 mr-4" />
            <input value={lowPressure} onChange={(e) => setLowPressure(e.target.value)} id="metric-pressure-high" type="number" className="form-input appearance-none rounded-md border-none shadow min-w-0 w-[60px] h-9" />
          </span>
        </div>
        <div className="mt-8 flex justify-end gap-3">
          {isBackPossible &&
            <button type="button"
              onClick={handleUndo}
              className="relative leading-none py-2 pr-4 pl-6 text-blue-400 text-xsm font-semibold bg-blue-200 rounded 
          enabled:active:bg-blue-400 enabled:active:text-white enabled:hover:bg-blue-100 disabled:opacity-50
          before:content-[' '] before:absolute before:left-2 before:border-l before:border-b before:rotate-45 before:w-[0.3rem] before:h-[0.3rem] before:top-[0.65rem]"
            >Anterior</button>
          }
          <button type="button"
            onClick={onAdvance}
            disabled={!hour || !highPressure || !lowPressure || !BPM || (Number(highPressure) <= Number(lowPressure))}
            className="relative leading-none py-2 pl-4 pr-6 text-blue-400 text-xsm font-semibold bg-blue-200 rounded 
              enabled:active:bg-blue-400 enabled:active:text-white enabled:hover:bg-blue-100 disabled:opacity-50
              after:content-[' '] after:absolute after:right-2 after:border-r after:border-t after:rotate-45 after:w-[0.3rem] after:h-[0.3rem] after:top-[0.65rem]"
          >Próximo</button>
        </div>
      </fieldset>
    </div>
  )
}
