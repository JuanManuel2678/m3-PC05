import { Footer } from "./components/Footer"
import { Gallery } from "./components/Gallery"
import { Header } from "./components/HEADER"
import { Main } from "./components/Main"
import { Services } from "./components/Services"
import { TestimonialContainer } from "./components/TestimonialContainer"

function App() {


  return (
    <main className="max-w-[1440px] mx-auto relative">
     <Header />
     <Main />
     <Services />
     <TestimonialContainer />
     <Gallery />
     <Footer />
    </main>
  )
}

export default App
