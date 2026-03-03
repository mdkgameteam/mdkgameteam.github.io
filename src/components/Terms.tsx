import React from 'react';
import SectionCard from './ui/SectionCard';

function Terms() {
  return (
    <SectionCard title="Términos y condiciones de MDK Game Team">
      <div className="max-w-4xl mx-auto text-gray-300">
        <p className="mb-6">Al acceder y utilizar nuestros servicios, incluidas nuestras aplicaciones de desarrollo en Minecraft, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con estos términos, por favor, no utilices nuestros servicios.</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">1. Aceptación de Términos y Condiciones</h3>
        <p className="mb-4">Al usar los servicios de MDK Game Team, aceptas cumplir con nuestros Términos y Condiciones. Estos términos establecen las reglas y directrices que rigen tu participación en nuestro equipo y el uso de nuestras plataformas. Al aceptar, reconoces que has leído, comprendido y estás de acuerdo con los siguientes puntos:</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">2. Servicios Principales</h3>
        <p className="mb-4">MDK Game Team desarrolla varios tipos de actividades como:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Evento:</strong> Actividad que su duracion es de dias y semanas</li>
          <li><strong>Serie:</strong> Proyectos que su duración es de semanas incluso meses</li>
          <li><strong>Torneo:</strong> Eventos Competitivos donde su duracion suele ser de 1 semana</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-3">3. Servicios de terceros</h3>
        <p className="mb-4">MDK Game Team utiliza algunos servicios de terceros para la realización de eventos:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Forge/Fabric: Un sistema de carga de mods para Minecraft.</li>
          <li>Minecraft de Mojang: El videojuego en sí, desarrollado y mantenido por Microsoft y Mojang.</li>
          <li>Embeddium/Rubidium/Sodium: Sistema de optimización para el juego</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-3">4. Uso Responsable</h3>
        <p className="mb-4">Los usuarios deben utilizar la aplicación de manera legal y ética, evitando cualquier actividad que cause daño a otros, sobrecargue el sistema, o infrinja la privacidad, con la posibilidad de suspensión del acceso en caso de violaciones.</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">5. Modificaciones de los términos</h3>
        <p className="mb-4">En MDK Game Team se reserva el derecho de modificar estos términos y condiciones en cualquier momento, notificando a los participantes sobre los cambios.</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">6. Confidencialidad</h3>
        <p className="mb-6">Los detalles sobre los eventos, incluidas las estrategias y los resultados, deben ser tratados con confidencialidad y no compartidos sin autorización.</p>
      </div>
    </SectionCard>
  );
}

export default React.memo(Terms);
