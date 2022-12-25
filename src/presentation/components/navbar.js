import { React, useState, useEffect } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import Hamburg from "./hamburg";

export default function Navbar() {
  const [bool, setBool] = useState({
    homeBool: true,
    booksBool: false,
    ordersBool: false,
    uploadBool: false,
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/": {
        setBool({
          homeBool: false,
          booksBool: true,
          uploadBool: false,
          ordersBool: false,
        });
        break;
      }
      case "/upload": {
        setBool({
          homeBool: false,
          booksBool: false,
          uploadBool: true,
          ordersBool: false,
        });
        break;
      }
      case "/orders": {
        setBool({
          homeBool: false,
          booksBool: false,
          uploadBool: false,
          ordersBool: true,
        });
        break;
      }
    }
  }, [location]);

  return (
    <header>
      <h1 className="logo">Bookstore</h1>
      <Hamburg />
      <nav className="nav-right">
        <motion.span
          onTap={() => {
            !bool.booksBool && navigate("/");
          }}
          style={{
            textDecoration: bool.booksBool ? "underline" : "",
            color: bool.booksBool ? "#0058CC" : "",
          }}
        >
          Books
        </motion.span>
        <motion.span
          onTap={() => {
            !bool.ordersBool && navigate("/orders");
          }}
          style={{
            textDecoration: bool.ordersBool ? "underline" : "",
            color: bool.ordersBool ? "#0058CC" : "",
          }}
        >
          Orders
        </motion.span>
        <motion.span
          onTap={() => {
            !bool.uploadBool && navigate("/upload");
          }}
          style={{
            textDecoration: bool.uploadBool ? "underline" : "",
            color: bool.uploadBool ? "#0058CC" : "",
          }}
        >
          Upload
        </motion.span>
      </nav>
    </header>
  );
}
