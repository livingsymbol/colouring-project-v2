import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Post from './pages/Post';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoutes from './components/ProtectedRoutes';
import Layout from './components/Layout';
import AdminLogin from './pages/AdminLogin';
import AdminEditor from './pages/AdminEditor';
import AdminImageUpload from './pages/AdminImageUpload.jsx';
import useGuestLogin from './hooks/useGuestLogin';
import PdfViewer from './pages/PdfViewer';
import Test from './pages/Test.jsx';
import usePageTracking from './hooks/usePageTracking.js';

export default function App() {
  if (import.meta.env.VITE_NODE_ENV !== 'dev')
    usePageTracking();
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
              <Route path="/forum/post/:id" element={<ProtectedRoutes><Post /></ProtectedRoutes>} />
              <Route path="/view-pdf" element={<ProtectedRoutes><PdfViewer /></ProtectedRoutes>} />
              <Route path="/:slug" element={<ProtectedRoutes><Test /></ProtectedRoutes>} />
            </Route>
          </>
          :
          <>
            <Route element={<Layout />}>
              <Route path="/forum/post/:id" element={<Post />} />
              <Route path="/view-pdf" element={<PdfViewer />} />
              <Route path="/:slug" element={<Test />} />
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
          <Route
            path="upload"
            element={
              <ProtectedRoutes requiredRole="admin">
                <AdminImageUpload />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
