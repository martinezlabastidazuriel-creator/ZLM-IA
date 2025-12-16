function Social() {
  try {
    const socials = [
      { name: 'Facebook', icon: 'facebook', color: '#1877f2', url: '#' },
      { name: 'Instagram', icon: 'instagram', color: '#e4405f', url: '#' },
      { name: 'GitHub', icon: 'github', color: '#333', url: '#' }
    ];

    return (
      <section 
        id="redes-sociales"
        className="py-20 bg-[var(--bg-light)]"
        data-name="social"
        data-file="components/Social.js"
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title">Mis Redes Sociales</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card text-center group"
              >
                <div 
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: social.color + '20' }}
                >
                  <div 
                    className={`icon-${social.icon} text-3xl`}
                    style={{ color: social.color }}
                  ></div>
                </div>
                <h3 className="text-xl font-semibold">{social.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Social component error:', error);
    return null;
  }
}