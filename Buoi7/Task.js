export default class Task {
    id;
    iscompleted;
    content;
    dateModified;
    constructor(id,iscompleted,content,dateModified){
        this.id=id;
        this.iscompleted=iscompleted;
        this.content=content;
        this.dateModified=dateModified;
    }
}