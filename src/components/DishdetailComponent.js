import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export class DishDetail extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   renderDish(dish) {
      if (dish != null)
         return (
            <>
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
                              --{author} , {date}
                           </p>
                        </div>
                     );
                  })}
               </div>
            </>
         );
      else return <div></div>;
   }

   render() {
      const { selectedDish } = this.props;
      return this.renderDish(selectedDish);
   }
}

export default DishDetail;
