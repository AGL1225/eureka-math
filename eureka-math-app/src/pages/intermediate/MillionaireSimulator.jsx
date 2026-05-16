import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function MillionaireSimulator() {
  const navigate = useNavigate();
  const [principal, setPrincipal] = useState(1000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(5);

  const chartData = useMemo(() => {
    const data = [];
    for (let i = 0; i <= years; i++) {
      // Compound interest formula: A = P(1 + r/n)^(nt)
      // Assuming compounded annually: A = P(1 + r)^t
      const amount = principal * Math.pow(1 + rate / 100, i);
      
      // Calculate simple interest for comparison
      const simpleAmount = principal + (principal * (rate / 100) * i);
      
      data.push({
        year: i,
        compound: Math.round(amount),
        simple: Math.round(simpleAmount)
      });
    }
    return data;
  }, [principal, years, rate]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  };

  const finalAmount = chartData[chartData.length - 1]?.compound || 0;
  const isMillionaire = finalAmount >= 1000000;

  return (
    <div className="min-h-screen flex flex-col p-6 relative bg-[#0B0E14]">
      <button 
        onClick={() => navigate('/intermediate')}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors z-20"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back
      </button>

      <div className="flex-1 max-w-6xl w-full mx-auto flex flex-col pt-16">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">The Millionaire Simulator</h1>
          <p className="text-xl text-gray-400">Discover the magic of compound interest and the exponential "J-curve".</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 mt-4 flex-1">
          {/* Controls */}
          <div className="w-full lg:w-1/3 glass-card p-8 rounded-3xl flex flex-col gap-8 h-fit">
            
            {/* Principal */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-white font-bold">Initial Funds (Principal)</label>
                <span className="text-accent-cyan font-mono text-lg">{formatCurrency(principal)}</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="20000" 
                step="100"
                value={principal} 
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full accent-accent-cyan"
              />
            </div>

            {/* Years */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-white font-bold">Time (Years)</label>
                <span className="text-primary font-mono text-lg">{years} yrs</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-white font-bold">Interest Rate</label>
                <span className="text-accent-gold font-mono text-lg">{rate}%</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="20" 
                step="0.5"
                value={rate} 
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-accent-gold"
              />
            </div>

            <div className={`mt-8 p-6 rounded-2xl border-2 transition-all duration-500 text-center ${isMillionaire ? 'bg-accent-gold/20 border-accent-gold shadow-[0_0_30px_rgba(255,215,0,0.3)]' : 'bg-[#1A1A2E] border-gray-700'}`}>
              <h3 className="text-gray-400 mb-2">Final Wealth</h3>
              <div className={`text-4xl font-bold font-mono tracking-tight ${isMillionaire ? 'text-accent-gold' : 'text-white'}`}>
                {formatCurrency(finalAmount)}
              </div>
              {isMillionaire && (
                <div className="mt-2 text-accent-gold font-bold animate-pulse flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">stars</span>
                  Millionaire Achieved!
                </div>
              )}
            </div>

          </div>

          {/* Chart */}
          <div className="w-full lg:w-2/3 glass-card p-6 rounded-3xl min-h-[400px]">
            <h3 className="text-white font-bold mb-6 text-xl">Wealth Growth Trajectory</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis 
                    dataKey="year" 
                    stroke="#888" 
                    tickFormatter={(value) => `Yr ${value}`}
                  />
                  <YAxis 
                    stroke="#888" 
                    tickFormatter={(value) => `$${value >= 1000 ? (value / 1000) + 'k' : value}`}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1A2E', borderColor: '#333', borderRadius: '12px' }}
                    itemStyle={{ fontWeight: 'bold' }}
                    formatter={(value) => [formatCurrency(value), '']}
                    labelFormatter={(label) => `Year ${label}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="compound" 
                    name="Compound Interest"
                    stroke="#00E5FF" 
                    strokeWidth={4}
                    dot={false}
                    activeDot={{ r: 8, fill: '#00E5FF', stroke: '#fff', strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="simple" 
                    name="Simple Interest"
                    stroke="#6D28D9" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8 mt-4">
              <div className="flex items-center gap-2">
                <span className="w-4 h-1 bg-accent-cyan"></span>
                <span className="text-sm text-gray-400">Compound (Reinvesting)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-1 bg-primary border border-primary border-dashed"></span>
                <span className="text-sm text-gray-400">Simple (No Reinvesting)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
