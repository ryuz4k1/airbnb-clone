import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploredata, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      <main className="max-width-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from a server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploredata?.map((item) => (
              <SmallCard
                key={item.id}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8"> Live Anywhere </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item) => (
              <MediumCard key={item.id} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />

    </div>
  );
}

export async function getStaticProps() {
  // const exploredata = await fetch("https://links.papareact.com/pyp").then(
  //   (res) => res.json()
  // );

  const exploredata = [
    {
      id: 1,
      img: "https://links.papareact.com/5j2",
      location: "London",
      distance: "45-minute drive",
    },
    {
      id: 2,
      img: "https://links.papareact.com/1to",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      id: 3,
      img: "https://links.papareact.com/40m",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      id: 4,
      img: "https://links.papareact.com/msp",
      location: "York",
      distance: "4-hour drive",
    },
    {
      id: 5,
      img: "https://links.papareact.com/2k3",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      id: 6,
      img: "https://links.papareact.com/ynx",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      id: 7,
      img: "https://links.papareact.com/kji",
      location: "Newquay",
      distance: "6-hour drive",
    },
    {
      id: 8,
      img: "https://links.papareact.com/41m",
      location: "Hove",
      distance: "2-hour drive",
    },
  ];

  const cardsData = [
    {
      id: 1,
      img: "https://links.papareact.com/2io",
      title: "Outdoor getaways",
    },
    {
      id: 2,
      img: "https://links.papareact.com/q7j",
      title: "Unique stays",
    },
    {
      id: 3,
      img: "https://links.papareact.com/s03",
      title: "Entire homes",
    },
    {
      id: 4,
      img: "https://links.papareact.com/8ix",
      title: "Pet allowed",
    },
  ];

  return {
    props: {
      exploredata,
      cardsData,
    },
  };
}
