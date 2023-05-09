import React from 'react';
import Popup from 'reactjs-popup';
import Card from './Card';



const Pop = ({meal}) => {
    return (
        <Popup>
            <div className='popUp'>
                    <h4>{meal.strMeal}</h4>
                    <h4>Origine : {meal.strArea}</h4>
                    <img src={meal.strMealThumb} alt={"photo " + meal.strMealThumb} />
                    <p>{meal.strInstructions}</p>
                    <button>Fermer</button>
                </div>
        </Popup>
    );
};

export default Pop;