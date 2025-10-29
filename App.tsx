
import React from 'react';
// FIX: Suppress TypeScript error for react-router-dom import.
// @ts-ignore
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Notices from './pages/Notices';

const Layout: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    // If there's a hash in the URL, smoothly scroll to the corresponding element
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the '#'
      // Use a timeout to ensure the element is rendered, especially after a page transition
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 75; // Corresponds to the header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    } else {
      // Otherwise, scroll smoothly to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]); // Rerun effect when path or hash changes

  return (
    <div className="bg-white text-[#2E3B4E] font-['Roboto']">
      <Header />
      <main style={{ paddingTop: '75px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="admission" element={<Admission />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="notices" element={<Notices />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
