import { ICar } from "@/types";

export async function fetchCars () {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09ce71fcd7msh97f4b330c8449b5p1705c6jsnc0d28da91a93',
            // 'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
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