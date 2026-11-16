import {BrowserRouter, Route, Routes} from 'react-router';
import './App.css';
import Home from './views/Home';
import Layout from './components/Layout';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';
import Demo from './views/Demo';

const App = () => {
  return (
    <BrowserRouter basename="/~maisali/Web-kehitys-Syksy-2026/Viikko_4/wsk-react-app-week4">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Upload" element={<Upload />} />
          <Route path="Single" element={<Single />} />
          <Route path="Demo" element={<Demo />} />
          <Route path="Single" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
