import { Routes, Route } from "react-router-dom";
import CreateBook from "./Pages/CreateBook";
import DeleteBook from "./Pages/DeleteBook";
import ShowBook from "./Pages/ShowBook";
import UpdateBook from "./Pages/UpdateBook";

const App = () => {
  return (
    <div className="app">
      <h1 className="text-3xl">book store</h1>
      <Routes>
        <Route path="/createBook" element={<CreateBook />} />
        <Route path="/deleteBook/delete/:id" element={<DeleteBook />} />
        <Route path="/showBook/details/:id" element={<ShowBook />} />
        <Route path="/updateBook/edit/:id" element={<UpdateBook />} />
      </Routes>
    </div>
  );
};

export default App;
