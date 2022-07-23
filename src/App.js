import NavBar from './components/NavBar/NavBar';
import About from './components/About/About'
import Work from './components/Work/Work';
import Experience from './components/Experience/Experience';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </main>
  );
}

export default App;
