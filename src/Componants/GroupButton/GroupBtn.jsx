import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const GroupBtn = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2 mt-2" variant="outline-success">
          <FcGoogle /> Login with Google{" "}
        </Button>{" "}
        <Button variant="outline-dark">
          {" "}
          <VscGithubInverted /> Login with Github{" "}
        </Button>
      </ButtonGroup>

      <div className="mt-4">
        <p>Find us on </p>
        <ListGroup className="mt-0">
          <ListGroup.Item className="mb-2">
            <Link className="text-decoration-none">
              <FaFacebook /> Facebook{" "}
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <Link className="text-decoration-none text-center">
              <FaInstagram /> Instagram{" "}
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <Link className="text-decoration-none">
              <FaTwitter /> Twitter{" "}
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <Link className="text-decoration-none">
              <FaTwitch /> Twitch{" "}
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <Link className="text-decoration-none">
              <FaWhatsapp /> What's App{" "}
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};
export default GroupBtn;
