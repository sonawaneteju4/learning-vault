import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

// --- Block Components ---

const HeroBlock = ({ title, subtitle, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-16 pt-8 text-center md:text-left relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-12"
  >
    <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full pointer-events-none"></div>
    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        <div className={`p-6 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 shadow-xl`}>
            <Icon size={64} className="text-purple-400" />
        </div>
        <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400 mb-4">
                {title}
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl">
                {subtitle}
            </p>
        </div>
    </div>
  </motion.div>
);

const SectionBlock = ({ title, content, className = "" }) => (
  <section className={`mb-12 ${className}`}>
    {title && (
      <h2 className="text-2xl font-bold mb-6 text-neutral-100 flex items-center gap-2">
        <span className="w-1 h-8 bg-purple-500 rounded-full inline-block"></span>
        {title}
      </h2>
    )}
    <div className="text-lg text-neutral-300 leading-relaxed font-light space-y-4">
        {content}
    </div>
  </section>
);

const ListBlock = ({ items }) => (
    <ul className="space-y-2 mt-4">
        {items.map((point, idx) => (
            <li key={idx} className="flex items-center gap-3 text-neutral-400">
                <ArrowRight size={16} className="text-purple-500" />
                {point}
            </li>
        ))}
    </ul>
);

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-neutral-800 rounded-xl bg-neutral-900/50 mb-4 overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-800/50 transition-colors"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-neutral-200">{title}</span>
                {isOpen ? <ChevronUp size={20} className="text-purple-400" /> : <ChevronDown size={20} className="text-neutral-500" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-4 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800/50"
                    >
                        <div className="pt-4">{content}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const AccordionBlock = ({ title, items }) => (
    <div className="mb-12">
        {title && <h3 className="text-xl font-bold mb-6 text-neutral-200">{title}</h3>}
        {items.map((item, idx) => (
            <AccordionItem key={idx} {...item} />
        ))}
    </div>
);

const GridBlock = ({ title, items, columns = 2 }) => {
    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    };

    return (
        <section className="mb-12">
            {title && (
                 <h2 className="text-2xl font-bold mb-6 text-neutral-100 flex items-center gap-2">
                    <span className="w-1 h-8 bg-purple-500 rounded-full inline-block"></span>
                    {title}
                </h2>
            )}
            <div className={`grid ${gridCols[columns] || gridCols[2]} gap-4`}>
                {items.map((item, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-purple-500/50 transition-colors"
                    >
                        {item.icon && (
                            <div className="w-12 h-12 bg-neutral-700/50 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                                <item.icon size={24} />
                            </div>
                        )}
                        <h3 className="text-lg font-semibold text-neutral-200 mb-2">{item.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const TableBlock = ({ title, headers, rows }) => (
     <section className="mb-12">
        {title && <h3 className="text-xl font-bold mb-6 text-neutral-200">{title}</h3>}
        <div className="overflow-x-auto rounded-xl border border-neutral-800 shadow-2xl bg-neutral-900/50">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-neutral-800/50 border-b border-neutral-700">
                        {headers.map((header, idx) => (
                            <th key={idx} className="p-4 font-semibold text-neutral-200 text-sm uppercase tracking-wider">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/50">
                    {rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-neutral-800/30 transition-colors">
                            {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className={`p-4 text-neutral-400 ${cellIdx === 0 ? 'font-medium text-purple-400' : ''}`}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
);

const MermaidBlock = ({ code, caption }) => (
    <div className="mb-12 bg-neutral-900 rounded-xl border border-neutral-800 p-1 flex items-center justify-center">
         <div className="w-full bg-neutral-950 rounded-lg p-6 font-mono text-sm text-neutral-400 overflow-auto border border-neutral-900 relative">
            <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-wider text-neutral-500 font-semibold sticky top-0 bg-neutral-950 pb-2">
                <BookOpen size={14} />
                Diagram
            </div>
            <pre className="whitespace-pre-wrap text-green-400/90 font-mono">
                {code}
            </pre>
             {caption && <p className="mt-4 text-xs text-neutral-600 italic">* {caption}</p>}
         </div>
    </div>
);

const CustomBlock = ({ component }) => (
    <div className="mb-12">
        {component}
    </div>
);


// --- Main Render Logic ---

const BlockRenderer = ({ block }) => {
    switch (block.type) {
        case 'hero':
            return <HeroBlock {...block} />;
        case 'section':
            return <SectionBlock {...block} />;
        case 'list':
            return <SectionBlock title={block.title} content={<ListBlock items={block.items} />} />;
        case 'accordion':
            return <AccordionBlock {...block} />;
        case 'grid':
            return <GridBlock {...block} />;
        case 'table':
            return <TableBlock {...block} />;
        case 'mermaid':
            return <MermaidBlock {...block} />;
        case 'custom':
            return <CustomBlock {...block} />;
        case 'resources':
             // Resources is a specialized grid/list, implementing inline for now or reusing grid
             return (
                 <div className="mt-16 pt-8 border-t border-neutral-800">
                    <h3 className="text-xl font-bold mb-6 text-neutral-300">Resources & References</h3>
                    <div className="flex flex-wrap gap-4">
                        {block.items.map((res, idx) => (
                            <a 
                                key={idx} 
                                href={res.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 border border-neutral-700 hover:border-purple-500 hover:text-purple-400 transition-all text-sm text-neutral-400"
                            >
                                <res.icon size={16} />
                                {res.title}
                                <ExternalLink size={12} className="ml-1 opacity-50" />
                            </a>
                        ))}
                    </div>
                </div>
             );
        default:
            console.warn(`Unknown block type: ${block.type}`);
            return null;
    }
};

const TopicDetail = ({ data }) => {
  if (!data || !data.content) return null;

  return (
    <div className="max-w-6xl mx-auto pb-20">
      {data.content.map((block, idx) => (
         <BlockRenderer key={idx} block={block} />
      ))}
    </div>
  );
};

export default TopicDetail;
