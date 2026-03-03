import React from 'react';
import SectionCard from './ui/SectionCard';

function Security() {
  return (
    <SectionCard title="Seguridad del Launcher">
      <div className="max-w-4xl mx-auto text-gray-300">
        <p className="mb-4">En MDK Game Team, la seguridad es primordial. Nos aseguramos de que todos nuestros enlaces de descarga sean seguros, sin contenido malicioso. Nuestro propósito es distribuir nuestro contenido para un uso confiable en tu computadora. Puedes verificarlo con algún antivirus y comprobar que no hay amenazas presentes.</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Verificación de URL de MDK</h3>
        <p className="mb-4">Antes de ofrecer nuestros enlaces al público, realizamos una verificación exhaustiva con antivirus para garantizar la seguridad de cada URL. Nuestro equipo siempre está consciente de las normas de seguridad y se esfuerza por mantener un entorno seguro para nuestros usuarios.</p>

        <p className="mb-6 font-semibold">¡En MDK Game Team, la integridad y protección de nuestros usuarios es nuestra prioridad! Puedes explorar y disfrutar de nuestro contenido con total confianza en su seguridad. Agradecemos tu confianza en nosotros y seguiremos trabajando arduamente para brindarte el mejor contenido de manera segura y confiable.</p>
      </div>
    </SectionCard>
  );
}

export default React.memo(Security);
