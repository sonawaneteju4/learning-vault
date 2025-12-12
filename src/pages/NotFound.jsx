import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <h1 className="text-9xl font-bold text-neutral-800 select-none">404</h1>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-neutral-100">Page not found</h2>
        <p className="text-neutral-400">The page you are looking for doesn't exist or has been moved.</p>
      </div>
      <Link 
        to="/" 
        className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
