import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import DicksMarriott from './pages/ProjectDetail/DicksMarriott';
import DirectvGo from './pages/ProjectDetail/DirectvGo';
import MyPepsico from './pages/ProjectDetail/MyPepsico';
import SanchoBbdo from './pages/ProjectDetail/SanchoBbdo';
import Sportian from './pages/ProjectDetail/Sportian';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/dicks-marriott" element={<DicksMarriott />} />
        <Route path="/work/sportian" element={<Sportian />} />
        <Route path="/work/mypepsico" element={<MyPepsico />} />
        <Route path="/work/directv-go" element={<DirectvGo />} />
        <Route path="/work/sancho-bbdo" element={<SanchoBbdo />} />
      </Routes>
    </>
  );
}
