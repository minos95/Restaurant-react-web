import React, { Component } from "react";
import { Card, CardImg, CardText, CardTitle } from "reactstrap";
class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    return typeof dish !== "undefined" ? (
      <Card key={dish.id}>
        <CardImg src={dish.image} />
        <CardTitle>{dish.name}</CardTitle>
        <CardText> {dish.description}</CardText>
      </Card>
    ) : (
      <div></div>
    );
  }
  renderComments(listComment) {
    if (listComment.length !== 0 || typeof listComment != "undefined") {
      return listComment.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author} ,{comment.date}
            </p>
          </li>
        );
      });
    } else {
      console.log("++++++++++++++++++++++");
      return <div></div>;
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12  col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {typeof this.props.selectedDish !== "undefined" ? (
                this.renderComments(this.props.selectedDish.comments)
              ) : (
                <div></div>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
