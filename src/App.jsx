import NavBar from './components/NavBar.jsx';
import LandingSection from './components/LandingSection.jsx';
import TextRunningSection from './components/TextRunningSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import { ExperienceSection } from './components/ExperienceSection.jsx';
import PortfolioSection from './components/PortfolioSection.jsx';
import PublicationSection from './components/PublicationSection.jsx';
import BlogSection from './components/BlogSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <>
    <NavBar />
    <LandingSection />
    <TextRunningSection />
    <AboutSection />
    <ExperienceSection />
    <PortfolioSection />
    {/* <PublicationSection /> */}
    <BlogSection />
    <EducationSection />
    <section className="pricing-section" id="pricing"></section>
    <ContactSection />
    <Footer />
  </>
);

export default App;
