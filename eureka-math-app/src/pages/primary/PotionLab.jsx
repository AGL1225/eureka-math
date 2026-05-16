import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function PotionLab() {
  const navigate = useNavigate();
  const [blueDrops, setBlueDrops] = useState(0); // Value 1
  const [redDrops, setRedDrops] = useState(0);   // Value 10
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConversionMsg, setShowConversionMsg] = useState(false);

  const totalValue = blueDrops * 1 + redDrops * 10;
  const targetValue = 50;

  useEffect(() => {
    if (blueDrops >= 10) {
      // Place value conversion logic: 10 ones = 1 ten
      setTimeout(() => {
        setBlueDrops(prev => prev - 10);
        setRedDrops(prev => prev + 1);
        setShowConversionMsg(true);
        setTimeout(() => setShowConversionMsg(false), 2000);
      }, 500);
    }
  }, [blueDrops]);

  useEffect(() => {
    if (totalValue === targetValue && blueDrops === 0) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  }, [totalValue, blueDrops]);

  const handleAddBlue = () => {
    if (totalValue < 99) setBlueDrops(prev => prev + 1);
  };

  const handleAddRed = () => {
    if (totalValue < 90) setRedDrops(prev => prev + 1);
  };

  const reset = () => {
    setBlueDrops(0);
    setRedDrops(0);
    setIsSuccess(false);
  };

  return (
    <div className="min-h-screen flex flex-col p-6 relative">
      <button 
        onClick={() => navigate('/primary')}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors z-20"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back
      </button>

      <div className="flex-1 max-w-4xl w-full mx-auto flex flex-col items-center pt-16">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Potion Lab</h1>
          <p className="text-xl text-primary">Make a potion with exactly {targetValue} HP!</p>
          <div className="mt-4 p-4 glass-card rounded-2xl inline-block">
            <span className="text-3xl font-bold text-white tracking-widest">
              Total: {totalValue}
            </span>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full mt-8">
          {/* Beaker Area */}
          <div className="relative w-64 h-80 border-4 border-white/20 rounded-b-3xl border-t-0 flex flex-col justify-end p-2 bg-black/20">
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center z-30"
                >
                  <div className="bg-accent-gold text-black px-6 py-3 rounded-full font-bold text-2xl shadow-[0_0_30px_#FFD700]">
                    Success! ✨
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {showConversionMsg && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-12 left-0 right-0 text-center text-accent-cyan font-bold"
                >
                  10 Ones = 1 Ten!
                </motion.div>
              )}
            </AnimatePresence>

            {/* Liquid representation */}
            <div className="flex flex-wrap-reverse gap-1 justify-center relative z-10 w-full mb-2">
              {Array.from({ length: redDrops }).map((_, i) => (
                <motion.div 
                  key={`red-${i}`}
                  initial={{ scale: 0, y: -50 }}
                  animate={{ scale: 1, y: 0 }}
                  className="w-10 h-10 bg-red-500 rounded-full border-2 border-red-300 shadow-[0_0_15px_rgba(239,68,68,0.6)] flex items-center justify-center"
                >
                  <span className="text-white font-bold text-xs">10</span>
                </motion.div>
              ))}
              {Array.from({ length: blueDrops }).map((_, i) => (
                <motion.div 
                  key={`blue-${i}`}
                  initial={{ scale: 0, y: -50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0 }}
                  className="w-6 h-6 bg-blue-500 rounded-full border-2 border-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.6)] flex items-center justify-center"
                >
                  <span className="text-white font-bold text-[10px]">1</span>
                </motion.div>
              ))}
            </div>
            
            {/* Liquid level background */}
            <div 
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-purple-900 to-purple-500/50 rounded-b-[20px] transition-all duration-500"
              style={{ height: `${(totalValue / 100) * 100}%` }}
            ></div>
          </div>

          {/* Controls */}
          <div className="flex md:flex-col gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddRed}
              className="w-24 h-24 rounded-2xl bg-red-500/20 border-2 border-red-500 flex flex-col items-center justify-center gap-2 hover:bg-red-500/40 transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"></span>
              <span className="text-white font-bold">+10 HP</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddBlue}
              className="w-24 h-24 rounded-2xl bg-blue-500/20 border-2 border-blue-500 flex flex-col items-center justify-center gap-2 hover:bg-blue-500/40 transition-colors"
            >
              <span className="w-6 h-6 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></span>
              <span className="text-white font-bold">+1 HP</span>
            </motion.button>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <button 
            onClick={reset}
            className="px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors font-bold"
          >
            Reset Beaker
          </button>
        </div>
      </div>
    </div>
  );
}
