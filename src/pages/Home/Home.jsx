import React from "react";
import { useLoaderData } from "react-router-dom";
import SummaryCard from "../Shared/NewsSummaryCard/SummaryCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <p>Dragon news Home: {allNews.length}</p>

      {allNews.map((news, i) => (
        <SummaryCard key={i} news={news} />
      ))}
    </div>
  );
};

export default Home;
