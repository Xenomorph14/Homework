function Person(name,age)
{
    this.name=name;
    this.age=age;
}

let thang=new Person("thang",19);

console.log(thang);

let Person1=(name,age)=>
{
    this.name=name;
    this.age=age;
}

let tuan=new Person1("tuan",20);

console.log(tuan);
