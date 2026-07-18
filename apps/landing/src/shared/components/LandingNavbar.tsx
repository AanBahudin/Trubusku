import { navlist } from '@/utils/landingnavlist';

const Navbar = () => {
  return (
    <nav 
      className={`py-6 w-full flex mx-auto transition-all duration-300 `}>
        <main className='w-[80%] mx-auto flex  justify-between items-center'>
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