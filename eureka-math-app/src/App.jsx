import { Routes, Route } from 'react-router-dom';
import ProfileSelection from './pages/ProfileSelection';
import PrimaryLobby from './pages/primary/PrimaryLobby';
import PotionLab from './pages/primary/PotionLab';
import BarterMarket from './pages/primary/BarterMarket';
import JuniorLobby from './pages/junior/JuniorLobby';
import SmartFarm from './pages/junior/SmartFarm';
import IntermediateLobby from './pages/intermediate/IntermediateLobby';
import MillionaireSimulator from './pages/intermediate/MillionaireSimulator';

function App() {
  return (
    <div className="cosmic-bg min-h-screen">
      <Routes>
        <Route path="/" element={<ProfileSelection />} />
        
        {/* Primary (Grades 1-3) */}
        <Route path="/primary" element={<PrimaryLobby />} />
        <Route path="/primary/potion-lab" element={<PotionLab />} />
        <Route path="/primary/barter-market" element={<BarterMarket />} />
        
        {/* Junior (Grades 4-6) */}
        <Route path="/junior" element={<JuniorLobby />} />
        <Route path="/junior/smart-farm" element={<SmartFarm />} />
        
        {/* Intermediate (Grades 7-8) */}
        <Route path="/intermediate" element={<IntermediateLobby />} />
        <Route path="/intermediate/millionaire-simulator" element={<MillionaireSimulator />} />
      </Routes>
    </div>
  );
}

export default App;
