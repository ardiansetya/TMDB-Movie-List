"use client";
import Card from "@/components/Card";
import { SearchMovie } from "@/libs/api-libs";
import React, { useEffect, useState } from "react";

interface Movie {
  id: number;
  original_title: string;
  vote_average: number;
  poster_path: string;
}
const page = ({ params }: { params: { keyword: string } }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const keyword = params.keyword;
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res: Movie[] = await SearchMovie(keyword);
        setMovies(res);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Pencarian untuk "{params.keyword}"
      </h1>
      <div className="p-16 flex flex-wrap gap-10 justify-center items-center">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Card
              id={movie.id}
              title={movie.original_title}
              rating={movie.vote_average}
              img={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${movie.poster_path}`}
            />
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
};

export default page;
