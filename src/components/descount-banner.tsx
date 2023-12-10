import React from 'react';
import { Tags, BadgeCheck } from 'lucide-react';

type Props = {};

function DescountBanner({}: Props) {
  return (
    <div className="flex w-auto gap-10 mt-10 justify-center items-center text-gray-800">
      <div className="bg-teal-50 w-full py-8 rounded-md flex gap-3 font-semibold text-[1.5rem] justify-center items-center">
        <Tags className="text-teal-400" size={48} />
        Descuento hasta 25% en{' '}
        <span className="text-cyan-600">Cada Compra</span>
      </div>
      <div className="bg-orange-50 w-full py-8 rounded-md flex gap-3 font-semibold text-[1.5rem] justify-center items-center">
        <BadgeCheck className="text-teal-400" size={48} />
        Licencia Comercial Extendida{' '}
        <span className="text-cyan-600">Gratis</span>
      </div>
    </div>
  );
}

export default DescountBanner;
