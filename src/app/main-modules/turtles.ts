export class Turtles {
    type: string;
    imageUrl: string;
    location: string;
    size: string;
    lifespan: string;
    entryDate: string;
    details: string

    constructor(type, imageUrl, location, size, lifespan,entryDate, details) {
        this.type = type;
        this.imageUrl = imageUrl;
        this.location = location;
        this.size = size;
        this.lifespan = lifespan;
        this.entryDate = entryDate;
        this.details = details;
    }
}