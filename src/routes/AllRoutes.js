import {Routes, Route} from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound, Login, Register, MyReviews } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
        <div className="dark:bg-slate-800">
            <Routes>
                <Route path = "" element ={<MovieList apiPath = "https://api.themoviedb.org/3/movie/now_playing" />}/>
                <Route path = "/movie/:id" element ={<MovieDetail  />}/>
                <Route path = "/movies/review" element ={<MovieList />}/>
                <Route path = "/movies/popular" element ={<MovieList apiPath = "https://api.themoviedb.org/3/movie/popular" />}/>
                <Route path = "/movies/top" element ={<MovieList apiPath = "https://api.themoviedb.org/3/movie/top_rated"/>}/>
                <Route path = "/movies/upcoming" element ={<MovieList apiPath = "https://api.themoviedb.org/3/movie/upcoming" />}/>
                <Route path = "search" element ={<Search apiPath = "https://api.themoviedb.org/3/search/movie" />}/>
                <Route path = "*" element ={<PageNotFound />}/>
                <Route path = "login" element = {<Login />}/>
                <Route path = "register" element = {<Register />}/>
                <Route path = "myreviews" element = {<MyReviews />}/>
            </Routes>
        </div>
    </div>
  )
}
