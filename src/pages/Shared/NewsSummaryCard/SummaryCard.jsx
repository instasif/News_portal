import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const SummaryCard = ({ news }) => {
  const { title, details, total_view, image_url, _id, author, rating } = news;
  return (
    <Card className="text-center mb-5">
      <Card.Header>
        <div className="d-flex justify-content-between align-align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <Image roundedCircle src={author?.img} style={{ height: "60px" }} />
            <div>
              <p className="mb-0 ms-0 d-flex align-items-center justify-content-center">
                {author?.name}
              </p>
              <p>{author?.published_date}</p>
            </div>
          </div>

          <div>
            <FaRegBookmark className="me-2" />
            <FaShareAlt />
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."}{" "}
              <Link className="text-decoration-none" to={`/news/${_id}`}>
                Read More
              </Link>{" "}
            </p>
          ) : (
            details
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center justify-content-center">
            <FaStar className="text-warning" />
            <span className="ms-2">{rating?.number}</span>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <FaEye />
            <span className="ms-2">{total_view}</span>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default SummaryCard;
