import { NavLink } from 'react-router-dom';

const Sidebar = ({ items = [], title }) => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-neutral-800 bg-neutral-900/30 min-h-[calc(100vh-4rem)] hidden md:block">
      <div className="p-6 sticky top-16">
        {title && (
          <NavLink to={`/learn/${title.toLowerCase()}`} className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6 px-3">
            {title}
          </NavLink>
        )}
        <nav className="space-y-1 mt-2">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-purple-500/10 text-purple-400'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
