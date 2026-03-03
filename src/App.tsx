import PlanCard from './components/PlanCard/PlanCard'
import StockBadge from './components/StockBadge/StockBadge'
import Notifications from './components/Notifications'
import './App.css'

function App() {

  return (
    <>
      {/* PLAN */}
      <PlanCard nombrePlan='Familiar' esPopular={true} />
      <PlanCard nombrePlan='Individual' esPopular={false} />

      {/* STOCK BADGE */}
      <StockBadge productName='camiseta' quantity={0} />
      <StockBadge productName='pantalones' quantity={5} />
      <StockBadge productName='abrigo' quantity={15} />

      {/* NOTIFICATIONS */}
      <Notifications tipo='exito' mensaje='Usuario creado' />
      <Notifications tipo='alerta' mensaje='No hay gasolina' />
      <Notifications tipo='error' mensaje='No se pudo guardar en la base de datos' />
    </>
  )
}

export default App
