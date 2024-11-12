import { getRandomColor } from "../lib/utils"
import RecipeCard from "./Recipecard"



const Favorites = () => {


  const fav = JSON.parse(localStorage.getItem("favorites")) || []

  return (
    <div className="bg-[#faf9fb] flex-1 min-h-screen">
      <div className="max-w-screen-lg mx-auto p-2">
        <p className="font-bold text-3xl md:text-4xl lg:text-5xl mt-4">
          My Favorites
        </p>
        {fav === 0 && (
          <>
            <div className="h-[80vh] flex flex-col items-center gap-4 mt-4">
              <img src="/404.svg" className="h-3/4" alt="404" />
            </div>
          </>
        )}
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {fav.map((recipe, index)=>{
              return <RecipeCard key={index} recipe={recipe} {...recipe} {...getRandomColor()}/>
            })}
          </div>
        
      </div>
    </div>
  )
}

export default Favorites