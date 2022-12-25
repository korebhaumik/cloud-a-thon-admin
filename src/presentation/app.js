import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/app.css";
import "./styles/nav.css";
import "./styles/books.css";
import "./styles/modal.css";
import "./styles/hamburg.css";
import "./styles/order.css";
import Navbar from "./components/navbar";
import Upload from "./pages/uplod";
import Books from "./pages/books";
import Orders from "./pages/orders";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchData } from "../logic/actions/globalActions";
import { fetchOrder } from "../logic/actions/globalActions";
import { Toaster } from "react-hot-toast";

export default function App() {
  const dispatch = useDispatch();
  const handleFetch = async () => {
    try {
      const res = await fetch(
        "https://us-central1-cloud-a-thon.cloudfunctions.net/httpClientFirestore/api/getData"
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
  const handleFetchOrders = async () => {
    try {
      const res = await fetch(
        // "https://us-central1-cloud-a-thon.cloudfunctions.net/httpGetData/api/getData"
        "http://127.0.0.1:5001/cloud-a-thon/us-central1/httpAdminFireStore/api/getOrders"
      );
      if (res.ok) {
        const output = await res.json();
        dispatch(fetchOrder(output.newData));
      } else {
        const failedPromise = await res.json();
        Promise.reject(failedPromise);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleFetchOrders();
    handleFetch();
  }, []);
  return (
    <Router>
      <Toaster />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}
