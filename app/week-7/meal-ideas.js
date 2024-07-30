"use client";
import { useState } from "react";
import { useEffect } from "react";

async function fetchMealIdeas({ingredient}) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();

    return data.meals;
  }

export default function MealIdeas({ingredient}){

    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
      try {
        const data = await fetchMealIdeas({ingredient});
        //copy data to array of objects for meal names, ids
        let mealsArray = data.map((meal) => ({ ...meal }));
        setMeals(mealsArray);
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      loadMealIdeas();
    }, [{ingredient}]);
  
    return(
        <div>
          <h2 className = "px-5 text-[50px] underline">Meal Ideas</h2>
          <ul>
		      {meals.map((meal) => (
		        <li key={meal.idMeal} className = "p-4 m-4 bg-green-100 text-green-400 rounded-xl">{meal.strMeal}</li>
		      ))}
		      </ul>      
        </div>

    );
}