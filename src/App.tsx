import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Protection from "./pages/Protection";
import HowItWorks from "./pages/HowItWorks";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";
import Email from "./pages/services/Email";
import Yahoo from "./pages/services/Yahoo";
import Outlook from "./pages/services/Outlook";
import Hotmail from "./pages/services/Hotmail";
import Mozilla from "./pages/services/Mozilla";
import Norton from "./pages/services/Norton";
import Mcafee from "./pages/services/Mcafee";
import Avast from "./pages/services/Avast";
import TrendMicro from "./pages/services/TrendMicro";
import Epson from "./pages/services/Epson";
import Canon from "./pages/services/canon";
import Brother from "./pages/services/Brother";
import HP from "./pages/services/HP";
import Lexmark from "./pages/services/Lexmark";
import Dell from "./pages/services/Dell";
import Lenova from "./pages/services/Lenova";
import HP2 from "./pages/services/HP2";
import Toshiba from "./pages/services/Toshiba";
import Acer from "./pages/services/Acer";
import Dlink from "./pages/services/Dlink";
import Cisco from "./pages/services/Cisco";
import Netgear from "./pages/services/Netgear";
import Linksys from "./pages/services/Linksys";
import Instagram from "./pages/services/Instagram";
import Facebook from "./pages/services/Facebook";
import Window7 from "./pages/services/Window7";
import Window8 from "./pages/services/Window8";
import Window9 from "./pages/services/Window9";
import Firefox from "./pages/services/Firefox";
import WindowXP from "./pages/services/WindowXP";
import Chrome from "./pages/services/Chrome";
import Safari from "./pages/services/safari";
import Adobe from "./pages/services/Adobe";
import Exact from "./pages/services/Exact";
import Skype from "./pages/services/Skype";
import Office from "./pages/services/Office";
import Xbox from "./pages/services/Xbox";
import Bitdefender from './pages/services/Bitdefender'
import QuickBooks from './pages/services/QuickBooks'
import Exact2 from './pages/services/Exact2'
import Skype2 from './pages/services/Skype2'
import Kandle from './pages/services/Kandle'
import Xbox2 from './pages/services/Xbox2'
import ContactBar from './pages/ContactBar.jsx'

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
   
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
            
        <BrowserRouter>
         
          <Layout>
       <ContactBar/>
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:type" element={<Services />} />
              <Route path="/protection" element={<Protection />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetails/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />

              <Route path="/services/email/Gmail-klantenservice-Nederland" element={<Email/>} />
              <Route path="/services/email/Yahoo-klantenservice-Nederland" element={<Yahoo/>} />
              <Route path="/services/email/Hotmail-klantenservice-Nederland" element={<Hotmail/>} />
              <Route path="/services/email/Outlook-klantenservice-Nederland" element={<Outlook/>} />
  

              {/* Antivirus */}
              <Route path="/services/antivirus/Norton-klantenservice-Nederland" element={<Norton/>} />
              <Route path="/services/antivirus/Mcafee-klantenservice-Nederland" element={<Mcafee/>} />
              <Route path="/services/antivirus/Avast-klantenservice-Nederland" element={<Avast/>} />
              <Route path="/services/antivirus/TrendMicro-klantenservice-Nederland" element={<TrendMicro/>} />
              <Route path="/services/antivirus/Bitdefender-klantenservice-Nederland" element={<Bitdefender/>} />
              {/* Printer */}
              <Route path="/services/printer/Epson-klantenservice-Nederland" element={<Epson/>} />
              <Route path="/services/printer/Canon-klantenservice-Nederland" element={<Canon/>} />
              <Route path="/services/printer/Brother-klantenservice-Nederland" element={<Brother/>} />
              <Route path="/services/printer/Hp-klantenservice-Nederland" element={<HP/>} />
              <Route path="/services/printer/Lexmark-klantenservice-Nederland" element={<Lexmark/>} />
              {/* PC */}
              <Route path="/services/pc/Dell-klantenservice-Nederland" element={<Dell/>} />
              <Route path="/services/pc/Lenova-klantenservice-Nederland" element={<Lenova/>} />
              <Route path="/services/pc/Hp-klantenservice-Nederland" element={<HP2/>} />
              <Route path="/services/pc/Toshiba-klantenservice-Nederland" element={<Toshiba/>} />
              <Route path="/services/pc/Acer-klantenservice-Nederland" element={<Acer/>} />
              {/* Routers */}
              <Route path="/services/routers/D'link-klantenservice-Nederland" element={<Dlink/>} />
              <Route path="/services/routers/Cisco-klantenservice-Nederland" element={<Cisco />} />
              <Route path="/services/routers/Netgear-klantenservice-Nederland" element={<Netgear/>} />
              <Route path="/services/routers/Linksys-klantenservice-Nederland" element={<Linksys/>} />
              {/* social */}
               <Route path="/services/social/Instagram-klantenservice-Nederland" element={<Instagram/>} />
               <Route path="/services/social/Facebook-klantenservice-Nederland" element={<Facebook/>} />
     
               {/* Browser */}
                <Route path="/services/browser/Firefox-klantenservice-Nederland" element={<Firefox/>} />
                <Route path="/services/browser/Chrome-klantenservice-Nederland" element={<Chrome/>} />
                <Route path="/services/browser/Safari-klantenservice-Nederland" element={<Safari/>} />
               {/* Others */}
               <Route path="/services/others/Coinbase-klantenservice-Nederland" element={<Adobe/>} />
               <Route path="/services/others/Paypal-klantenservice-Nederland" element={<Exact/>} />
               <Route path="/services/others/Apple-klantenservice-Nederland" element={<Skype/>} />
               <Route path="/services/others/Office-klantenservice-Nederland" element={<Office/>} />
               <Route path="/services/others/Adobe-klantenservice-Nederland" element={<Xbox/>} />
               <Route path="/services/others/Quickbooks-klantenservice-Nederland" element={<QuickBooks/>} />
               <Route path="/services/others/Exact-klantenservice-Nederland" element={<Exact2/>} />
               <Route path="/services/others/Skype-klantenservice-Nederland" element={<Skype2/>} />
               <Route path="/services/others/Kindle-klantenservice-Nederland" element={<Kandle/>} />
               <Route path="/services/others/Xbox-klantenservice-Nederland" element={<Xbox2/>} />

       
            </Routes>
          </Layout>
        </BrowserRouter>
              {/* other components */}

<div
  style={{
    position: "fixed",
    right: "-52px",            
    top: "50%",
    transform: "translateY(-50%) rotate(-90deg)",
    transformOrigin: "center",
    zIndex: 99999,
  }}
>
  <a
    href="#"
    style={{
      background: "linear-gradient(135deg, #19E6C2, #14B8A6)", // SAME BG
      color: "#002B2B",
      padding: "14px 22px",
   
      boxShadow: "0 12px 30px rgba(20,184,166,0.45)",
      fontWeight: "700",
      fontSize: "16px",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      whiteSpace: "nowrap",
    }}
  >
     +31 20 225 4839
  </a>
</div>



      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
