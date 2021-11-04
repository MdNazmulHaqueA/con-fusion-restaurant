import React from 'react';
import {
   Card,
   CardImg,
   CardText,
   CardBody,
   CardTitle,
   Breadcrumb,
   BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

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

const DishDetail = props => {
   // if (dish) {
   //    return (
   //       <div className="container">
   //          <div className="row">
   //             <RenderDish dish={dish} />
   //             <RenderComments comments={dish.comments} />
   //          </div>
   //       </div>
   //    );
   // } else {
   //    return null;
   // }
   return (
      <div className="container">
         <div className="row">
            <Breadcrumb>
               <BreadcrumbItem>
                  <Link to="/menu">Menu</Link>
               </BreadcrumbItem>
               <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
               <h3>{props.dish.name}</h3>
               <hr />
            </div>
         </div>
         <div className="row">
            <div className="col-12 col-md-5 m-1">
               <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
               <RenderComments comments={props.comments} />
            </div>
         </div>
      </div>
   );
};
export default DishDetail;
