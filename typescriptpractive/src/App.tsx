import { useContext } from 'react'
//import { ThemeContext } from './contexts/theme'
//import Header from './components/Header/Header'
//import Projects from './components/Projects/Projects'
//import Skills from './components/Skills/Skills'
//import ScrollToTop from './components/ScrollToTop/ScrollToTop'
//import Contact from './components/Contact/Contact'
//import Footer from './components/Footer/Footer'
import './App.css'
import About from './Components/About/About'

const App = () => {
    //const [{ themeName }] = useContext(ThemeContext)

    return (
        <div id='top'/*{ className={`${themeName} app`}}*/>
            {/*<Header />*/}

            <main>
                <About />
                {/*<Projects />*/}
                {/*<Skills />*/}
                {/*<Contact />*/}
            </main>

            {/*<ScrollToTop />*/}
            {/*<Footer />*/}
        </div>
    )
}

export default App