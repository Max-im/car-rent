import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { ICar } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const carsData = await fetchCars();

  const cars = !Array.isArray(carsData) || !carsData || !carsData.length ? [] : carsData; 

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Our cars</h1>
          <p>Explore our cars</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>

        {cars.length > 0 && (
          <div className="home__cars-wrapper">
            {cars.map((car: ICar) => <CarCard key={car.model} car={car} />)}
          </div>
        )}

        {cars.length === 0 && (
          <div className="home__error-container">
            <h2 className="text-black text-xl text-bold">No cars found</h2>
            <p>{carsData?.message}</p>
          </div>
        )}

      </div>
    </main>
  );
}
