export interface rickandMorty{
    info : any;
    results: any;
}
export interface personajes{
    created: string;
    episode: any;
    id: number;
    image: string;
    location: location;
    name: string;
    orgin : origin;
    status:string;
    species:string;
    type:string;
    url: string;
}
interface location {
        name: string;
        url: string;
}
interface origin{
        name: string;
        url: string;
}