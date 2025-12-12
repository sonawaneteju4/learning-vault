import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'github-markdown-css/github-markdown-dark.css';

const CodeSnippet = ({ code, language = 'javascript', filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Wrap code in markdown code block format for highlighting if not already
  const markdownContent = `\`\`\`${language}\n${code}\n\`\`\``;

  return (
    <div className="rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-800/50 border-b border-neutral-800">
        <div className="flex items-center gap-2">
            {filename && (
                <span className="text-xs text-neutral-400 font-mono">{filename}</span>
            )}
            {!filename && (
                 <span className="text-xs text-neutral-500 uppercase">{language}</span>
            )}
        </div>
        <button
          onClick={handleCopy}
          className="text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
        >
          {copied ? (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="markdown-body !m-0 !bg-transparent p-0">
         <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {markdownContent}
         </ReactMarkdown>
      </div>
    </div>
  );
};

export default CodeSnippet;
