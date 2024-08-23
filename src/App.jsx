import './App.css'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Footer from './component/footer/Footer'
import Home from './component/home/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
      <About/>
      <Experience/>
      <Footer/> 
      
    </div>
  )
}

export default App
