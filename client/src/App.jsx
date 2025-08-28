import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Colours from './pages/Colours';
import FindingHarmony from './pages/FindingHarmony';
import AspirationAtWork from './pages/AspirationAtWork';
import Gallery from './pages/Gallery';
import Library from './pages/Library';
import ForumAndColouring from './pages/ForumAndColouring';
import Post from './pages/Post';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoutes from './components/ProtectedRoutes';
import Layout from './components/Layout';
import AdminLogin from './pages/AdminLogin';
import AdminEditor from './pages/AdminEditor';
import AddPage from './pages/AddPage';
import useGuestLogin from './hooks/useGuestLogin';

export default function App() {

  useGuestLogin();

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <Routes>

        <Route path="/" element={<Navigate to="/home" replace />} />

        {import.meta.env.VITE_USE_CREDENTIAL_AUTH === 'true' ?
          <>
            <Route path="/auth" element={<Auth />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
              <Route path="/colours" element={<ProtectedRoutes><Colours /></ProtectedRoutes>} />
              <Route path="/finding-harmony" element={<ProtectedRoutes><FindingHarmony /></ProtectedRoutes>} />
              <Route path="/aspiration-at-work" element={<ProtectedRoutes><AspirationAtWork /></ProtectedRoutes>} />
              <Route path="/gallery" element={<ProtectedRoutes><Gallery /></ProtectedRoutes>} />
              <Route path="/library" element={<ProtectedRoutes><Library /></ProtectedRoutes>} />
              <Route path="/forum-and-colouring" element={<ProtectedRoutes><ForumAndColouring /></ProtectedRoutes>} />
              <Route path="/forum/post/:id" element={<ProtectedRoutes><Post /></ProtectedRoutes>} />
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
              <Route path="/library" element={<Library />} />
              <Route path="/forum-and-colouring" element={<ForumAndColouring />} />
              <Route path="/forum/post/:id" element={<Post />} />
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
            path="edit"
            element={
              <ProtectedRoutes requiredRole="admin">
                <AdminEditor />
              </ProtectedRoutes>
            }
          />
        </Route>

        {import.meta.env.VITE_NODE_ENV === 'dev' &&
          <Route path='/dev'>
            <Route
              path="add"
              element={
                <AddPage />
              }
            />
          </Route>}

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
