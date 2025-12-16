function About() {
  try {
    const interests = [
      { icon: 'globe', title: 'Desarrollo Web', desc: 'Frontend y Backend' },
      { icon: 'binary', title: 'Estructuras de Datos', desc: 'Algoritmos Eficientes' },
      { icon: 'shield', title: 'Ciberseguridad', desc: 'Protección Digital' },
      { icon: 'cpu', title: 'Software', desc: 'Desarrollo de Aplicaciones' }
    ];

    return (
      <section 
        id="mi-carrera"
        className="py-20 bg-white"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Sobre Mi Carrera</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Como estudiante de Ingeniería en Sistemas Computacionales, me apasiona explorar 
              diversas áreas de la tecnología. Mi enfoque principal incluye el desarrollo web 
              full-stack, el estudio profundo de estructuras de datos y algoritmos, la ciberseguridad, 
              y la creación de software innovador que resuelva problemas reales.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
                  <div className={`icon-${item.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}