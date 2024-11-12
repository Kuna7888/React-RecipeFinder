import { Heart, HeartPulse, PlusCircle, Timer } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const RecipeCard = ({
  recipe,
  label,
  cuisineType,
  healthLabels,
  mealType,
  image,
  bg,
  badge,
  dishType,
}) => {
  ////////////////////////////////////
  const [RandomHealth, setRandomHealth] = useState({
    number1: '',
    number2: '',
  })

  const [addToFavorite, setAddToFavorite] = useState(
    localStorage.getItem('favorites')?.includes(label)
  )

  ////////////////////////////////////////
  function randomHealthLabels() {
    if (healthLabels < 2) {
      setRandomHealth({
        number1: healthLabels[0],
        number2: '',
      })
    } else {
      let RandomNumber1 = Math.floor(Math.random() * healthLabels.length)
      let RandomNumber2 = RandomNumber1

      while (RandomNumber2 === RandomNumber1) {
        RandomNumber2 = Math.floor(Math.random() * healthLabels.length)
      }
      setRandomHealth({
        number1: healthLabels[RandomNumber1],
        number2: healthLabels[RandomNumber2],
      })
    }
  }

  // ///////////////////////////////////
  function addRecipeToFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []

    const isRecipeAlreadyInFavorites = favorites.some(
      (fav) => fav.label === label
    )

    if (isRecipeAlreadyInFavorites) {
      favorites = favorites.filter((fav) => fav.label !== label)
      setAddToFavorite(false)
    } else {
      favorites.push(recipe)
      setAddToFavorite(true)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  ///////////////////////////////////
  useEffect(() => {
    randomHealthLabels()
  }, [])
  ///////////////////////////////////
  return (
    <div
      className={`flex flex-col rounded-md ${bg} overflow-hidden relative p-3 `}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${label} recipe`}
        target="_blank"
        className="relative h-36 "
      >
        <div className="skeleton absolute inset-0" />
        <img
          className="rounded-md object-cover cursor-pointer h-full w-full bg-center opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1
            e.currentTarget.previousElementSibling.style.display = 'none'
          }}
          src={image}
          alt={label}
        />

        <div
          className={`absolute bottom-1 left-1 text-black font-bold ${badge}  rounded-full z-10 p-1  flex gap-1 items-center text-sm`}
        >
          <Timer size={16} /> <span className="capitalize">{mealType}</span>
        </div>

        <div
          className="absolute bg-white rounded-full p-1 cursor-pointer right-2 top-1 "
          onClick={(e) => {
            e.preventDefault()

            addRecipeToFavorites()
          }}
        >
          <Heart
            className={`hover:fill-red-500 hover:text-red-500 ${
              addToFavorite ? 'fill-red-500 text-red-500' : ''
            }`}
            size={20}
          />
        </div>
      </a>

      <div className="flex flex-col items-start mt-1 text-black">
        <h1 className="font-semibold text-md">{label}</h1>
        <div className="flex justify-between w-full">
          <p className="capitalize">{cuisineType}</p>
          <p className="font-light text-[12px] capitalize">{dishType}</p>
        </div>
        <div className="flex text-sm items-start gap-2 mt-2">
          <div className="flex gap-1 bg-[#d6f497] rounded-full p-1 items-center">
            <HeartPulse size={16} />

            <span className="text-sm tracking-tighter font-semibold">
              {RandomHealth.number1}
            </span>
          </div>
          <div className="flex gap-1 bg-[#d6f497] rounded-full p-1 items-center">
            <PlusCircle size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {RandomHealth.number2}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
/////////////////////////////////////////
export default RecipeCard
