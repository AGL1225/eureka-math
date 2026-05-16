import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function SmartFarm() {
  const navigate = useNavigate();
  const [weather, setWeather] = useState('sunny'); // 'sunny' or 'rain'
  const [logicBlocks, setLogicBlocks] = useState({
    condition: null, // 'rain' or 'sunny'
    ifAction: null, // 'close_roof' or 'turn_on_sprinkler'
    elseAction: null // 'close_roof' or 'turn_on_sprinkler'
  });
  const [simulationState, setSimulationState] = useState('idle'); // 'idle', 'running', 'success', 'fail'

  const runSimulation = () => {
    setSimulationState('running');
    
    setTimeout(() => {
      // Evaluate logic
      // The goal is: "IF weather == rain { Close Roof } ELSE { Turn on Sprinkler }"
      let isCorrect = false;
      
      if (logicBlocks.condition === 'rain' && logicBlocks.ifAction === 'close_roof' && logicBlocks.elseAction === 'turn_on_sprinkler') {
        isCorrect = true;
      }

      setSimulationState(isCorrect ? 'success' : 'fail');
    }, 2000);
  };

  const handleBlockChange = (type, value) => {
    setLogicBlocks(prev => ({ ...prev, [type]: value }));
    setSimulationState('idle');
  };

  const isRoofClosed = simulationState !== 'idle' && 
    ((weather === 'rain' && logicBlocks.condition === 'rain' && logicBlocks.ifAction === 'close_roof') || 
     (weather === 'rain' && logicBlocks.condition === 'sunny' && logicBlocks.elseAction === 'close_roof') ||
     (weather === 'sunny' && logicBlocks.condition === 'rain' && logicBlocks.elseAction === 'close_roof') ||
     (weather === 'sunny' && logicBlocks.condition === 'sunny' && logicBlocks.ifAction === 'close_roof'));

  const isSprinklerOn = simulationState !== 'idle' && 
    ((weather === 'sunny' && logicBlocks.condition === 'rain' && logicBlocks.elseAction === 'turn_on_sprinkler') ||
     (weather === 'sunny' && logicBlocks.condition === 'sunny' && logicBlocks.ifAction === 'turn_on_sprinkler') ||
     (weather === 'rain' && logicBlocks.condition === 'rain' && logicBlocks.elseAction === 'turn_on_sprinkler') ||
     (weather === 'rain' && logicBlocks.condition === 'sunny' && logicBlocks.ifAction === 'turn_on_sprinkler'));

  return (
    <div className="min-h-screen flex flex-col p-6 relative bg-[#0B0E14]">
      <button 
        onClick={() => navigate('/junior')}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors z-20"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back
      </button>

      <div className="flex-1 max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-8 pt-16">
        {/* Left Side: Coding Interface */}
        <div className="flex-1 flex flex-col glass-card p-8 rounded-3xl">
          <h2 className="text-3xl font-bold text-accent-cyan mb-2">Smart Farm Logic</h2>
          <p className="text-gray-400 mb-8">Build a logic tree to protect the crops.</p>

          <div className="bg-[#1A1A2E] p-6 rounded-2xl border border-gray-700 font-mono space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-purple-400 font-bold">IF</span>
              <span className="text-white">weather ==</span>
              <select 
                className="bg-gray-800 text-accent-cyan border border-gray-600 rounded px-3 py-1 outline-none"
                value={logicBlocks.condition || ''}
                onChange={(e) => handleBlockChange('condition', e.target.value)}
              >
                <option value="" disabled>Select...</option>
                <option value="rain">rain</option>
                <option value="sunny">sunny</option>
              </select>
              <span className="text-white">{'{'}</span>
            </div>
            
            <div className="pl-12 flex items-center gap-3">
              <select 
                className="bg-gray-800 text-green-400 border border-gray-600 rounded px-3 py-1 outline-none"
                value={logicBlocks.ifAction || ''}
                onChange={(e) => handleBlockChange('ifAction', e.target.value)}
              >
                <option value="" disabled>Select Action...</option>
                <option value="close_roof">Close Roof()</option>
                <option value="turn_on_sprinkler">Turn on Sprinkler()</option>
              </select>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-white">{'}'}</span>
              <span className="text-purple-400 font-bold">ELSE</span>
              <span className="text-white">{'{'}</span>
            </div>

            <div className="pl-12 flex items-center gap-3">
              <select 
                className="bg-gray-800 text-green-400 border border-gray-600 rounded px-3 py-1 outline-none"
                value={logicBlocks.elseAction || ''}
                onChange={(e) => handleBlockChange('elseAction', e.target.value)}
              >
                <option value="" disabled>Select Action...</option>
                <option value="close_roof">Close Roof()</option>
                <option value="turn_on_sprinkler">Turn on Sprinkler()</option>
              </select>
            </div>

            <div className="text-white">{'}'}</div>
          </div>

          <button 
            onClick={runSimulation}
            disabled={!logicBlocks.condition || !logicBlocks.ifAction || !logicBlocks.elseAction || simulationState === 'running'}
            className="w-full py-4 rounded-xl font-bold text-lg bg-accent-cyan text-black hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            <span className="material-symbols-outlined">play_arrow</span>
            Run Simulation
          </button>
        </div>

        {/* Right Side: Visual Simulation */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-[#1A1A2E] rounded-3xl border border-gray-700 flex flex-col items-center p-6 flex-1 relative overflow-hidden">
            {/* Environment Toggle */}
            <div className="absolute top-4 right-4 bg-gray-800 rounded-full flex overflow-hidden border border-gray-700 z-20">
              <button 
                onClick={() => { setWeather('sunny'); setSimulationState('idle'); }}
                className={`px-4 py-2 flex items-center gap-1 ${weather === 'sunny' ? 'bg-yellow-500 text-black' : 'text-gray-400'}`}
              >
                <span className="material-symbols-outlined text-sm">sunny</span> Sunny
              </button>
              <button 
                onClick={() => { setWeather('rain'); setSimulationState('idle'); }}
                className={`px-4 py-2 flex items-center gap-1 ${weather === 'rain' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
              >
                <span className="material-symbols-outlined text-sm">water_drop</span> Rain
              </button>
            </div>

            {/* Farm Graphics */}
            <div className="mt-16 w-full max-w-[300px] h-64 relative border-b-4 border-[#8B4513]">
              {/* Sky Background */}
              <div className={`absolute inset-0 -top-16 -left-10 -right-10 transition-colors duration-1000 ${weather === 'rain' ? 'bg-gray-800' : 'bg-blue-300'}`}>
                {weather === 'rain' && (
                  <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.2) 2px, transparent 2px)', backgroundSize: '10px 20px', animation: 'rain 0.5s linear infinite' }}></div>
                )}
                {weather === 'sunny' && (
                  <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400 rounded-full shadow-[0_0_20px_#FBBF24]"></div>
                )}
              </div>

              {/* Roof */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-4 bg-gray-400 origin-left z-10 rounded-full"
                animate={{ rotate: isRoofClosed ? 0 : -90, x: isRoofClosed ? 0 : -10 }}
                transition={{ type: "spring" }}
              ></motion.div>

              {/* Crops */}
              <div className="absolute bottom-0 left-0 w-full flex justify-around px-4">
                {[1, 2, 3].map(i => (
                  <motion.div 
                    key={i} 
                    className="w-4 bg-green-500 rounded-t-full origin-bottom"
                    animate={{ 
                      height: simulationState === 'success' ? 60 : simulationState === 'fail' ? 20 : 40,
                      backgroundColor: simulationState === 'fail' ? '#8B4513' : '#22C55E'
                    }}
                    transition={{ duration: 1 }}
                  ></motion.div>
                ))}
              </div>

              {/* Sprinkler */}
              {isSprinklerOn && (
                <div className="absolute bottom-0 right-2 w-8 h-8">
                  <div className="w-2 h-4 bg-gray-500 mx-auto"></div>
                  <div className="absolute top-0 left-1/2 -ml-[20px] w-10 h-10 border-t-4 border-blue-400 rounded-full opacity-50"></div>
                </div>
              )}
            </div>

            {/* Feedback Message */}
            <div className="mt-8 h-20 flex items-center justify-center w-full">
              <AnimatePresence mode="wait">
                {simulationState === 'running' && (
                  <motion.p key="running" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-gray-400 font-bold">
                    Running simulation...
                  </motion.p>
                )}
                {simulationState === 'success' && (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="bg-green-500/20 border border-green-500 text-green-400 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    Perfect Logic! Crops are thriving.
                  </motion.div>
                )}
                {simulationState === 'fail' && (
                  <motion.div key="fail" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="bg-red-500/20 border border-red-500 text-red-400 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">error</span>
                    Oh no! The crops withered. Check your logic.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rain {
          from { transform: translateY(0); }
          to { transform: translateY(20px); }
        }
      `}} />
    </div>
  );
}
