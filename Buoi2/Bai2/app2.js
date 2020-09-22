class Person{
    name;
    age;
    sex;
    address;
    constructor(name,age,sex,address){
        this.name = name ;
        this.age = age;
        this.sex = sex ;
        this.address = address;
    }
    speak(){ 
        console.log(`Chúng mình quay lại nhá`);
    }
    introduce(){
        console.log(`Mình là người yêu cũ `);
    }
}

// Crush ----------------------------
class Crush extends Person {
    appearance;
    favorite;
    constructor(name,age,appearance,favorite,address,sex){
        super(name,age,address,sex) ;
        this.appearance = appearance;
        this.favorite = favorite;
    }
}

// EX-Love---------------------------------------------------
class OldGirlFriend extends Person {
    appearance;
    constructor(name,age,sex,address,appearance){
        super(name,age,"female",address);
        this.appearance = appearance;
    }
}

// List-----------------------------------------------------------------------------------
class List {
    owner;
    persons = [ ];
    constructor(owner,persons){
        this.owner = owner;
        this. persons = persons;
    }


       showAll(){
           console.log(this.persons);
       }
    
       addCrush(){
           let check=true;
           
           while(check)
           {
            let name = prompt("Input name your crush/nyc: ");
            let age = prompt("Input age your crush/nyc:");
            let address = prompt("Input address your crush/nyc:");
            let appearance = prompt("Input  appearance your crush/nyc:");
            let sex=prompt("Nhap gioi tinh");
            let favorite = prompt("Input favorite your crush/nyc: ");
           let ask=prompt("Day la cr hay nyc(cr/nyc)");
                if(ask =="nyc")
                {
                    let girl=new OldGirlFriend(name,age,sex,address,appearance);
                    this.persons.push(girl);

                }else{
                    let girl=new Crush(name,age,appearance,favorite,sex,address);
                    this.persons.push(girl);
                }
                let ask2=prompt("Ban co muon nhap tiep(y/n)")
                if(ask2=="y")
                {
                    check=true;
                }else{
                    check=false;
                }
           }
       }


}
 
let userInput=prompt("Nhap ten cua ban");
let arr = [];
let newList= new List(userInput,arr)

let check2=true;

while(check2)
{
    let userInput1=prompt(`
    Nhap 1 den them crush hoac nyc
    Nhap 2 de in tat ca 
`);
if(userInput1=="1")
{
    newList.addCrush();
} if(userInput1=="2")
{
    newList.showAll();
    check2=false;
}
}

