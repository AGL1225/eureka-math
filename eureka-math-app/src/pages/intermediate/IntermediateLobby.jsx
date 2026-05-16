import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function IntermediateLobby() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 md:px-12 py-16 relative">
      <button 
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Profiles
      </button>

      <header className="text-center mb-16 space-y-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block p-4 rounded-full bg-white/10 text-white border border-white/20 mb-4"
        >
          <span className="material-symbols-outlined text-4xl">memory</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white tracking-tight"
        >
          System Architect
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 font-medium"
        >
          Grades 7-8
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/intermediate/millionaire-simulator')}
          className="group flex flex-col items-center text-center p-8 glass-card hover:glass-card-hover transition-all duration-300 relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent-cyan opacity-0 group-hover:opacity-20 transition-opacity"></div>
          
          <span className="material-symbols-outlined text-6xl text-white mb-4 relative z-10">trending_up</span>
          <h2 className="text-2xl font-bold text-white mb-2 relative z-10">The Millionaire Simulator</h2>
          <p className="text-gray-400 relative z-10">Financial Literacy & Exponential Growth</p>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex flex-col items-center text-center p-8 bg-[#1A1A2E] rounded-3xl border border-gray-600 opacity-50 relative overflow-hidden cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-6xl text-gray-400 mb-4 relative z-10">sports_esports</span>
          <h2 className="text-2xl font-bold text-gray-300 mb-2 relative z-10">Mars Base OS</h2>
          <p className="text-gray-500 relative z-10">Locked - Advanced Concurrency</p>
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
            <span className="material-symbols-outlined text-4xl text-white">lock</span>
          </div>
        </motion.button>
      </div>
    </main>
  );
}
