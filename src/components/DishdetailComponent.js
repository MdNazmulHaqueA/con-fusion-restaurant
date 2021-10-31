import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export class DishDetail extends Component {
   componentDidMount() {
      console.log('Dish Detail Component componentDidMount invoked');
   }

   componentDidUpdate() {
      console.log('Dish Detail Component componentDidUpdate invoked');
   }

   renderDish(dish) {
      if (dish != null)
         return (
            <div className="container">
               <div className="row">
                  <div className="col-12 col-md-5 m-1">
                     <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                           <CardTitle>
                              <h3>{dish.name}</h3>
                           </CardTitle>
                           <CardText>{dish.description}</CardText>
                        </CardBody>
                     </Card>
                  </div>
                  <div className="col-12 col-md">
                     <h3>Comments</h3>
                     {dish.comments.map(commentDetails => {
                        const { id, comment, author, date } = commentDetails;
                        return (
                           <div key={id}>
                              <p>{comment}</p>
                              <p>
                                 --{author} ,{' '}
                                 {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit',
                                 }).format(new Date(Date.parse(date)))}
                              </p>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         );
      else return <div></div>;
   }

   render() {
      console.log('Dish Detail Component render invoked');

      const { dish } = this.props;
      return this.renderDish(dish);
   }
}

export default DishDetail;
