import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import context from './Context';
import {
  fetchAllFoods,
  fetchAllDrinks,
  fetchAllCategoriesFoods,
  fetchAllCategoriesDrinks,
  fetchMealsAndCategory,
  fetchDrinksAndCategory,
  fetchRandomDrinks,
  fetchRandomMeal,
  fetchFoodsIngredients,
  fetchDrinksIngredients,
  fetchArea,
} from '../services/Data';

function Provider({ children }) {
  const [dataCategoriesFoods, setDataCategoriesFoods] = useState([]);
  const [dataCategoriesDrinks, setDataCategoriesDrinks] = useState([]);
  const [infoUser, setDatainfoUser] = useState({
    email: '',
    password: '',
  });
  const [categoryF, setCategoryF] = useState('All');
  const [categoryD, setCategoryD] = useState('All');
  const [dataMealsAndCategory, setDataMealsAndCategory] = useState([]);
  const [dataDrinksAndCategory, setDrinksAndCategory] = useState([]);
  const [randomDrinkId, setRandomDrinkId] = useState([]);
  const [randomMealId, setRandomMealId] = useState([]);
  const [foodsIngredients, setFoodsIngredients] = useState([]);
  const [drinksIngredients, setDrinksIngredients] = useState([]);
  const [ingredientByName, setIngredientByName] = useState([]);
  const [inProgressRecipes, setInProgressRecipes] = useState({
    cocktails: {},
    meals: {},
  });

  const [mealArea, setMealArea] = useState([{ strArea: 'All' }]);
  const [dataOptions, setDataOptions] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    fetchAllCategoriesFoods()
      .then(({ meals }) => setDataCategoriesFoods(meals));
    fetchAllCategoriesDrinks()
      .then(({ drinks }) => setDataCategoriesDrinks(drinks));
  }, []);

  useEffect(() => {
    if (categoryF === 'All') {
      fetchAllFoods()
        .then(({ meals }) => setDataMealsAndCategory(meals));
    } else {
      fetchMealsAndCategory(categoryF)
        .then(({ meals }) => {
          setDataMealsAndCategory(meals);
        });
    }
  }, [categoryF]);

  useEffect(() => {
    if (categoryD === 'All') {
      fetchAllDrinks()
        .then(({ drinks }) => setDrinksAndCategory(drinks));
    } else {
      fetchDrinksAndCategory(categoryD)
        .then(({ drinks }) => setDrinksAndCategory(drinks));
    }
  }, [categoryD]);

  useEffect(() => {
    fetchRandomDrinks().then((results) => setRandomDrinkId(results.drinks[0].idDrink));
  }, []);

  useEffect(() => {
    fetchRandomMeal().then((results) => setRandomMealId(results.meals[0].idMeal));
  }, []);

  useEffect(() => {
    const cardSize = 12;
    fetchFoodsIngredients().then((results) => setFoodsIngredients(
      results.meals.slice([0], cardSize),
    ));
  }, []);

  useEffect(() => {
    const cardSize = 12;
    fetchDrinksIngredients().then((results) => setDrinksIngredients(
      results.drinks.slice([0], cardSize),
    ));
  }, []);

  useEffect(() => {
    fetchArea().then((results) => setMealArea([{ strArea: 'All' }, ...results.meals]));
  }, []);

  useEffect(() => {
    fetchAllFoods().then((result) => setDataOptions(result.meals));
  }, []);

  const contextValue = {
    foods: dataMealsAndCategory,
    drinks: dataDrinksAndCategory,
    catFoods: dataCategoriesFoods,
    catDrinks: dataCategoriesDrinks,
    setDrinks: setDrinksAndCategory,
    setFoods: setDataMealsAndCategory,
    infoUser,
    setDatainfoUser,
    categoryF,
    setCategoryF,
    categoryD,
    setCategoryD,
    randomDrinkId,
    randomMealId,
    foodsIngredients,
    setFoodsIngredients,
    drinksIngredients,
    setDrinksIngredients,
    ingredientByName,
    setIngredientByName,
    inProgressRecipes,
    setInProgressRecipes,
    mealArea,
    setMealArea,
    dataOptions,
    setDataOptions,
    favoriteRecipes,
    setFavoriteRecipes,
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
