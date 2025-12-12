import { FileJson } from 'lucide-react';

export const javascriptTopic = {
  id: 'javascript',
  card: {
    title: "JavaScript",
    path: "/learn/javascript",
    desc: "ES6+, async, and closures.",
    Icon: FileJson,
    color: "from-yellow-400/20 to-orange-400/20",
    iconColor: "text-yellow-400"
  },
  content: [
    {
      type: 'hero',
      title: 'JavaScript',
      subtitle: 'The language of the web',
      icon: FileJson
    },
    {
       type: 'section',
       title: 'Coming Soon',
       content: "Detailed JavaScript content is currently under development."
    }
  ]
};
