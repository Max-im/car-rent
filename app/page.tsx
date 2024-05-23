import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { manufacturers, fuels, yearsOfProduction } from "@/constants";
import { ICar } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: any) {
  const carsData = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || 2022,
    year: searchParams.year || '',
    limit: searchParams.limit || 8,
    fuel: searchParams.fuel || '',
  });

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
            <CustomFilter title="fuel" payload={fuels} />
            <CustomFilter title="year" payload={ yearsOfProduction}/>
          </div>
        </div>

        {cars.length > 0 && (
          <>
            <div className="home__cars-wrapper">
              {cars.map((car: ICar) => <CarCard key={car.model} car={car} />)}
            </div>
            
            <ShowMore
              pageNumber={(searchParams.limit || 8) / 8}
              isNext={(searchParams.limit || 8) > cars.length}
            />
          </>
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
