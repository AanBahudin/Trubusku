import { useState, useEffect } from 'react';
import { navlist } from '@/utils/landingnavlist';

const Navbar = () => {
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight;
      
      const opacity = Math.min(scrollTop / heroHeight, 1);
      setBgOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`py-12 w-full flex fixed z-10 mx-auto transition-all duration-300 `}
      style={{backgroundColor: `rgba(250,250,250,${bgOpacity})` }}>
        <main className='w-[90%] mx-auto flex  justify-between items-center'>
          {/* left section */}
          <section>
            <h1>LOGO</h1>
          </section>

          {/* navlinks */}
          <section className="flex items-center justify-center gap-x-10">
            {navlist.map((item) => (
              <a key={item.url} href={item.url} className="transition-colors duration-300">
                {item.title}
              </a>
            ))}
          </section>
        </main>

    </nav>
  );
};

export default Navbar;