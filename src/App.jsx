import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Footer from "./components/Footer";



const App = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero/>
         
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 ">
          <Features/>
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6 bg-brand-gray50 dark:bg-gray-900">
          <Blog/>
         
      </div>
       <div className="max-w-7xl mx-auto pt-20 px-3 bg-brand-blue">
          <Footer/>
         
      </div>
      
    </>
  );
};

export default App;