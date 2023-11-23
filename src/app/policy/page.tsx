"use client";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0 mb-10">
      <div className="w-[95%] !800px:w-[82%] m-auto py-2 px-3 text-white my-10">
        <h1
          className={`text-[25px] text-black dark:text-white font-[500] font-Poppins py-2 !text-center pt-2 800px:!text-[45px]`}
        >
          Policy Terms & <span className="text_animation">Conditions</span>
        </h1>
      </div>
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Una de nuestras principales prioridades en el sitio web de
            Digital-Capi es la privacidad de la información de nuestros
            usuarios. Este documento contiene información detallada sobre qué
            información recopilamos del sitio web de LearnIt y cómo la
            utilizamos.
            <br />
            Si tienes alguna pregunta o necesitas más información sobre nuestra
            política de privacidad, no dudes en contactarnos.
            <br />
            Esta Política de Privacidad se aplica solo a nuestras actividades en
            línea y es válida para la información compartida por los visitantes
            de nuestro sitio web y/o recopilada en el sitio web de Digital-Capi.
            Esta política no se aplica a la información recopilada fuera de
            línea o a través de canales distintos a este sitio web.
          </p>
          <br />
          <br />
          <li className="text-[22px] text-cyan-400">Consentimiento</li>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Al utilizar nuestro sitio web, se considera que aceptas nuestra
            Política de Privacidad y Términos.
          </p>
          <br />
          <br />
          <li className="text-[22px] text-cyan-400">
            ¿Qué información recopilamos?
          </li>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Cuando te pedimos que proporciones tu información personal en el
            sitio web, se te indicará por qué se te pide proporcionarla.
            <br />
            Si nos contactas directamente, podemos recopilar información
            adicional sobre ti, como tu nombre, dirección de correo electrónico,
            número de teléfono, contenido de la comunicación y/o cualquier
            archivo adjunto u otra información que nos envíes.
          </p>
          <br />
          <br />
          <li className="text-[22px] text-cyan-400">
            Confidencialidad de contraseñas personales
          </li>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            La contraseña que se te pide ingresar al abrir una cuenta en nuestro
            sitio web está encriptada y se almacena de forma segura en nuestra
            base de datos. Como resultado, no podemos ver el contenido original
            de tu contraseña. Por lo tanto, la privacidad de tu contraseña está
            adecuadamente protegida en nuestro sitio web. Además, para proteger
            la privacidad de tu contraseña, nunca la compartas con nadie. Si
            crees que tu contraseña ha sido comprometida por alguien más,
            cámbiala inmediatamente desde el sitio web. Si no puedes cambiar la
            contraseña, contacta a nuestro soporte.
          </p>
          <br />
          <br />
          <li className="text-[22px] text-cyan-400">Cookies</li>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Al igual que todos los demás sitios web, el sitio web de LearnIt y
            el navegador utilizan cookies (&apos;cookies&apos;). Estas cookies
            se utilizan para almacenar información, incluidas las preferencias
            de los visitantes y las páginas del sitio web que el visitante ha
            accedido o visitado. La información se utiliza para optimizar la
            experiencia de los usuarios personalizando el contenido de nuestras
            páginas web en función del tipo de navegador de los visitantes y/u
            otra información.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default page;
