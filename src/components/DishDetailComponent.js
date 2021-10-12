import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'


  function RenderComments(comments) {
  console.log({comments})
  if(!comments) {
    return (<div></div>)
  }
  else {
    const allComments = comments.map(comment => {
      return (
        <React.Fragment>
          <li>{comment.comment}</li><br />
          <li>-- {comment.author}, {formatDate(comment.date)}</li><br />
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

function RenderDish(dish) {
  if (dish == null) {
    return (
      <div></div>
    )
  }
  console.log(dish.comments)
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
        {RenderComments(dish.comments)}
    </div>
    </React.Fragment>
  )
}

function formatDate(date) {
  const option = { year: 'numeric', month: 'short', day: 'numeric' };
  const date1 = new Date(date)
  const newdate = date1.toLocaleDateString("en-US", option)
  return newdate;
}

const DishDeatilComponent = (props) => {
  return (
    <div className="row">
      {RenderDish(props.dish)}
    </div>
  )
}
  

  
 
    
export default DishDeatilComponent;