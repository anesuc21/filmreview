import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (apiPath,queryTerm="") => {
    const[data,setData]=useState([])
    const url = `${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(()=>{
        async function fetchMovies(params) {
            const Response = await fetch(url);
            const json = await Response.json();
            setData(json.results);
        }
        fetchMovies();
    },[url])

  return (
    {data}
  )
}


