import React from 'react';
import Pop from './Pop';
import Popup from 'reactjs-popup';

const Card = ({meal}) => {

    return (   
        <div className='mealCard'>
            <h2>{meal.strMeal}</h2>
            <h5>Origine : {meal.strArea}</h5>
            <img src={meal.strMealThumb} alt={"photo " + meal.strMealThumb} />
            <p>{meal.strInstructions.slice(0, 430)}  ...</p>
            <button 
             onClick={(e) => <Pop />}
            > Voir la recette</button>
        </div>
        );
    }
export default Card;
