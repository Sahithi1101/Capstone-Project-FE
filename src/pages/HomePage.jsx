import React from 'react';
import '../style/HomePage.css';
import FeaturedBooks from "../components/FeaturedBooks.jsx";

const Description = () => {
  return (
    <section className= "background">
        <div className='welcome-container'>
            <div className='welcome-heading'>
            <h2>Welcome to BookNest!</h2>
            </div>
            <div className='welcome-des'>
            <p>BookNest is your go-to digital library where you can discover, buy, and read books on the go. 
                Whether you’re looking for the latest bestsellers, timeless classics, or hidden gems, BookNest 
                offers a vast collection of eBooks and audiobooks to suit every taste. With personalized recommendations, 
                intuitive search features, and a user-friendly interface, BookNest makes it easy to find your next favorite read. 
                Plus, you can sync your reading progress across devices, so you can pick up right where you left off anytime, anywhere. 
                Welcome to your personal book sanctuary!</p>
            </div>
        </div>
    <FeaturedBooks />
    </section>
    
  );
};
export default Description;





  