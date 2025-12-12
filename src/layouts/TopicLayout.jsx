import { Outlet, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useMemo } from 'react';

const TopicLayout = () => {
  const { topic } = useParams();

  // Dynamically generate sidebar items based on available markdown files
  const sidebarItems = useMemo(() => {
    // We can't use dynamic template strings in import.meta.glob for the directory part easily 
    // without loading EVERYTHING. 
    // So we glob everything and filter.
    const modules = import.meta.glob('/learnings/**/*.md');
    
    return Object.keys(modules)
      .filter(path => path.includes(`/learnings/${topic}/`))
      .map(path => {
        // Extract filename without extension
        const fileName = path.split('/').pop().replace('.md', '');
        
        // Format label (hyphens to spaces, capitalize)
        const label = fileName
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        return {
            label,
            path: `/learn/${topic}/${fileName}`
        };
      })
      // Sort: index/notes first, then alphabetical
      .sort((a, b) => {
          if (a.label === 'Notes' || a.label === 'Index') return -1;
          if (b.label === 'Notes' || b.label === 'Index') return 1;
          return a.label.localeCompare(b.label);
      });
  }, [topic]);

  const topicTitle = topic?.charAt(0).toUpperCase() + topic?.slice(1);

  return (
    <div className="flex container mx-auto px-4">
      <Sidebar title={topicTitle} items={sidebarItems} />
      <main className="flex-1 min-w-0 py-8 md:pl-8">
        <Outlet />
      </main>
    </div>
  );
};

export default TopicLayout;
