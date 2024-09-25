import '../style/StarRating.css'
const StarRating = ({ rating, count }) => {
  const maxStars = 5; // Define the total number of stars
  const filledStars = Math.round(rating); // Round rating to nearest integer

  return (
      <div className='starRating'>
          <div >
          {[...Array(maxStars)].map((star, index) => (
              
           <span key={index} style={{ color: index < filledStars ? '#FFD700' : '#ccc' }}>
          ★
                  </span>
          ))}
                  </div>
          <span className="review">
               {count}   customer reviews
          </span>
    </div>
  );
};

export default StarRating;
