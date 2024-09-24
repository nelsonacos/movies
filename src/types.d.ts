export interface APIResults {
    Search?:       Search[];
    totalResults?: string;
    Response:     string;
    Error?:       string; 
}

export interface Search {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   Type;
    Poster: string;
}

export enum Type {
    Movie = "movie",
    Series = "series",
}

export interface MappedMovies {
    id:  string;
    title: string;
    year: string;
    poster: string;
    type: Type;
}