import { LayoutTemplate } from 'lucide-react';

export const systemDesignTopic = {
  id: 'system-design',
  card: {
    title: "System Design",
    path: "/learn/system-design",
    desc: "Scale, dist-systems, and architecture.",
    Icon: LayoutTemplate,
    color: "from-purple-400/20 to-pink-400/20",
    iconColor: "text-purple-400"
  },
  content: [
    {
      type: 'hero',
      title: 'System Design',
      subtitle: 'Designing large-scale distributed systems',
      icon: LayoutTemplate
    },
    {
       type: 'section',
       title: 'Coming Soon',
       content: "Detailed System Design content is currently under development."
    }
  ]
};
