import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
      <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Learning Vault
          </Link>
          <nav className="flex gap-6">
            <Link to="/" className="text-sm font-medium hover:text-purple-400 transition-colors">
              Home
            </Link>
            {/* Add more nav links here later */}
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-800 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Learning Vault. Defined for Builders.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
