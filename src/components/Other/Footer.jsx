export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">BrandLogo</h2>
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center">
            <div className="flex flex-col md:flex-row justify-center md:justify-end">
              <a href="#home" className="px-4 py-2 hover:text-gray-400">Home</a>
              <a href="#about" className="px-4 py-2 hover:text-gray-400">About</a>
              <a href="#services" className="px-4 py-2 hover:text-gray-400">Services</a>
              <a href="#contact" className="px-4 py-2 hover:text-gray-400">Contact</a>
            </div>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-right">
            <div className="flex justify-center md:justify-end">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500">&copy; 2024 BrandLogo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

  