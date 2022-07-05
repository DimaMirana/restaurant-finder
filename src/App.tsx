import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoPage from './pages/NoPage/NoPage.component';
import HomePage from './pages/Home/Home.component';
import UILayout from './pages/UILayout/UILayout.component';
import AboutPage from './pages/About/About.component';

const App: React.FC=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UILayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
