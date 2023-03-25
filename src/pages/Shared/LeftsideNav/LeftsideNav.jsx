import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeftsideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://dragon-news-server-chi-six.vercel.app/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <p>Total categories: {categories.length}</p>
      {categories.map((category, i) => (
        <p key={i}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftsideNav;
