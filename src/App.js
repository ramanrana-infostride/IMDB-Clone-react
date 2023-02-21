import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CategoryMovies from "./Pages/CategoryMovies";
import { routePath } from "./constants/route";

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path={routePath.home} element={<Home/>}/>
      <Route path={routePath.categories} element={<CategoryMovies/>}/>
      <Route path={routePath.invalid} element={<Home/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
