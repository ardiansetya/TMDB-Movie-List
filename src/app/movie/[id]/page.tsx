"use client";
import React, { useEffect, useState } from "react";
import { getFilmResponseById } from "@/libs/api-libs";
import Image from "next/image";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
  genre: {
    name: string;
  }[];
  vote_average: number;
  release_date?: string;
}

interface PageProps {
  params: {
    id: string; // biasanya parameter URL bertipe string
  };
}

const Page: React.FC<PageProps> = ({ params: { id } }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const detailMovie = await getFilmResponseById(Number(id)); // konversi id ke number jika diperlukan
        setMovie(detailMovie);
        console.log(detailMovie);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} // pastikan base URL sesuai
        alt={movie.title}
        className="transition-all duration-300 p-3"
        width={400}
        height={400}
        priority={true}
      />
      <div className="flex flex-col gap-5">
        <h1 className="text-center mt-4 font-bold text-2xl underline text-indigo-400">
          {movie.title}
        </h1>
        <p>{movie.overview}</p>

        {/* Tabel informasi film */}
        <table className="table-auto border-collapse border border-gray-500 w-full mt-5">
          <thead>
            <tr>
              <th className="border p-2">Genre</th>
              <th className="border p-2">Rating</th>
              <th className="border p-2">Release Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                {movie.genre && movie.genre.length > 0
                  ? movie.genre.map((g) => g.name).join(", ")
                  : "N/A"}
              </td>
              <td className="border p-2">{movie.vote_average} / 10</td>
              <td className="border p-2">{movie.release_date || "N/A"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
