import CaseBook from "./CaseBook.js";

export default class Book
{
    bookId;
    bookName;
    author;
    category;
    dateCreate;

    constructor(bookName,author,category)
    {
        this.bookId=uuid.v4();
        this.bookName=bookName;
        this.author=author;
        this.category=category;
        this.dateCreate=new Date().toISOString();
    }
    
}