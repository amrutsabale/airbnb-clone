import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { InfoCard } from "../components/InfoCard";
import { SEARCH_RESULTS } from "../mock-data/search-results";

type LocationResult = {
  description: string;
  img: string;
  lat: number;
  location: string;
  long: number;
  price: string;
  star: number;
  title: string;
  total: string;
};
type SearchProps = {
  searchResults: LocationResult[];
};
function Search({ searchResults }: SearchProps) {
  console.log("searchResults", searchResults);
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate =
    typeof startDate === "string"
      ? format(new Date(startDate), "dd MMM yy")
      : "NA";
  const formattedEndDate =
    typeof endDate === "string" ? format(new Date(endDate), "dd MMM yy") : "NA";
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          {searchResults.map(
            ({
              img,
              location,
              description,
              lat,
              long,
              price,
              total,
              title,
              star,
            }) => (
              <InfoCard
                key={img}
                img={img}
                location={location}
                description={description}
                lat={lat}
                long={long}
                price={price}
                total={total}
                title={title}
                star={star}
              />
            )
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Server Side Rendering
export async function getServerSideProps() {
  // const searchResults = await fetch("https://jsonkeeper.com/b/QKRS").then(
  //   (res) => res.json()
  // );
  const searchResults = SEARCH_RESULTS;

  return {
    props: {
      searchResults,
    },
  };
}

export default Search;
