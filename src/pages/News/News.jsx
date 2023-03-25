import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const { details, image_url, title, author, total_view, rating, category_id } =
    news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <div className="d-flex justify-content-around align-content-center">
        <p>Writen by: {author?.name}</p>
        <p>Published in: {author?.published_date}</p>
        <div className="d-flex align-content-center">
            <FaStar className="text-warning" />
            <span>{rating.number}</span>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">Explore More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
