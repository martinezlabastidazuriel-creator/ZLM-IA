function Navbar() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
        data-name="navbar"
        data-file="components/Navbar.js"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-[var(--primary-color)]">
            Zuriel L.
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('mi-carrera')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">
              Mi Carrera
            </button>
            <button onClick={() => scrollToSection('redes-sociales')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">
              Redes Sociales
            </button>
            <button onClick={() => scrollToSection('proyectos')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">
              Proyectos
            </button>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}