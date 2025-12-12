import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'github-markdown-css/github-markdown-dark.css';

const MarkdownDisplay = ({ filePath }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      setError(null);
      
      if (!filePath) {
          setLoading(false);
          return;
      }

      try {
        // We use the same glob pattern as before to ensure Vite includes the files
        const modules = import.meta.glob('/learnings/**/*.md', { query: '?raw', import: 'default' });
        
        // Construct the full path if not already provided as a key
        // We expect filePath to be like 'react/notes.md' corresponding to '/learnings/react/notes.md'
        // Or full path '/learnings/react/notes.md'
        let targetPath = filePath.startsWith('/learnings') ? filePath : `/learnings/${filePath}`;
        
        const loadFile = modules[targetPath];

        if (!loadFile) {
            // Try adding extension if missing
            targetPath = `${targetPath}.md`;
            if (!modules[targetPath]) {
                 throw new Error(`File not found: ${filePath}`);
            }
        }

        const markdown = await modules[targetPath]();
        setContent(markdown);
      } catch (err) {
        console.error("Failed to load markdown:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [filePath]);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 border border-red-900/50 bg-red-900/10 rounded-lg text-red-200">
        <p>Error loading content: {error}</p>
      </div>
    );
  }

  return (
    <article className="markdown-body" style={{ background: 'transparent', color: '#e5e5e5' }}>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default MarkdownDisplay;
