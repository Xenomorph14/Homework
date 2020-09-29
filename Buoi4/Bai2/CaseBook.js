import Book from "./Book.js";

export default class CaseBook
{
    id;
    storage;
    books;
    dateCreate;
    constructor(storage)
    {
        this.id=uuid.v4();
        this.storage=storage;
        this.books=[];
        this.dateCreate=new Date().toISOString();
    }
    addBook()
    {
        let userInputName=prompt("Input name of the book");
        let userInputAuthor=prompt("Input author name of the book");
        let userInputCategory=prompt("Input category of the book");

        let book=new Book(userInputName,userInputAuthor,userInputCategory);
        this.books.push(book);
        console.log(this.books)
    }
    deleteBook()
    {
       let userInputId=prompt("Input Id of the book you want to delete");
        for(let i=0;i<this.books.lenght;i++)
        {
            if(this.books[i].id==userInputId)
            {
                this.books[i].remove()
            }
        }
    }
    findBook()
    {
        let userInput=prompt(`
            You want to find by 
            1:Author
            2:Name
            3.Category
        `);
        if(userInput=="1")
        {
            let findAuthor=prompt("Input author you want to find");
            for(let i=0;i<this.books.length;i++)
            {
                if(this.books[i].author==findAuthor)
                {
                    console.log(this.books[i]);
                }
            }

        }
        if(userInput=="2")
        {
            let findName=prompt("Input name of book you want to find");
            for(let i=0;i<this.books.lenght;i++)
            {
                if(this.books[i].bookName==findName)
                {
                    console.log(this.books[i]);
                }
            }
        }
        if(userInput=="3")
        {
           let  findCategory=prompt("Input category you want to find");
            for(let i=0;i<this.books.lenght;i++)
            {
                if(this.books[i].category==findCategory)
                {
                    console.log(this.books[i]);
                }
            }
        }
    }
    addBookCase()
    {
        let userInputCaseStorage=Number(prompt("Input CaseBook storage"));
        this.storage=userInputCaseStorage;
    }
}

// let newCaseBook=new CaseBook();
// newCaseBook.addBook();
