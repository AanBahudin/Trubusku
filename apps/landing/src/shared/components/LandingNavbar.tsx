import { navlist } from '@/utils/landingnavlist';
import Button from './Button';
import { LogIn, MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`py-3 w-full flex mx-auto transition-all duration-300 bg-background-card sticky top-0 z-50 ${isScrolled ? "shadow-lg" : "bg-white"}` }>
      <main className='w-[90%] lg:w-[80%] mx-auto flex  justify-between items-center'>
        {/* left section */}
        <section className='w-1/8'>
          <Logo className='w-16 h-16 ' />
        </section>

        {/* navlinks */}
        <section className="hidden lg:flex flex-1 items-center justify-center gap-x-6 ">
          {navlist.map((item) => (
            <a key={item.url} href={item.url} className="transition-colors duration-300 text-secondary-700 font-medium text-sm hover:text-primary-300">
              {item.title}
            </a>
          ))}
        </section>

        <Button className='hidden w-1/8 tracking-wide hover:bg-primary-500 duration-150 ease-in-out lg:flex items-center justify-center gap-x-2'>
          <span>Masuk</span>
          <LogIn className='w-5' />
        </Button>
        <MenuIcon className='block lg:hidden hover:stroke-primary-700 duration-150 ease-in-out' />
      </main>
    </nav>
  );
};

export default Navbar;