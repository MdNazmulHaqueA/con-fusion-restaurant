import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
// import DishDetail from './DishdetailComponent';

class Menu extends Component {
   componentDidMount() {
      console.log('Menu Component componentDidMount Invoked');
   }

   render() {
      const menu = this.props.dishes.map(dish => {
         return (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
               {/* <Card onClick={() => this.onDishSelect(dish)}> */}
               <Card onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                     <CardTitle>
                        <h4>{dish.name}</h4>
                     </CardTitle>
                  </CardImgOverlay>
               </Card>
            </div>
         );
      });
      console.log('Menu Component RENDER Invoked');

      return (
         <div className="container">
            <div className="row">{menu}</div>
            <div className="row">
               {/* {this.renderDish(this.state.selectedDish)} */}
               {/* <DishDetail selectedDish={this.state.selectedDish} /> */}
            </div>
         </div>
      );
   }
}

export default Menu;
