import { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';

import DishDeatilComponent from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {connect} from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return  {
    dishes : state.dishes,
    comments : state.comments,
    leaders : state.leaders,
    promotions : state.promotions
  }  
}

const mapDispatchToProps = (dispatch) => ({
  addComment : (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
})
class Main extends Component {
  constructor(props) {
    super(props)
}


render() {

  const HomePage=()=>{
    return(
      <Home dish={this.props.dishes.filter(c=>c.featured)[0]}
      promotion={this.props.promotions.filter(c=>c.featured)[0]}
      leader={this.props.leaders.filter(c=>c.featured)[0]}
      />
    )
  }

  const DishWithId=({match})=>
  {
    return(
      <DishDeatilComponent dish={this.props.dishes.filter(c=>c.id===parseInt(match.params.dishId,10))[0]}
      comments ={this.props.comments.filter(c=>c.dishId===parseInt(match.params.dishId,10))}
      addComment={this.props.addComment}
      />
    )
  }

  return (
  <div>
  <Header /> 
  <Switch>
    <Route path='/home' component={HomePage} />
    <Route path='/aboutus' component={()=><About leaders={this.props.leaders}/>} />
    <Route exact path='/menu' component={()=><Menu dishes={this.props.dishes}/>} />
    <Route path='/menu/:dishId' component={DishWithId}/>
    <Route exact path='/contactus' component={Contact} />
    <Redirect to="/home" />
  </Switch>
  <Footer />
  </div>
  );
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));