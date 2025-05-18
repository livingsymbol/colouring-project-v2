import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Colours from './pages/Colours';
import FindingHarmony from './pages/FindingHarmony';
import AspirationAtWork from './pages/AspirationAtWork';
import Gallery from './pages/Gallery';
import ForumAndColouring from './pages/ForumAndColouring';
import Layout from './components/Layout.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colours" element={<Colours />} />
        <Route path="/finding-harmony" element={<FindingHarmony />} />
        <Route path="/aspiration-at-work" element={<AspirationAtWork />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/forum-and-colouring" element={<ForumAndColouring />} />
      </Routes>
    </Layout>
  );
}
