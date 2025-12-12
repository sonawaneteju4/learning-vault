import { reactTopic } from './react';
import { javascriptTopic } from './javascript';
import { nodeTopic } from './node';
import { systemDesignTopic } from './system-design';

// Master list of all topics
const allTopics = [
  reactTopic,
  javascriptTopic,
  nodeTopic,
  systemDesignTopic
];

// Export list for Home Page grid (extracting only card data)
export const topicsList = allTopics.map(t => ({
    ...t.card,
    id: t.id // Ensure ID is available if needed for keys
}));

// Export map for Topic Detail lookup
export const topicDetails = allTopics.reduce((acc, topic) => {
    acc[topic.id] = topic;
    return acc;
}, {});
