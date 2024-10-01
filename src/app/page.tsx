"use client";
import Card from "@/components/Card";
import { getFilmresponse } from "@/libs/api-libs";
import React, { useEffect, useState } from "react";

// Define the interface for Movie
interface Movie {
  index: number;
  original_title: string;
  vote_average: number;
  poster_path: string;
}

const Page: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res: Movie[] = await getFilmresponse(); 
        setMovies(res);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-16 flex flex-wrap gap-10 justify-center items-center">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <Card id={index} title={movie.original_title} rating={movie.vote_average} img={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${movie.poster_path}`}/>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
    </div>
  );
};

export default Page;
