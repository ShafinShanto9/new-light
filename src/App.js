import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import BlogOparation from './pages/BlogOparation';
import Authentication from './pages/Authentication';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:id' element={<Details/>} />
        <Route path='/update/:id' element={<BlogOparation/>} />
        <Route path='/create' element={<BlogOparation/>} />
        <Route path='/auth' element={<Authentication/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
