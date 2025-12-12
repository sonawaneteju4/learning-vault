import { Server } from 'lucide-react';

export const nodeTopic = {
  id: 'node',
  card: {
    title: "Node.js",
    path: "/learn/node",
    desc: "Runtime, events, and streams.",
    Icon: Server,
    color: "from-green-400/20 to-emerald-400/20",
    iconColor: "text-green-400"
  },
  content: [
    {
      type: 'hero',
      title: 'Node.js',
      subtitle: 'JavaScript runtime built on Chrome\'s V8 engine',
      icon: Server
    },
    {
       type: 'section',
       title: 'Coming Soon',
       content: "Detailed Node.js content is currently under development."
    }
  ]
};
