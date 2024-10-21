"use client";
import Card from "@/components/Card";
import { SearchMovie } from "@/libs/api-libs";
import { useEffect, useState } from "react";

type Movie = {
  id: number;
  original_title: string;
  vote_average: number;
  poster_path: string;
}

const Page = ({ params }: { params: { keyword: string } }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const keyword = params.keyword;

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res: Movie[] = await SearchMovie(keyword);
        setMovies(res);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchMovies();
  }, [keyword]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Pencarian untuk `{keyword}`
      </h1>
      <div className="p-16 flex flex-wrap gap-10 justify-center items-center">
        {loading ? (
          <p>Loading movies...</p>
        ) : movies.length > 0 ? (
          movies.map((movie, index) => (
            <Card
            id={movie.id}
              key={index}
              title={movie.original_title}
              rating={movie.vote_average}
              img={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${movie.poster_path}`}
            />
          ))
        ) : (
          <p>No movies found for `{keyword}`.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
