import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './base/Layout';
import PrivateRoute from './middlewares/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard/*"
              element={<PrivateRoute element={<Dashboard />} />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
