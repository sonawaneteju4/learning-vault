import { Outlet, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useMemo } from 'react';
import { topicDetails } from '../data/topics';

const TopicLayout = () => {
  const { topic } = useParams();

  // Dynamically generate sidebar items based on available markdown files
  const sidebarItems = useMemo(() => {
    // We can't use dynamic template strings in import.meta.glob for the directory part easily 
    // without loading EVERYTHING. 
    // So we glob everything and filter.
    const modules = import.meta.glob('/learnings/**/*.md');
    
    const mdItems = Object.keys(modules)
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
      });
    // 3. Merge and Sort
    const mergedItems = [...mdItems];

    const currentTopicData = topicDetails[topic];
    if (currentTopicData && currentTopicData.customComponents) {
      Object.keys(currentTopicData.customComponents).forEach(slug => {
          mergedItems.push({
              label: currentTopicData.customComponents[slug].title,
              path: `/learn/${topic}/${slug}`
          });
      });
    }

    return mergedItems.sort((a, b) => {
        if (a.label === 'Notes' || a.label === 'Index') return -1;
        if (b.label === 'Notes' || b.label === 'Index') return 1;
        
        // Prioritize Topic Detail (Index) if we had a specific label for it, 
        // but here we are just mixing MD and Components. 
        
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
