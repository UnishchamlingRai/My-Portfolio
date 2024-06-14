
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Features from './components/Features'
import MyProject from './components/MyProject'
// import MyResume from './components/MyResume'
// import Testimonal from './components/Testimonal'
import "slick-carousel/slick/slick.css";
import Footer from './components/Footer'
import Contact from './components/Contact'



const App = () => {
  return (
   <div className='w-full bg-bodyColor text-lightText'>
      <Navbar />
    <div className="sm:px-16 px-8 mx-auto max-w-screen-xl">
    <Hero />
    <MyProject />
   
<Contact />
    <Footer />
    </div>
   
   </div>
  )
}

export default App