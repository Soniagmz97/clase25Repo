import PlanCard from './PlanCard'
import './App.css'

function App() {

  return (
    <>
      {/* PLAN */}
      <PlanCard nombrePlan='Familiar' esPopular={true} />
      <PlanCard nombrePlan='Individual' esPopular={false} />
    </>
  )
}

export default App
