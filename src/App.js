import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/homePage';
import Intro from './components/introduction/intro';
import Learning from './components/learing-page/learning';
import Course from './components/courses/course';
import AboutUs from './components/about/about';
import Blog from './components/blog/blog';
import Footer from './components/footer/footer';
function App() {

  return (
    <div className="App">
     <Navbar />
     <Home />
     <Intro />
     <Learning />
     <Course />
     <AboutUs />
     <Blog />
     <Footer />
     
    </div>
  );
  
}

export default App;
