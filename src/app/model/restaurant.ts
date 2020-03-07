export class Restarurant {
    id: number;
    name: string;
    address: string;
    city: string;
    lat: number;
    lng: number;
}

export class RestarurantBodyList {
    total_entries: number;
    per_page: number;
    current_page: number;
    restaurants: Array<Restarurant>;
}