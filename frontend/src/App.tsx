import { Aside } from "./components/Aside"
import { Main } from "./components/Main"

function App() {

  return (
    <div className="min-h-screen grid grid-cols-[1fr,1.9fr]">
      <Aside />
      <Main />
    </div>
  )
}

export default App
