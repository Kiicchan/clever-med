import BPMIcon from "@/assets/bpm.svg";
import PressureIcon from "@/assets/pressure.svg";

const radioOptions = [
  '02:00',
  '06:00',
  '10:00',
  '14:00',
  '18:00',
  '22:00',
]

export function MetricsInserter() {
  return (
    <div>
      <p className="my-1 text-sm font-bold text-shades-600 leading-none">Selecione o horário para preencher os dados</p>
      <div className="flex border-2 border-shades-100 rounded-2xl">
        <fieldset className="flex flex-col gap-4 p-6 border-r border-shades-100" name="hour">
          {radioOptions.map(value => {
            return (
              <label key={value} className="flex items-center gap-2 text-shades-600 text-sm font-bold leading-none">
                <input type="radio" name="hour" value={value}
                  className="form-radio w-6 h-6 shadow-[0px_0px_3px_rgba(0,0,0,0.3)] focus:ring-offset-0 focus:ring-inset checked:ring-white checked:ring-4 checked:ring-inset checked:outline-none border-none checked:text-blue-500 checked:bg-none"
                />
                {value}
              </label>)
          })}
        </fieldset>
        <fieldset className="flex-1 min-w-0 p-8 mt-auto" name="metric">
          <p className="flex items-center gap-2 flex-wrap">
            <img src={BPMIcon} />
            <label htmlFor="metric-bpm" className="text-sm font-bold text-shades-600 mr-auto">BPM</label>
            <input id="metric-bpm" type="number" className="form-input appearance-none rounded-md border-none shadow min-w-0 max-w-[8.5rem] h-9" />
          </p>
          <p className="flex items-center gap-2 flex-wrap mt-7">
            <img src={PressureIcon} />
            <label htmlFor="metric-pressure-low" className="text-sm font-bold text-shades-600 mr-auto">PRESSÃO ARTERIAL</label>
            <label htmlFor="metric-pressure-high" hidden></label>
            <span>
              <input id="metric-pressure-low" type="number" className="form-input appearance-none rounded-md border-none shadow min-w-0 w-[60px] h-9 mr-4" />
              <input id="metric-pressure-high" type="number" className="form-input appearance-none rounded-md border-none shadow min-w-0 w-[60px] h-9" />
            </span>
          </p>
          <div className="mt-8 flex justify-end gap-3">
            <button type="button" className="relative leading-none py-2 px-4 text-blue-400 text-xsm font-semibold bg-blue-200 rounded active:bg-blue-400 active:text-white
              before:content-[' '] before:absolute before:left-2 before:border-l before:border-b before:rotate-45 before:w-[0.3rem] before:h-[0.3rem] before:top-[0.65rem] "
            >Anterior</button>
            <button type="button" className="relative leading-none py-2 px-4 text-blue-400 text-xsm font-semibold bg-blue-200 rounded active:bg-blue-400 active:text-white
              after:content-[' '] after:absolute after:right-2 after:border-r after:border-t after:rotate-45 after:w-[0.3rem] after:h-[0.3rem] after:top-[0.65rem] "
            >Próximo</button>
          </div>
        </fieldset>
      </div>
    </div>
  )
}
