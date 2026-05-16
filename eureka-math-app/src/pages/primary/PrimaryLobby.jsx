import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PrimaryLobby() {
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
          className="inline-block p-4 rounded-full bg-primary/20 text-primary mb-4"
        >
          <span className="material-symbols-outlined text-4xl">cruelty_free</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white tracking-tight"
        >
          Empire of Senses
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-primary font-medium"
        >
          Grades 1-3
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/primary/potion-lab')}
          className="group flex flex-col items-center text-center p-8 bg-[#1A1A2E] rounded-3xl border border-primary/30 hover:border-primary transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="material-symbols-outlined text-6xl text-primary mb-4 relative z-10">science</span>
          <h2 className="text-2xl font-bold text-white mb-2 relative z-10">Potion Lab</h2>
          <p className="text-gray-400 relative z-10">Number Sense & Place Value</p>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/primary/barter-market')}
          className="group flex flex-col items-center text-center p-8 bg-[#1A1A2E] rounded-3xl border border-accent-gold/30 hover:border-accent-gold transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="material-symbols-outlined text-6xl text-accent-gold mb-4 relative z-10">storefront</span>
          <h2 className="text-2xl font-bold text-white mb-2 relative z-10">Barter Market</h2>
          <p className="text-gray-400 relative z-10">Financial Literacy</p>
        </motion.button>
      </div>
    </main>
  );
}
