import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import MoviePage from "./pages/MoviePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/discover' element={<DiscoverMoviesPage />}>
          <Route path=':searchtext' element={<DiscoverMoviesPage />} />
        </Route>
        <Route path='/movie/:imdb_id' element={<MoviePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
