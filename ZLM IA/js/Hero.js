function Hero() {
  try {
    return (
      <section 
        id="inicio"
        className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-[var(--bg-light)] to-white"
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--text-primary)]">
                Zuriel Labastida Martínez
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Estudiante de Ingeniería en Sistemas Computacionales apasionado por la tecnología, 
                el desarrollo de software y la innovación. Constantemente aprendiendo y creando 
                soluciones que impacten positivamente.
              </p>
              <button 
                onClick={() => document.getElementById('mi-carrera').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Saber más
              </button>
            </div>
            <div className="animate-fade-in">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-[var(--primary-color)] to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="icon-code text-[120px] text-white opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}