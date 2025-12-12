import { useParams, Link } from 'react-router-dom';
import MarkdownDisplay from '../components/MarkdownDisplay';

const TopicContent = () => {
  const { topic, slug } = useParams();

  // Construct path based on topic and slug
  const filePath = `${topic}/${slug || 'notes'}.md`;

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="mb-4 md:hidden">
          <Link to="/" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
              &larr; Back to Dashboard
          </Link>
      </div>
      <MarkdownDisplay filePath={filePath} />
    </div>
  );
};

export default TopicContent;
