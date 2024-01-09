import './App.css';
import MainLayout from './Layouts/MainLayout';
import AddPage from './Pages/AddPage';
import DetailPage from './Pages/Details';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/"  element={<Home />} />
          <Route path='/add' element={<AddPage/>} />
          <Route path='/detail/:id' element={<DetailPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
