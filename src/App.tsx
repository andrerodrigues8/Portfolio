
import { useState } from 'react';
import About from './About'
import Header from './Header'
import Skills from './Skills';
export type Language = "en" | "pt";
function App() {
  const [language, setLanguage] = useState<Language>("en");
 return(
    <>
      <div className="min-h-screen bg-linear-to-br from-cyan-500 to-blue-950">
        <Header changeLanguage={(language)=>setLanguage(language)} language={language}/>
        <About language={language}/>
        <Skills language={language}/>
      </div>
    </>
 )
}

export default App
