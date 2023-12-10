import React from 'react';
import { Tags, BadgeCheck } from 'lucide-react';

type Props = {};

function DiscountBanner({}: Props) {
  return (
    <div className="flex flex-col sm:flex-row w-auto gap-10 mt-10 justify-center items-center text-gray-800">
      <div className="flex max-h-[136px] bg-teal-50 w-full px-2 py-8 rounded-md gap-3 font-semibold text-[1.5rem] justify-center items-center">
        <Tags className="text-teal-400 pl2" size={48} />
        Descuento hasta 25% en{' '}
        <span className="text-cyan-600 text-center">Cada Compra</span>
      </div>
      <div className="flex max-h-[136px] bg-orange-50 w-full py-8 rounded-md gap-3 font-semibold text-[1.5rem] justify-center items-center">
        <BadgeCheck className="text-teal-400 pl-2" size={48} />
        Licencia Comercial Extendida{' '}
        <span className="text-cyan-600 pr-5 text-center">Gratis</span>
      </div>
    </div>
  );
}

export default DiscountBanner;
