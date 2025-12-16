function Footer() {
  try {
    return (
      <footer 
        className="bg-[var(--text-primary)] text-white py-8"
        data-name="footer"
        data-file="components/Footer.js"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 Zuriel Labastida Martínez | Todos los derechos reservados
          </p>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}