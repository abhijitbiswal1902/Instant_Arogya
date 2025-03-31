// src/components/BabyCarePage.jsx

import React, { useState } from "react";
import { Menu, MenuItem, TextField, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import logo from "../assets/apollo-logo.png";

import BC1 from "../images/BC1.webp";
import BC2 from "../images/BC2.webp";
import BC3 from "../images/BC3.webp";
import BC4 from "../images/BC4.webp";
import BC5 from "../images/BC5.webp";
import BC6 from "../images/BC6.webp";
import BC7 from "../images/BC7.webp";
import BC8 from "../images/BC8.webp"; // Replace with actual image imports

const BabyCarePage = () => {
  const products = [
    { img: BC1, desc: "Pampers Diaper Pants XXL", price: "Rs 1049.30", id: 1 },
    { img: BC2, desc: "Nestle Nan Pro Powder, 400 gm", price: "Rs 825", id: 2 },
    {
      img: BC3,
      desc: "Cetaphil Baby Daily lotion, 400 ml",
      price: "Rs 783",
      id: 3,
    },
    {
      img: BC4,
      desc: "MamyPoko Extra Absorb Diaper Pants Large",
      price: "Rs 1358.60",
      id: 4,
    },
    {
      img: BC5,
      desc: "Himalaya Baby Diaper Rash Cream, 50 gm",
      price: "Rs 140",
      id: 5,
    },
    {
      img: BC6,
      desc: "Sebamed Baby Body Lotion, 400 ml",
      price: "Rs 1292",
      id: 6,
    },
    {
      img: BC7,
      desc: "Apollo Essentials Extra Absorb Baby Diaper Pants",
      price: "Rs 1079.10",
      id: 7,
    },
    {
      img: BC8,
      desc: "Figaro Baby Massage Oil, 200 ml",
      price: "Rs 318.80",
      id: 8,
    },
  ];

  const [cart, setCart] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pincode, setPincode] = useState("");

  const handleAddressClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddressClose = () => {
    setAnchorEl(null);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.desc} added to cart`);
  };

  return (
    <div>
      {/* First fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white p-4 flex items-center justify-between border-b z-10">
        <div className="flex items-center">
          <img src={logo} alt="Apollo Logo" className="h-10 mr-4 ml-8" />
          <div>
            <span className="text-blue-600 font-bold">Instant</span>
            <span className="text-blue-600 font-bold ml-2">Arogya</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="text-blue-600 flex items-center"
            onClick={handleAddressClick}
          >
            <LocationOnIcon className="mr-1" />
            Select Address
          </button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleAddressClose}
          >
            <MenuItem onClick={handleAddressClose}>
              Use Current Location
            </MenuItem>
            <MenuItem>
              <TextField
                label="Enter Pincode"
                variant="outlined"
                value={pincode}
                onChange={handlePincodeChange}
                size="small"
              />
            </MenuItem>
          </Menu>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </nav>

      {/* Second fixed navbar */}
      <nav className="fixed top-16 left-0 right-0 bg-white p-4 flex items-center justify-center border-b z-10">
        <Link
          to="/buy-medicines"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg mx-6"
        >
          Buy Medicines
        </Link>
        <Link
          to="/find-doctors"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg mx-6"
        >
          Find Doctors
        </Link>
        <Link
          to="/lab-tests"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg mx-6"
        >
          Lab Tests
        </Link>
        <Link
          to="/ambulance"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg mx-6"
        >
          Ambulance
        </Link>
      </nav>

      {/* Third fixed navbar */}
      <nav className="fixed top-32 left-0 right-0 bg-blue-600 p-4 flex items-center justify-center z-10">
        <Link
          to="/arogyaproducts"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Arogya Products
        </Link>
        <Link
          to="/babycare"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Baby Care
        </Link>
        <Link
          to="/nutritional-drinks"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Nutritional Drinks & Supplements
        </Link>
        <Link
          to="/women-care"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Women Care
        </Link>
        <Link
          to="/personal-care"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Personal Care
        </Link>
        <Link
          to="/ayurveda"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Ayurveda
        </Link>
        <Link
          to="/health-devices"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Health Devices
        </Link>
        <Link
          to="/home-essentials"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Home Essentials
        </Link>
        <Link
          to="/health-condition"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Health Condition
        </Link>
        {/* Add other links as needed */}
      </nav>

      {/* Baby Care Products section */}
      <div className="mt-48 p-4">
        <h2 className="text-2xl font-bold mb-4">Baby Care Products</h2>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img src={product.img} alt={product.desc} className="mx-auto" />
              <p className="mt-2">{product.desc}</p>
              <p className="font-bold">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BabyCarePage;