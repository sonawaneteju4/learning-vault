import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Atom, FileJson, Server, LayoutTemplate } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-24 space-y-24"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-4">
            🚀 Learning Journey
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
            Learn <br />
            <span className="text-gradient">
              With Me
            </span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            I am a Frontend Developer with 2 years of experience.
            Documenting my path to mastery in React, JavaScript, and System Design.
          </p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
          >
            <Link 
              to="/learn/react" 
              className="px-8 py-4 bg-white text-neutral-900 rounded-full font-bold text-lg hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
            >
              Start Exploring
            </Link>
            <a 
              href="https://github.com/sonawaneteju4/learning-vault" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 glass-card rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              Star on GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div variants={itemVariants} className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Learning Paths</h2>
            <p className="text-neutral-400">Structured content designed for modern engineering.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "React JS", 
                path: "/learn/react", 
                desc: "Hooks, patterns, and performance.",
                Icon: Atom,
                color: "from-blue-400/20 to-cyan-400/20",
                iconColor: "text-blue-400"
              },
              { 
                title: "JavaScript", 
                path: "/learn/javascript", 
                desc: "ES6+, async, and closures.",
                Icon: FileJson,
                color: "from-yellow-400/20 to-orange-400/20",
                iconColor: "text-yellow-400"
              },
              { 
                title: "Node.js", 
                path: "/learn/node", 
                desc: "Runtime, events, and streams.",
                Icon: Server,
                color: "from-green-400/20 to-emerald-400/20", 
                iconColor: "text-green-400"
              },
              { 
                title: "System Design", 
                path: "/learn/system-design", 
                desc: "Scale, dist-systems, and architecture.",
                Icon: LayoutTemplate,
                color: "from-purple-400/20 to-pink-400/20",
                iconColor: "text-purple-400"
              },
            ].map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="relative h-full p-8 rounded-2xl glass-card border-neutral-800 group-hover:border-neutral-700 transition-colors"
                >
                  <div className={`mb-4 transition-colors ${item.iconColor}`}>
                    <item.Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Stats / Trust Section (Mocked for visual weight) */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-neutral-800">
          {[
            { label: "Concepts", value: "50+" },
            { label: "Examples", value: "100+" },
            { label: "Updates", value: "Weekly" },
            { label: "Community", value: "Open Source" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
