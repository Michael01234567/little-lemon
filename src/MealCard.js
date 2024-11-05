import './MealCard.css';
import Swal from 'sweetalert2';

const MealCard = ({ meal }) => {

  const handleOrder = (id) => {
    console.log(meal.id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, order it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Ordered!",
            text: "Your order has been placed",
            icon: "success"
          });
        }
      }); 
  }
  

  return (
    <article className="meal-card">
      <div className="meal-card-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-card-header">
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className="meal-card-body-footer">
        <p>{meal.description}</p>
      </div>
      <button className='orderbtn' onClick={() => handleOrder(meal.id)} >Order Now</button>
    </article>
  );
};

export default MealCard;
