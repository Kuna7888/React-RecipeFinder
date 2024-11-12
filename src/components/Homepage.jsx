import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import RecipeCard from './Recipecard'


import axios from 'axios'
import { getRandomColor } from '../lib/utils'

const APP_ID="14b4ebbe"
const APP_KEY="91c4048ae0a55c7e2b28d6d6986b9408"

const Homepage = () => {

console.log(APP_ID);

  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchRecipes(name) {
    setLoading(true)
    setRecipes([])
    try {
      const { data } = await axios.get(
        `https://api.edamam.com/api/recipes/v2/`,
        {
          params: {
            app_id: APP_ID,
            app_key: APP_KEY,
            q: name,
            type: 'public',
          },
          headers: {
            'Edamam-Account-User': 'aryaKunal', // Add the custom header with user ID
          },
        }
      )
      // console.log(data)
      setRecipes(data.hits)
    } catch (error) {
      console.error(error.response ? error.response.data : error.message)
    } finally {
      setLoading(false)
    }
  }
  //////////////////////////////

function handleSearchRecipe (e) {
e.preventDefault()
const query = e.target.recipeSearch.value
fetchRecipes(query)
}


////////////////////////////////////
  useEffect(() => {
    fetchRecipes('veg')
  }, [])

  return (
    <div className="bg-[#faf9fe] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={24} />
            <input
              type="text" name='recipeSearch'
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>
        <p className="font-bold text-3xl md:text-4xl lg:text-5xl mt-4">
          Recommended Recipes
        </p>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular Choices
        </p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {!loading &&
            recipes.map(({ recipe }, index) => {
              // console.log(recipe);
              // console.log(recipe.label);

              return (
                <RecipeCard
                  key={index}
                  recipe={recipe}
                  {...recipe}
                  yielder={recipe.yield}
                  {...getRandomColor()}
                />
              )
            })}
          
        </div>
      </div>
    </div>
  )
}

export default Homepage
