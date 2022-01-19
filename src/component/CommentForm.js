import React, { Component } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Row,
  Col,
} from "reactstrap";

import { Control, LocalForm, Errors } from "react-redux-form";

const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => val && val.length <= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    // event.preventDefault();
  }
  render() {
    function RenderCommment() {
      return (
        <LocalForm onSubmit={(values) => this.handleLogin(values)}>
          <Row className="form-group ">
            <Label htmlFor="rating" md={2}>
              Rating
            </Label>
            <Col md={10}>
              <Control.select
                model=".rating"
                id="rating"
                name="rating"
                placeholder="Rating"
                className="form-control"
              >
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
              </Control.select>
            </Col>
          </Row>
          <Row className="form-group mt-2">
            <Label htmlFor="Author" md={2}>
              Your Name
            </Label>
            <Col>
              <Control.text
                model=".author"
                id="author"
                name="author"
                placeholder="Your Name"
                className="form-control"
                validators={{
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              />
            </Col>
            <Errors
              className="text-danger"
              model=".author"
              show="touched"
              messages={{
                minLength: "Must be greater than 2 characters",
                maxLength: "Must be 15 characters or less",
              }}
            />
          </Row>
          <Row md={6} className="form-group">
            <Label htmlFor="comment" md={2}>
              Comment
            </Label>
            <Col md={10}>
              <Control.textarea
                model="comment"
                id="comment"
                name="comment"
                className="form-control"
                rows={6}
              />
            </Col>
          </Row>

          <Button type="submit" value="submit" color="primary">
            Login
          </Button>
        </LocalForm>
      );
    }
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-comment fa-lg"></span> Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <RenderCommment />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CommentForm;
