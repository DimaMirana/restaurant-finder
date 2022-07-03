import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoPage from './pages/NoPage/NoPage';
import Home from './pages/Home/Home';
import UILayout from './pages/UILayout/UILayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UILayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
