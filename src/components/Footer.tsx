'use client';

import { usePathname } from 'next/navigation';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const pathname = usePathname();
  const pathsToMinimize = ['/verify-email', '/sign-up', '/sign-in'];

  return (
    <footer className="bg-white flex-grow-0">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200">
          {pathsToMinimize.includes(pathname) ? null : (
            <div className="pb-8 pt-16">
              <div className="flex justify-center">
                <Image
                  src="/logo.png"
                  height={86}
                  width={80}
                  alt="logo"
                  className="h-12 w-auto"
                />
              </div>
            </div>
          )}

          {pathsToMinimize.includes(pathname) ? null : (
            <div>
              <div className="relative flex items-center px-6 py-6 sm:py-8 lg:mt-0">
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div
                    aria-hidden="true"
                    className="absolute bg-zinc-50 inset-0 bg-gradient-to-br bg-opacity-90"
                  />
                </div>

                <div className="text-center relative mx-auto max-w-sm">
                  <h3 className="font-semibold text-gray-900">Sé vendedor</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Si deseas vender productos digitales de alta calidad, puedes
                    hacerlo en cuestión de minutos.{' '}
                    <Link
                      href="/sign-in?as=seller"
                      className="whitespace-nowrap font-medium text-black hover:text-zinc-900"
                    >
                      Comenzar ahora &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold">Sobre este sitio: </span>
            construido con React & Next.js, TypeScript, Payload CMS, TRCP,
            Tailwind CSS, React Email & Resend, self host Express on Next.js
            Render hosting.
          </p>
        </div>

        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Todos los derechos reservados{' '}
              <span> | </span>{' '}
              <a href="http://github.com/joelapablaza" target="_blank">
                <span>Joel Apablaza</span>
              </a>
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Terminos
              </Link>
              <Link
                href="/policy"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Politica de privacidad
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Política de cookies
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
