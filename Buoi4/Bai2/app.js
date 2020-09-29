
import CaseBook from "./CaseBook.js";
import Book from "./Book.js";

let newCaseBook=new CaseBook();
newCaseBook.addBook();
// newCaseBook.deleteBook();nnnn
newCaseBook.findBook();

let command=prompt(`
    1:Them tu sach
    2:Them sach vao tu
    3:Xoa sach
    4:Thoat
`)