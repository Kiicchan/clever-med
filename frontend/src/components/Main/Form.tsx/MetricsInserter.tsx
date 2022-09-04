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
        <fieldset className="border-r border-shades-100">
          {radioOptions.map(value => <p key={value}><label> <input type="radio" name="size" value={value} /> {value} </label></p>)}
        </fieldset>
        <div>
          metrics
        </div>
      </div>
    </div>
  )
}
