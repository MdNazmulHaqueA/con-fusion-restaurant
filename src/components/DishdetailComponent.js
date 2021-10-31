import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
   const { image, name, description } = dish;
   return (
      <div className="col-12 col-md-5 m-1">
         <Card>
            <CardImg top src={image} alt={name} />
            <CardBody>
               <CardTitle>
                  <h3>{name}</h3>
               </CardTitle>
               <CardText>{description}</CardText>
            </CardBody>
         </Card>
      </div>
   );
}

function RenderComments({ comments }) {
   return (
      <div className="col-12 col-md">
         <h3>Comments</h3>
         {comments &&
            comments.map(commentDetails => {
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
   );
}

const DishDetail = ({ dish }) => {
   if (dish) {
      return (
         <div className="container">
            <div className="row">
               <RenderDish dish={dish} />
               <RenderComments comments={dish.comments} />
            </div>
         </div>
      );
   } else {
      return null;
   }
};
export default DishDetail;
