import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/app.css";
import "./styles/nav.css";
import "./styles/books.css";
import "./styles/modal.css";
import "./styles/hamburg.css";
import Navbar from "./components/navbar";
import Upload from "./pages/uplod";
import Books from "./pages/books";
import Orders from "./pages/orders";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchData } from "../logic/actions/globalActions";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await fetch(
          "https://us-central1-cloud-a-thon.cloudfunctions.net/httpGetData/api/getData"
          // "http://127.0.0.1:5001/cloud-a-thon/us-central1/httpGetData/api/getData"
        );
        if (res.ok) {
          const output = await res.json();
          dispatch(fetchData(output.newData));
        } else {
          const failedPromise = await res.json();
          Promise.reject(failedPromise);
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleFetch();
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}
