import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BarterMarket() {
  const navigate = useNavigate();
  const [leftSide, setLeftSide] = useState({ pennies: 0, nickels: 0 });
  const [rightSide, setRightSide] = useState({ pennies: 0, nickels: 0 });
  const [isBalanced, setIsBalanced] = useState(false);

  const leftValue = leftSide.pennies * 1 + leftSide.nickels * 5;
  const rightValue = rightSide.pennies * 1 + rightSide.nickels * 5;

  // Calculate rotation of the scale based on weight difference (-30 to 30 degrees)
  const difference = rightValue - leftValue;
  const maxDiff = 10;
  let rotation = (difference / maxDiff) * 30;
  if (rotation > 30) rotation = 30;
  if (rotation < -30) rotation = -30;

  useEffect(() => {
    // Condition for success: balanced, and not empty, and specifically 5 pennies vs 1 nickel
    // (Or just balanced and total > 0 for simpler play)
    if (leftValue === rightValue && leftValue > 0) {
      if ((leftSide.pennies === 5 && rightSide.nickels === 1) || (rightSide.pennies === 5 && leftSide.nickels === 1)) {
        setIsBalanced(true);
      } else {
        setIsBalanced(true);
      }
    } else {
      setIsBalanced(false);
    }
  }, [leftValue, rightValue, leftSide, rightSide]);

  const addCoin = (side, type) => {
    if (side === 'left') {
      setLeftSide(prev => ({ ...prev, [type]: prev[type] + 1 }));
    } else {
      setRightSide(prev => ({ ...prev, [type]: prev[type] + 1 }));
    }
  };

  const reset = () => {
    setLeftSide({ pennies: 0, nickels: 0 });
    setRightSide({ pennies: 0, nickels: 0 });
    setIsBalanced(false);
  };

  return (
    <div className="min-h-screen flex flex-col p-6 relative bg-[#1A1A2E]">
      <button 
        onClick={() => navigate('/primary')}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors z-20"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back
      </button>

      <div className="flex-1 max-w-5xl w-full mx-auto flex flex-col items-center pt-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-accent-gold mb-2">Barter Market</h1>
          <p className="text-xl text-gray-300">Balance 1 Nickel with the right amount of Pennies!</p>
        </header>

        {isBalanced && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-green-500/20 border border-green-500 text-green-400 px-8 py-4 rounded-full font-bold text-2xl flex items-center gap-3"
          >
            <span className="material-symbols-outlined">check_circle</span>
            Perfect Balance! Value equals Quantity.
          </motion.div>
        )}

        {/* Scale Visualization */}
        <div className="relative w-full max-w-3xl h-80 mb-12 flex flex-col items-center justify-end">
          {/* Base */}
          <div className="w-32 h-4 bg-gray-600 rounded-t-lg z-10"></div>
          {/* Pillar */}
          <div className="w-4 h-48 bg-gray-500 z-10"></div>
          
          {/* Arm and Pans */}
          <motion.div 
            className="absolute top-20 w-full h-4 bg-gray-400 origin-center rounded-full flex justify-between px-10"
            animate={{ rotate: rotation }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
          >
            {/* Left Pan */}
            <div className="relative">
              <div className="absolute -top-4 -left-16 w-32 h-1 bg-gray-400"></div>
              <div className="absolute top-0 -left-16 w-32 h-32 border-l-2 border-r-2 border-b-4 border-gray-400 rounded-b-[40px] flex items-end justify-center pb-2 px-2">
                <div className="flex flex-wrap-reverse gap-1 justify-center relative bottom-[-20px]">
                  {Array.from({ length: leftSide.nickels }).map((_, i) => (
                    <div key={`ln-${i}`} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-gray-400 flex items-center justify-center text-black font-bold text-[10px] shadow-sm">5¢</div>
                  ))}
                  {Array.from({ length: leftSide.pennies }).map((_, i) => (
                    <div key={`lp-${i}`} className="w-6 h-6 rounded-full bg-[#B87333] border-2 border-[#8C5522] flex items-center justify-center text-white font-bold text-[10px] shadow-sm">1¢</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pivot */}
            <div className="absolute left-1/2 -top-2 w-4 h-8 bg-gray-700 -ml-2 rounded-full"></div>

            {/* Right Pan */}
            <div className="relative">
              <div className="absolute -top-4 -right-16 w-32 h-1 bg-gray-400"></div>
              <div className="absolute top-0 -right-16 w-32 h-32 border-l-2 border-r-2 border-b-4 border-gray-400 rounded-b-[40px] flex items-end justify-center pb-2 px-2">
                 <div className="flex flex-wrap-reverse gap-1 justify-center relative bottom-[-20px]">
                  {Array.from({ length: rightSide.nickels }).map((_, i) => (
                    <div key={`rn-${i}`} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-gray-400 flex items-center justify-center text-black font-bold text-[10px] shadow-sm">5¢</div>
                  ))}
                  {Array.from({ length: rightSide.pennies }).map((_, i) => (
                    <div key={`rp-${i}`} className="w-6 h-6 rounded-full bg-[#B87333] border-2 border-[#8C5522] flex items-center justify-center text-white font-bold text-[10px] shadow-sm">1¢</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 w-full gap-8">
          {/* Left Controls */}
          <div className="glass-card p-6 rounded-3xl flex flex-col items-center gap-4">
            <h3 className="text-white font-bold mb-2">Left Pan (Total: {leftValue}¢)</h3>
            <div className="flex gap-4">
              <button onClick={() => addCoin('left', 'pennies')} className="bg-[#B87333] hover:bg-[#8C5522] text-white px-4 py-2 rounded-full font-bold transition-colors shadow-lg">+ Penny (1¢)</button>
              <button onClick={() => addCoin('left', 'nickels')} className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-full font-bold transition-colors shadow-lg">+ Nickel (5¢)</button>
            </div>
          </div>

          {/* Right Controls */}
          <div className="glass-card p-6 rounded-3xl flex flex-col items-center gap-4">
            <h3 className="text-white font-bold mb-2">Right Pan (Total: {rightValue}¢)</h3>
            <div className="flex gap-4">
              <button onClick={() => addCoin('right', 'pennies')} className="bg-[#B87333] hover:bg-[#8C5522] text-white px-4 py-2 rounded-full font-bold transition-colors shadow-lg">+ Penny (1¢)</button>
              <button onClick={() => addCoin('right', 'nickels')} className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-full font-bold transition-colors shadow-lg">+ Nickel (5¢)</button>
            </div>
          </div>
        </div>

        <button 
          onClick={reset}
          className="mt-12 px-8 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors font-bold"
        >
          Reset Scale
        </button>
      </div>
    </div>
  );
}
