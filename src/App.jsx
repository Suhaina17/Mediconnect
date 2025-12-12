import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import HospitalManagement from './pages/HospitalManagement'
import DoctorManagement from './pages/DoctorManagement'
import PatientManagement from './pages/PatientManagement'
import ReportsAnalytics from './pages/ReportsAnalytics'
import Announcements from './pages/Announcements'
import HospitalProfile from './pages/HospitalProfile'
import DoctorProfile from './pages/DoctorProfile'
import PatientProfile from './pages/PatientProfile'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { PatientLayout } from './components/patient/PatientLayout'
import PatientProfilePage from './pages/patient/PatientProfilePage'
import PatientHospitalList from './pages/patient/PatientHospitalList'
import PatientHospitalDetails from './pages/patient/PatientHospitalDetails'
import PatientDoctorList from './pages/patient/PatientDoctorList'
import PatientDoctorDetails from './pages/patient/PatientDoctorDetails'
import PatientBooking from './pages/patient/PatientBooking'
import PatientAppointmentHistory from './pages/patient/PatientAppointmentHistory'

function LandingPage() {
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LoginPage from './pages/Login';
import Console from './Hospital/Console';

export default function App() {
  const [view, setView] = useState(() => {
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/hospital')) {
      return 'console';
    }
    return 'landing';
  }); // landing | login | console

  const openLogin = () => {
    setView('login');
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/login');
    }
  };

  const openConsole = () => {
    setView('console');
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/hospital');
    }
  };

  const goHome = () => {
    setView('landing');
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/');
    }
  };

  if (view === 'login') {
    return <LoginPage onBack={goHome} />;
  }

  if (view === 'console') {
    return <Console onExit={goHome} />;
  }

  return (
    <div className="app-container">
      <Header
        onSignIn={openLogin}
        onGetStarted={openLogin}
        onOpenDashboard={openConsole}
      />
      <Hero onStart={openLogin} onOpenDashboard={openConsole} />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA onGetStarted={openLogin} onOpenDashboard={openConsole} />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<PatientLayout />}>
        <Route path="/patient" element={<Navigate to="/patient/profile" replace />} />
        <Route path="/patient/profile" element={<PatientProfilePage />} />
        <Route path="/patient/hospitals" element={<PatientHospitalList />} />
        <Route path="/patient/hospitals/:id" element={<PatientHospitalDetails />} />
        <Route path="/patient/doctors" element={<PatientDoctorList />} />
        <Route path="/patient/doctors/:id" element={<PatientDoctorDetails />} />
        <Route path="/patient/book" element={<PatientBooking />} />
        <Route path="/patient/appointments" element={<PatientAppointmentHistory />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/hospitals" element={<HospitalManagement />} />
        <Route path="/admin/hospitals/:id" element={<HospitalProfile />} />
        <Route path="/admin/doctors" element={<DoctorManagement />} />
        <Route path="/admin/doctors/:id" element={<DoctorProfile />} />
        <Route path="/admin/patients" element={<PatientManagement />} />
        <Route path="/admin/patients/:id" element={<PatientProfile />} />
        <Route path="/admin/reports" element={<ReportsAnalytics />} />
        <Route path="/admin/announcements" element={<Announcements />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  )
}
  );
}
