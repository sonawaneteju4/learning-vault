import { Component, Zap, Globe, Server, Smartphone } from 'lucide-react';
import { Atom } from 'lucide-react';
import Counter from '../../components/Counter';

export const reactTopic = {
  id: 'react',
  // Metadata for Home Page Card
  card: {
    title: "React JS",
    path: "/learn/react",
    desc: "Hooks, patterns, and performance.",
    Icon: Atom,
    color: "from-blue-400/20 to-cyan-400/20",
    iconColor: "text-blue-400"
  },
  // Full Content
  content: [
    {
      type: 'hero',
      title: 'React JS',
      subtitle: 'A JavaScript library for building user interfaces',
      icon: Component
    },
    {
      type: 'section',
      title: 'Overview',
      content: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies."
    },
    {
      type: 'list',
      title: 'Key Concepts',
      items: [
         "Component-Based Architecture",
         "Virtual DOM for Performance",
         "Declarative UI",
         "Unidirectional Data Flow"
      ]
    },
    {
      type: 'custom',
      component: <Counter />
    },
    {
      type: 'accordion',
      title: 'Deep Dive: History & Evolution',
      items: [
         {
             title: "The Early Days (2011-2013)",
             content: "React was created by Jordan Walke, a software engineer at Facebook. It was influenced by XHP, an HTML component framework for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram.com in 2012. It was open-sourced at JSConf US in May 2013."
         },
         {
             title: "React Fiber (2017)",
             content: "On April 18, 2017, Facebook announced React Fiber, a new core algorithm of React library for building user interfaces. React Fiber was to become the foundation of any future improvements and feature development of the React library."
         },
         {
             title: "Hooks (2019)",
             content: "Hooks are functions that let developers \"hook into\" React state and lifecycle features from function components. Hooks do not work inside classes — they let you use React without classes."
         }
      ]
    },
    {
      type: 'mermaid',
      code: `
graph TD
  A[Real DOM] -->|State Change| B(Virtual DOM Update)
  B --> C{Diffing Algorithm}
  C -->|Changes Detected| D[Batch Updates]
  D -->|Efficiently Updates| A
      `,
      caption: "Virtual DOM Reconcilliation Process"
    },
    {
      type: 'grid',
      title: 'Ecosystem & Sub-Topics',
      columns: 2,
      items: [
           {
              icon: Zap,
              title: "State Management",
              description: "Redux, Zustand, Recoil, and Context API."
           },
           {
              icon: Globe,
              title: "Routing",
              description: "React Router, TanStack Router."
           },
           {
              icon: Server,
              title: "Server Side Rendering",
              description: "Next.js, Remix."
           },
           {
              icon: Smartphone,
              title: "Mobile Development",
              description: "React Native, Expo."
           }
      ]
    },
    {
       type: 'table',
       title: "Comparison",
       headers: ["Feature", "React", "Angular", "Vue"],
       rows: [
          ["Architecture", "Library (View Layer)", "Framework (Full MVC)", "Framework (Progressive)"],
          ["Language", "JavaScript / JSX", "TypeScript", "JS / HTML Templates"],
          ["Learning Curve", "Moderate", "Steep", "Gentle"],
       ]
    },
    {
        type: 'resources',
        items: [
          { title: "Official Documentation", url: "https://react.dev", type: "external", icon: Globe },
          { title: "Next.js (React Framework)", url: "https://nextjs.org", type: "external", icon: Server },
        ]
    }
  ],
  customComponents: {
    'counter-demo': {
      title: 'Interactive Counter',
      component: <Counter />
    }
  }
};
