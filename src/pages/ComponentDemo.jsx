import CodeSnippet from '../components/CodeSnippet';
import MarkdownDisplay from '../components/MarkdownDisplay';

const ComponentDemo = () => {
    const demoCode = `
// Example Code
function helloWorld() {
  console.log("Hello, World!");
}
`;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Code Snippet Demo</h2>
        <p className="text-neutral-400 mb-4">Test copy functionality and syntax highlighting.</p>
        <CodeSnippet 
            code={demoCode} 
            filename="example.js" 
            language="javascript" 
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Markdown Display Demo</h2>
        <p className="text-neutral-400 mb-4">Rendering content from `react/notes.md`</p>
        <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/30">
            <MarkdownDisplay filePath="react/notes.md" />
        </div>
      </section>
    </div>
  );
};

export default ComponentDemo;
