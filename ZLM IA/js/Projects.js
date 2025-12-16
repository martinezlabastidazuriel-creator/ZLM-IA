function Projects() {
  try {
    const projects = [
      {
        title: 'Sistema de Gestión Académica',
        description: 'Aplicación web para la administración de calificaciones y asistencias desarrollada con tecnologías modernas.',
        tags: ['Web', 'Backend']
      },
      {
        title: 'Algoritmos de Ordenamiento',
        description: 'Implementación visual de diferentes algoritmos de ordenamiento con análisis de complejidad temporal.',
        tags: ['Algoritmos', 'Visualización']
      },
      {
        title: 'Portafolio Personal',
        description: 'Sitio web responsive para mostrar proyectos y habilidades con diseño moderno y animaciones.',
        tags: ['Frontend', 'Diseño']
      },
      {
        title: 'Juego Gemini 5.0',
        description: 'Juego web publicado en GitHub Pages.',
        tags: ['Juego', 'Web'],
        url: 'https://martinezlabastidazuriel-creator.github.io/juegogemini5.0/'
      },
      {
        title: 'Examen 1',
        description: 'Proyecto del examen 1 publicado en GitHub Pages.',
        tags: ['Proyecto', 'Web'],
        url: 'https://martinezlabastidazuriel-creator.github.io/examen1/'
      },
      {
        title: 'IA Estudiante de Ingeniería (S.I.A.)',
        description: 'Proyecto de inteligencia artificial para estudiantes publicado en GitHub Pages.',
        tags: ['IA', 'Proyecto', 'Web'],
        url: 'https://martinezlabastidazuriel-creator.github.io/ia-estudiante-de-ingieneria-',
        image: '/img/sia.svg'
      },
      {
        title: 'Mosqueteros (Avila)',
        description: 'Versión del proyecto Mosqueteros publicada por Avila.',
        tags: ['Proyecto', 'Web'],
        url: 'https://avilamiguel1007.github.io/Mosqueteros/'
      }
    ];

    return (
      <section 
        id="proyectos"
        className="py-20 bg-white"
        data-name="projects"
        data-file="components/Projects.js"
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Proyectos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4 rounded-md" />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mb-4">
                    <div className="icon-folder-code text-xl text-[var(--primary-color)]"></div>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[var(--secondary-color)] text-[var(--primary-color)] text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center inline-block">Ver Detalles</a>
                ) : (
                  <button className="btn-primary w-full">Ver Detalles</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}