import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { MEDIUM_CARDS_DATA } from "../mock-data/cards-data";
import { SMALL_CARDS_DATA } from "../mock-data/small-cards";

export type ExploreDataItem = {
  img: string;
  location: string;
  distance: string;
};
export type MediumCardsItem = {
  img: string;
  title: string;
};

type HomeProps = {
  exploreData: ExploreDataItem[];
  cardsData: MediumCardsItem[];
};

const Home: NextPage<HomeProps> = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px:16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibolds pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => {
              return (
                <SmallCard
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => {
              return <MediumCard key={img} img={img} title={title} />;
            })}
          </div>
        </section>
        <LargeCard
          img="/largeCardImage.webp"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  // const response = await fetch("https://links.papareact.com/pyp");
  // const exploreData: ExploreDataItem[] = await response.json();
  // As above APIs are not working so taken just mocks
  const exploreData = SMALL_CARDS_DATA;
  const cardsData = MEDIUM_CARDS_DATA;
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

export default Home;
