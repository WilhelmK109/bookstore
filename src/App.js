import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";

import BookList from "./components/BookList";
import Navigation from "./components/Navigation";
import CategoriesPage from "./components/Categories";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
