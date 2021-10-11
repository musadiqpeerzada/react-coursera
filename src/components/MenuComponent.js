import React, {Component} from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay} from 'reactstrap'
import DishDeatilComponent from './DishDetailComponent'
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish : null
    }
  }
  onDishSelect(dish) {
    this.setState({selectedDish : dish})
  }

  renderDish(dish) {
    if (dish == null) {
      return (
        <div></div>
      )
    }
    return (
      <Card>
        <CardImg width="100%" src={process.env.PUBLIC_URL + dish.image} alt={dish.name}/>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    )
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={()=> {this.onDishSelect(dish)}}>
              <CardImg width="100%" src={process.env.PUBLIC_URL + dish.image} alt={dish.name}/>
            <CardImgOverlay> 
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      )
    });
    return (
      <div className="container">
        <div className="row"> 
            {menu}
        </div>
        <div className="row">
         <DishDeatilComponent dish = {this.state.selectedDish}/>
         {/* { this.renderDish(this.state.selectedDish)} */}
        </div>
      </div>
    );
  }
}
export default Menu;