export interface Car {
    name: string;
    color: string;
    gas: "gasoline" | "diesel" | "electric";
    model: string;
    description: string;
    year: number;
    price: number;
}