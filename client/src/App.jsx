import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Colours from './pages/Colours';
import FindingHarmony from './pages/FindingHarmony';
import AspirationAtWork from './pages/AspirationAtWork';
import Gallery from './pages/Gallery';
import ForumAndColouring from './pages/ForumAndColouring';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoutes from './components/ProtectedRoutes';
import Layout from './components/Layout';
import AdminLogin from './pages/AdminLogin';
import HtmlToJSONConverter from './pages/HtmlToJsonConverter';

export default function App() {
  return (
    <Routes>
      {import.meta.env.VITE_USE_CREDENTIAL_AUTH === 'true' ?
        <>
          <Route path="/auth" element={<Auth />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
            <Route path="/colours" element={<ProtectedRoutes><Colours /></ProtectedRoutes>} />
            <Route path="/finding-harmony" element={<ProtectedRoutes><FindingHarmony /></ProtectedRoutes>} />
            <Route path="/aspiration-at-work" element={<ProtectedRoutes><AspirationAtWork /></ProtectedRoutes>} />
            <Route path="/gallery" element={<ProtectedRoutes><Gallery /></ProtectedRoutes>} />
            <Route path="/forum-and-colouring" element={<ProtectedRoutes><ForumAndColouring /></ProtectedRoutes>} />
          </Route>
        </>
        :
        <>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/colours" element={<Colours />} />
            <Route path="/finding-harmony" element={<FindingHarmony />} />
            <Route path="/aspiration-at-work" element={<AspirationAtWork />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/forum-and-colouring" element={<ForumAndColouring />} />
          </Route>
        </>
      }

      <Route path='/admin'>
        <Route
          path="login"
          element={
            <AdminLogin />
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoutes requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="convert"
          element={
            <HtmlToJSONConverter />
          }
        />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
