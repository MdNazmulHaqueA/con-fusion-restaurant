import React, { Component } from 'react';
import Menu from './MenuComponent';
// import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
   constructor(props) {
      super(props);
      this.state = {
         dishes: DISHES,
         // selectedDish: null,
         comments: COMMENTS,
         promotions: PROMOTIONS,
         leaders: LEADERS,
      };
   }

   // onDishSelect(dishId) {
   //    this.setState({ selectedDish: dishId });
   // }

   render() {
      const HomePage = () => {
         return (
            <Home
               dish={this.state.dishes.filter(dish => dish.featured)[0]}
               promotion={
                  this.state.promotions.filter(
                     promotion => promotion.featured
                  )[0]
               }
               leader={this.state.leaders.filter(leader => leader.featured)[0]}
            />
         );
      };

      return (
         <div>
            <Header />
            <Switch>
               <Route path="/home" component={HomePage} />
               <Route
                  exact
                  path="/menu"
                  component={() => <Menu dishes={this.state.dishes} />}
               />
               <Route exact path="/contactus" component={Contact} />
               <Redirect to="/home" />
            </Switch>
            <Footer />
            {/* <Menu
               dishes={this.state.dishes}
               onClick={dishId => this.onDishSelect(dishId)}
            />
            <DishDetail
               dish={
                  this.state.dishes.filter(
                     dish => dish.id === this.state.selectedDish
                  )[0]
               }
            /> */}
         </div>
      );
   }
}

export default Main;
