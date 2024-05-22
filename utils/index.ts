import { ICar } from "@/types";

export async function fetchCars() {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09ce71fcd7msh97f4b330c8449b5p1705c6jsnc0d28da91a93',
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}


export function calculateRentPrice(car: ICar) {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = car.city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - car.year) * ageFactor;


    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}


export function getCarImg(car: ICar, angle?: string) {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}
