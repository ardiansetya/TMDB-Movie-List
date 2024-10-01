"use client"
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    const keyword = searchRef.current?.value; 
    if (keyword) {
      router.push(`/search/movie/${keyword}`);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search Film..."
        className="input input-bordered w-24 md:w-auto"
        ref={searchRef} 
      />
      <button className="btn btn-primary " onClick={handleSearch}>Search</button>
    </div>
  );
};

export default InputSearch;
