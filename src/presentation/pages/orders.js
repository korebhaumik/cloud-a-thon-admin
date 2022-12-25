import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Orders() {
  const orderData = useSelector((state) => state.orderData);
  const newArr = orderData.map((ele) => {
    const booksArr = ele.books.map((book) => {
      return (
        <div className="line">
          <div className="product">
            <img src={book.url} className="order-img" />
            <h3>{book.name}</h3>
          </div>
          <h3>{book.quantity}</h3>
        </div>
      );
    });
    return (
      <div className="order-unit">
        <div className="left">
          <h1>
            Order Id : <span>{ele.orderId}</span>
          </h1>
          <hr />
          <div className="details">
            <h3>PRODUCT DETAILS</h3>
            <h3>QUANTITY</h3>
          </div>
          <div className="scrollable">{booksArr}</div>
          <motion.button
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.15 },
              backgroundColor: "#0CAD28",
            }}
            whileTap={{ scale: 0.9 }}
          >
            Delivered
          </motion.button>
        </div>
        <div className="right">
          <h1>Customer Details</h1>
          <h2>{ele.address}</h2>
          <h2>{ele.email}</h2>
          <h2>{ele.number}</h2>
        </div>
      </div>
    );
  });
  return <div className="order-container">{newArr}</div>;
}
