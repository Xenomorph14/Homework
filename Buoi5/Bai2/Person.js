import Location from "./Location.js";

export default class Person
{
    name;
    phoneNum;
    pastLocation;
    persons;
    constructor(name,phoneNum,pastLocation)
    {
        this.name=name;
        this.phoneNum=phoneNum;
        this.pastLocation=pastLocation;
        this.persons=[];
    }
    addPerson()
    {
        let name=prompt("Moi nhap ten");
        let phoneNum=prompt("Moi nhap so dien thoai");
        let pastLocation=prompt("Moi nhap dia diem da di qua");
        let person=new Person(name,phoneNum,pastLocation);
        this.persons.push(person);        
    }
} 