import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import NavItems from './NavItems';
import { buttonVariants } from './ui/button';
import Cart from './Cart';
import { getServerSideUser } from '@/lib/payload-utils';
import { cookies } from 'next/headers';
import UserAccountNav from './UserAccountNav';
import MobileNav from './MobileNav';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Navbar = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <MobileNav />

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  {/* <Icons className="h-10 w-10" /> */}
                  <Image
                    src="/logo.png"
                    height={46}
                    width={40}
                    alt="logo"
                    className="h-10 w-10"
                  />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div
                  className={cn(
                    buttonVariants({
                      variant: 'destructive',
                    }),
                    'text-[1rem]'
                  )}
                >
                  <span className="font-bold">25% off</span>{' '}
                  <span>&nbsp;Navidad</span>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <div className="flex lg:ml-6">
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  </div>
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({
                        variant: 'ghost',
                      })}
                    >
                      Ingresa
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <UserAccountNav user={user} />
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({
                        variant: 'ghost',
                      })}
                    >
                      Crear cuenta
                    </Link>
                  )}

                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
                <div className="!ml-6 flow-root lg:ml-6">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
