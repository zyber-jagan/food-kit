import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProducerDashboard from './pages/ProducerDashboard';
import ConsumerDashboard from './pages/ConsumerDashboard';
import MapView from './pages/MapView';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Disclaimer from './pages/Disclaimer';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="producer-dashboard" element={<ProducerDashboard />} />
          <Route path="consumer-dashboard" element={<ConsumerDashboard />} />
          <Route path="map" element={<MapView />} />
          <Route path="chat" element={<Chat />} />
          <Route path="profile" element={<Profile />} />
          <Route path="disclaimer" element={<Disclaimer />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AnimatedRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}


export default App;
