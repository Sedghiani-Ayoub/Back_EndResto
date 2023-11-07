import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeSearchBar from './RecipeSearchBar';




const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('Pizza');

    const apiKey = 'e510356a20f5414fa859094ab1d9c84b';


    useEffect(() => {

        const fetchRecipes = async () => {
            const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}&number=10`;

            try {
                const response = await axios.get(apiUrl);
                setRecipes(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (searchQuery) {
            fetchRecipes();
        }
    }, [searchQuery])

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const fetchRecipeDetails = async (recipeId) => {

        const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

        try {
            const response = await axios.get(apiUrl);
            return response.data;
        } catch (error) {
            console.error('Error fetching recipe details:', error);
            return null;
        }
    };

    const displayIngredients = async (recipeId) => {
        const recipeDetails = await fetchRecipeDetails(recipeId);

        if (recipeDetails) {
            console.log(`Ingredients for recipe ${recipeId}:`, recipeDetails.extendedIngredients);
        }
    };


    return (
        <div>
            <div className="form-control bg-dark text-white">
                <h2>Recipes</h2>

                <RecipeSearchBar onSearch={handleSearch} />
                <ul>
                    {recipes.map((recipe) => (
                        <li key={recipe.id}>
                            {recipe.title} <br></br>
                            <img src={recipe.image} alt={recipe.title}></img>
                            <button onClick={() => displayIngredients(recipe.id)}>Show Ingredients</button>
                        </li>



                    ))}
                </ul>

            </div>
        </div>
    );
};

export default RecipeList;
