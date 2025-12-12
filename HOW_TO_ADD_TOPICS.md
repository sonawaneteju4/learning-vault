# How to Add and Improve Topics

This guide explains how to add new topics to the Learning Vault and how to structure them to be as useful and interactive as possible.

## 1. Adding a New Topic

To add a new learning topic, follow these three simple steps:

### Step 1: Create the Topic File
Create a new `.jsx` file in `src/data/topics/`. For example, `typescript.jsx`.

### Step 2: Define the Topic Structure
Copy the template below into your new file. This structure defines both the card that appears on the home page and the detailed content page.

```jsx
import { FileCode, Globe } from 'lucide-react'; // Import icons

export const myNewTopic = {
  id: 'my-new-topic', // Unique ID (used in URL)
  
  // Card Metadata (Home Page)
  card: {
    title: "My New Topic",
    path: "/learn/my-new-topic",
    desc: "A short description suitable for a card.",
    Icon: FileCode,
    color: "from-green-400/20 to-emerald-400/20", // Gradient background
    iconColor: "text-green-400"
  },

  // Detailed Content (Topic Page)
  content: [
    {
      type: 'hero',
      title: 'My New Topic',
      subtitle: 'Understanding the fundamentals.',
      icon: FileCode
    },
    {
      type: 'section',
      title: 'Introduction',
      content: "This is the main introduction text for the topic."
    }
  ]
};
```

### Step 3: Register the Topic
Open `src/data/topics/index.js` and add your new topic to the list.

```javascript
import { reactTopic } from './react';
import { myNewTopic } from './typescript'; // 1. Import it

const allTopics = [
  reactTopic,
  myNewTopic // 2. Add it to this array
];
```

---

## 2. Making Topics Useful (Content Types)

To make your topics engaging, use a variety of content blocks. The system supports several rich content types. Mix and match them in the `content` array.

### Text Section
Good for general explanations.
```javascript
{
  type: 'section',
  title: 'Overview', // Optional
  content: "Markdown-style text or plain paragraphs."
}
```

### Lists
Good for features, pros/cons, or key takeaways.
```javascript
{
  type: 'list',
  title: 'Key Features',
  items: [
    "Static Typing",
    "Interface Definitions",
    "Generics"
  ]
}
```

### Mermaid Diagrams
Great for visualizing flows, architectures, or relationships.
```javascript
{
  type: 'mermaid',
  caption: 'Compiling Process',
  code: `
graph TD
  A[TS Code] -->|Transpiler| B(JS Code)
  B --> C{Browser Engine}
  `
}
```

### Data Grid
Useful for showing sub-topics or ecosystem tools.
```javascript
{
  type: 'grid',
  title: 'Ecosystem',
  columns: 2, // 1, 2, or 3
  items: [
     { icon: Globe, title: "Tool A", description: "Does X" },
     { icon: Globe, title: "Tool B", description: "Does Y" }
  ]
}
```

### Comparison Table
Perfect for "Vs" comparisons (e.g., React vs Angular).
```javascript
{
  type: 'table',
  title: "Comparison",
  headers: ["Feature", "Option A", "Option B"],
  rows: [
     ["Performance", "High", "Medium"],
     ["Complexity", "Low", "High"]
  ]
}
```

### Accordion (Deep Dives)
Use this for detailed history, advanced concepts, or FAQs to keep the main page clean.
```javascript
{
  type: 'accordion',
  title: 'Advanced Concepts',
  items: [
     { title: "Concept 1", content: "Explanation..." },
     { title: "Concept 2", content: "Explanation..." }
  ]
}
```

### Resources
Link to external docs or tutorials.
```javascript
{
  type: 'resources',
  items: [
    { title: "Official Docs", url: "https://...", type: "external", icon: Globe }
  ]
}
```

### Custom Interactive Components
You can embed real React components!
1. Import your component at the top of the file.
2. Add a `custom` block.

```javascript
import MyInteractiveDemo from '../../components/demos/MyDemo';

// ... inside content array
{
  type: 'custom',
  component: <MyInteractiveDemo />
}
```

---

## 3. Best Practices for Quality

1.  **Start Strong**: Use the `hero` block to clearly state what the topic is and why it matters.
2.  **Visuals First**: Use Mermaid diagrams for processes and Grids for grouping concepts. Long walls of text are hard to read.
3.  **Interaction**: If possible, add a small interactive counter or demo (using the `custom` type) to keep the user engaged.
4.  **Structure**:
    *   **Intro**: What is it?
    *   **Core Concepts**: Lists or Grids.
    *   **Deep Dive**: Accordions for nitty-gritty details.
    *   **Comparison**: Tables for context.
    *   **Resources**: Where to go next.
