

export default class Location
{
    name;
    coordinates=[];
    locations;
    constructor(name,coordinates)
    {
        this.name=name;
        this.coordinates=coordinates;
        this.locations=[];
    }
    addLocation()
    {
        let name=prompt("Moi nhap them dia diem");
        let coordinates=prompt("Moi nhap toa do diem do x,y");
        let arrCoordinates=coordinates.split(",");
        this.locations.push(arrCoordinates);
        console.log(this.locations)
    }
}