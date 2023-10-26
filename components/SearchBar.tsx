"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { SearchBarProps } from "@types";

function SearchBar({ setManufacturer, setModel }: SearchBarProps) {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const router = useRouter();

  const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
    return (
      <button
        title="button for search"
        type="submit"
        className={`-ml-3 z-10 ${otherClasses}`}
      >
        <Image
          src="/magnifying-glass.svg"
          alt="magnifying glass"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    );
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please fill in the searchbar");
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          height={25}
          width={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
