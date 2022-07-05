import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoPage from './pages/NoPage/NoPage.component';
import HomePage from './pages/Home/Home.component';
import AboutPage from './pages/About/About.component';
import RecentlyViewedPage from './pages/RecentlyViewed/RecentlyViewed.component';
import UILayout from './pages/UILayout/UILayout.component';

const App: React.FC=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UILayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/viewed" element={<RecentlyViewedPage/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
