import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Pop from './components/Pop';

const App = () => {

  const [mealsData, setMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputSearch + '&language=fr-FR')
      .then((res) => setMealsData(res.data.meals));
  }, [inputSearch]);

  return (
    <div className='main-container'>
      <h1>React Cooking App</h1>

        <input type="text" 
               placeholder="Tapez le nom d'un aliment"
               onChange = {(e) => setInputSearch(e.target.value)} />
        <div className='meals-container'>

          {mealsData && mealsData
          .slice(0,24)
          .map((meal) => (
            <Card key={meal.idMeal} meal = {meal}/>
            
          ))};
        </div>
    </div>
  );
};

export default App;
