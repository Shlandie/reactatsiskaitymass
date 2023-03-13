import './App.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import BlogInfo from './components/BlogInfo';
import About from "./components/About";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog/:id" element={<BlogInfo />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div >
    </Router >
  );
}

export default App;
