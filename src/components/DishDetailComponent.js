import React, {Component} from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay} from 'reactstrap'

class DishDeatilComponent extends Component {
  constructor(props) {
    super(props);
  }
  
  
  renderDish(dish) {
    if (dish == null) {
      return (
        <div></div>
      )
    }
    return (
      <React.Fragment>
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1" >
          <h4>Comments</h4>
          {this.renderComments(dish.comments)}
      </div>
      </React.Fragment>
    )
  }
  formatDate(date) {
    const option = { year: 'numeric', month: 'short', day: 'numeric' };
    const date1 = new Date(date)
    const newdate = date1.toLocaleDateString("en-US", option)
    return newdate;

  }

  renderComments(comments) {
    if(!comments) {
      return (<div></div>)
    }
    else {
      const allComments = comments.map(comment => {
        return (
          <React.Fragment>
            <li>{comment.comment}</li><br />
            <li>-- {comment.author}, {this.formatDate(comment.date)}</li><br />
            </React.Fragment>

        )
      }
      );
      return (
        <ul className="list-unstyled">
          {allComments}
        </ul>
      )
    }
  }
  render() {
    const dish = this.props.dish;
    return (
      <div className="row">
        {this.renderDish(dish)}
      </div>
    )
  }
}
export default DishDeatilComponent;