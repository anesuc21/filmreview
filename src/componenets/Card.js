import { Link } from "react-router-dom"
import Backup from "../assets/Image-not-found.png"
import { useState } from "react";

export const Card = ({movie}) => {
   const{id, original_title,overview,poster_path}=movie 
   const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: Backup; 
   const starPath = "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z";
   const [rating, setRating] = useState(() => {return Number(localStorage.getItem(`rating-${id}`)) || 0});
   
 
   return (
    
    <div>
        <div className="flex justify-start flex-wrap">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
                <Link to={`/movie/${id}`}>
                    <img className="rounded-t-lg" src={image} alt="" />
                </Link>
                <div className="p-5">
                    <Link to={`/movie/${original_title}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
                    </Link>
                    {/* ⭐ STAR RATING */}
                    <div className="flex justify-center items-center space-x-1">

                    {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        key={star}
                        onClick={() => {
                        setRating(star);
                        localStorage.setItem(`rating-${id}`, star);
                        }}
                        className={`w-8 h-8 cursor-pointer ${
                        star <= rating ? "text-yellow-300" : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d={starPath} />
                    </svg>
                    ))}
                                        </div>

      {/* 5 star */}
      <div className="flex items-center mt-4">
        <span className="text-sm font-medium w-14">5 star</span>

        <div className="w-full h-4 mx-4 bg-gray-300 rounded">
          <div
            className="h-4 bg-yellow-400 rounded"
            style={{ width: rating === 5 ? "100%" : "0%" }}
          ></div>
        </div>

      </div>

      {/* 4 star */}
      <div className="flex items-center mt-4">
        <span className="text-sm font-medium w-14">4 star</span>

        <div className="w-full h-4 mx-4 bg-gray-300 rounded">
          <div
            className="h-4 bg-yellow-400 rounded"
            style={{ width: rating === 4 ? "100%" : "0%" }}
          ></div>
        </div>

    
      </div>

      {/* 3 star */}
      <div className="flex items-center mt-4">
        <span className="text-sm font-medium w-14">3 star</span>

        <div className="w-full h-4 mx-4 bg-gray-300 rounded">
          <div
            className="h-4 bg-yellow-400 rounded"
            style={{ width: rating === 3 ? "100%" : "0%" }}
          ></div>
        </div>


      </div>

      {/* 2 star */}
      <div className="flex items-center mt-4">
        <span className="text-sm font-medium w-14">2 star</span>

        <div className="w-full h-4 mx-4 bg-gray-300 rounded">
          <div
            className="h-4 bg-yellow-400 rounded"
            style={{ width: rating === 2 ? "100%" : "0%" }}
          ></div>
        </div>


      </div>

      {/* 1 star */}
      <div className="flex items-center mt-4">
        <span className="text-sm font-medium w-14">1 star</span>

        <div className="w-full h-4 mx-4 bg-gray-300 rounded">
          <div
            className="h-4 bg-yellow-400 rounded"
            style={{ width: rating === 1 ? "100%" : "0%" }}
          ></div>
        </div>


      </div>

      <br/>
                    
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
                </div>
            </div>
        </div>
                
    </div>
  )
}
