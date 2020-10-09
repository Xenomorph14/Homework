//FetchFetch
// fetch(
//   "https://news-ncov-api.herokuapp.com/news?_page=1&_limit=20&fbclid=IwAR0WS5CN7fimAIjGWXPsbcOhKGcbhro1LoToheWXcEt3BK3F5f-0AV6D0M0"
// )
//   .then((response) => response.json())
//   .then(function getData(json) {
//     for (let i = 0; i < json.length; i++) {
//       console.log(`
// id: ${json[i].id}
// Title:${json[i].title}
// DateTime:${json[i].datetime}
// Content:${json[i].content}
//             `);
//     }
//   });

//Promise

const p = new Promise((resovle, reject) => {
  if (true){
    let name="Pham Huu Thang";
    setTimeout(() => {
      console.log(name)
      resovle(name);
    }, 3000)
  } else {
    reject();
  }
}
).then(function(nameCrush){
  nameCrush="Dang Phuong Mai"
  return console.log(nameCrush);
} );
