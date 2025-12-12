import { useParams, Link } from 'react-router-dom';
import MarkdownDisplay from '../components/MarkdownDisplay';
import TopicDetail from '../components/TopicDetail';
import { topicDetails } from '../data/topics';

const TopicContent = () => {
  const { topic, slug } = useParams();

  // Check if we have rich data for this topic and we are at the root (no slug)
  const featuredTopic = !slug && topicDetails[topic];

  // Construct path based on topic and slug
  const filePath = `${topic}/${slug || 'notes'}.md`;

  if (featuredTopic) {
    return <TopicDetail data={featuredTopic} />;
  }

  // Check if it's a registered custom component for this topic
  const customComponent = topicDetails[topic]?.customComponents?.[slug];

  if (customComponent) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold mb-8 text-neutral-100">{customComponent.title}</h1>
         {customComponent.component}
      </div>
    );
  }

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
