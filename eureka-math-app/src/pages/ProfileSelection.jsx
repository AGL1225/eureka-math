import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProfileSelection() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 md:px-12 py-16">
      <header className="text-center mb-16 space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-primary tracking-tight"
        >
          Welcome to Eureka Math World
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400"
        >
          Choose your path to explore
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Siahn: Empire of Senses (G1-3) */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/primary')}
          className="group flex flex-col items-center text-center p-6 bg-[#1A1A2E] rounded-3xl border border-primary/30 shadow-[0_8px_0_0_rgba(109,40,217,0.2)] hover:border-primary transition-all duration-300"
        >
          <div className="relative w-48 h-48 mb-6">
            <img 
              alt="Siahn Avatar" 
              className="w-full h-full rounded-full border-4 border-primary p-1 bg-white" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLUOVCW9uyyQFqLQSP_hFRa0H7vZMqPbM1v1mgTw6ATY1lBj9mwi4Zx6O8Gba_0kSabRunkf0FE2NGmFNqB78Zg3eEhz3vJeYh-XCYZK4fyi6PwFlZnWgrG1q6MDBtsWGfCCoW03WILE5l7Cv4DXyea256KFvPXigtIDoDoSoB4ZlfKqo7LXkxkMOWMgP4U-9SMMjliJQMR6yMSx1ycKyi5Lygye8VZZ9o-HJICOvbzfjvlVecWgt6TF2RjkHx-n1MvTX7qdZk2g"
            />
            <div className="absolute bottom-2 right-2 bg-accent-cyan text-black p-2 rounded-full shadow-md flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">child_care</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-primary mb-2">Siahn</h2>
          <span className="text-xs font-bold px-3 py-1 bg-primary/20 text-primary rounded-full mb-2">Grade 1-3</span>
          <p className="text-sm text-gray-400 italic">World: Empire of Senses</p>
        </motion.button>

        {/* Eunu: Builder of Order (G4-6) */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/junior')}
          className="group flex flex-col items-center text-center p-6 bg-[#1A1A2E] rounded-3xl border border-accent-cyan/30 shadow-[0_8px_0_0_rgba(0,229,255,0.2)] hover:border-accent-cyan transition-all duration-300 relative overflow-hidden"
        >
          <div className="relative w-48 h-48 mb-6 z-10">
            <img 
              alt="Eunu Avatar" 
              className="w-full h-full rounded-full border-4 border-accent-cyan p-1 bg-white" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJjfoXkuamHv6nzlCo2nSARpaf1ksDGF1wtTIT3foDZ-v3V0YQTbILxBo5VwE1OMFyalyD8qmA2g42gLVChOkSBLVh1cwd4R63dXYX_Mo-p-9Txzo1Yk2KmLEmcvvUFyKTUcRXXPV39ppVHOgHl-SUV31DRNVkFWBCSST_xGp3FYHGKEaalbny0PbEzz9DkUVpJfCBGtA2pNePALWmHjMoOhXueNGdGXm7gmBrdBIiqcpzwEhfeQyEgrWwM8cfwwUdH6x8g2szeA"
            />
            <div className="absolute bottom-2 right-2 bg-accent-gold text-black p-2 rounded-full shadow-md flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">build</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-accent-cyan mb-2">Eunu</h2>
          <span className="text-xs font-bold px-3 py-1 border border-accent-cyan/50 text-accent-cyan rounded-full mb-2">Grade 4-6</span>
          <p className="text-sm text-gray-400 italic">World: Builder of Order</p>
        </motion.button>

        {/* Seoah: System Architect (G7-8) */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/intermediate')}
          className="group flex flex-col items-center text-center p-6 bg-[#1A1A2E] rounded-3xl glass-card hover:glass-card-hover transition-all duration-300"
        >
          <div className="relative w-48 h-48 mb-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent-cyan opacity-20 rounded-full blur-xl"></div>
            <img 
              alt="Seoah Avatar" 
              className="w-full h-full rounded-full border border-white/40 p-1 relative z-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPUBNBbz8haBwaIpiZvz1LifVo4gfE_2YX81T8IjA8Ou-95bd-znF57wvwgsrAAhD4shJmHZ5Gkl100u_o6DyVzFmWYcsjNCwVk7mGxErJtbAx673c3b9IoQcfxYy2dEUhMShza-DamV7PKTHUVIWrh4vA0D-WWWK5a3xQJjhd4PkaQCxsaAdyyYaw30ZBpZMvLhr_ySAaPpVdBsFvurXYHp_OMQIZUPZUca3O4GXfPe-I5XA45xyp29zV0ZJrDCls1in1rM0Xxg"
            />
            <div className="absolute bottom-2 right-2 bg-white text-black p-2 rounded-full shadow-md flex items-center justify-center z-10">
              <span className="material-symbols-outlined text-sm">code</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Seoah</h2>
          <span className="text-xs font-bold px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full mb-2">Grade 7-8</span>
          <p className="text-sm text-gray-400 italic">World: System Architect</p>
        </motion.button>
      </div>
    </main>
  );
}
