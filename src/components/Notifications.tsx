// Definición de la Interface según instrucciones
interface NotificacionProps {
  mensaje: string;
  tipo: 'exito' | 'alerta' | 'error';
}

const Notificacion = ({ mensaje, tipo }: NotificacionProps) => {
  // Lógica de diseño (Tailwind)
  const estilos = {
    exito: "bg-green-100 text-green-800 border-green-500",
    alerta: "bg-yellow-100 text-yellow-800 border-yellow-500",
    error: "bg-red-100 text-red-800 border-red-500",
  };

  return (
    <div className={`border-l-4 p-4 my-3 rounded-md shadow-sm ${estilos[tipo]}`}>
        <p className="font-bold capitalize">{tipo}</p>
        <p className="text-sm">{mensaje}</p>
    </div>
  );
};

export default Notificacion;