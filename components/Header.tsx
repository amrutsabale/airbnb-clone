import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";

type Selection = {
  startDate: Date;
  endDate: Date;
  color: string;
  key: string;
  autoFocus: boolean;
  disabled: boolean;
  showDateDisplay: boolean;
};

type HeaderProps = {
  placeholder?: string;
};

function Header({ placeholder = "" }: HeaderProps) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleDateRangeSelect = (range: any) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.election.endDate);
  };

  const handleNoOfGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoOfGuests(Number(e.target.value));
  };

  const handleResetInput = () => {
    setSearchInput("");
  };

  const goSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5
    md:px-10"
    >
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer"
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt="logo"
          style={{ objectFit: "contain", objectPosition: "left" }}
          fill
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder={placeholder || "Start your Search"}
          value={searchInput}
          onChange={handleSearch}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer"> Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-1">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleDateRangeSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl pl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={noOfGuests}
              onChange={handleNoOfGuestsChange}
              min={1}
            />
          </div>
          <div className="flex">
            <button
              onClick={handleResetInput}
              className="flex-grow text-gray-500"
            >
              Cancel
            </button>
            <button onClick={goSearch} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
