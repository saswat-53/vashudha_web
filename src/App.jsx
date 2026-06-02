import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurRoots from './components/OurRoots';
import ProductCategories from './components/ProductCategories';
import FarmToExport from './components/FarmToExport';
import QualityCertifications from './components/QualityCertifications';
import GlobalExportNetwork from './components/GlobalExportNetwork';
import ManufacturingExcellence from './components/ManufacturingExcellence';
import Sustainability from './components/Sustainability';
import IndustriesServe from './components/IndustriesServe';
import KnowledgeHarvest from './components/KnowledgeHarvest';
import RequestQuote from './components/RequestQuote';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurRoots />
        <ProductCategories />
        <FarmToExport />
        <QualityCertifications />
        <GlobalExportNetwork />
        <ManufacturingExcellence />
        <Sustainability />
        <IndustriesServe />
        <KnowledgeHarvest />
        <RequestQuote />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
