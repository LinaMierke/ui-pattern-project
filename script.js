// let url = "https://www.googleapis.com/books/v1/volumes?q=horror+subject:mystery&key=AIzaSyBurcL0Vnq50D-vV1kMvd-LMuoPLf0XBag"


let baseURL = "https://www.googleapis.com/books/v1/volumes?q="
let genre = "horror"
let subject = "mystery"
let keyURL = "&key=AIzaSyBurcL0Vnq50D-vV1kMvd-LMuoPLf0XBag"
let fullURL = baseURL + genre + "+subject:" + subject + keyURL
let mystery = document.querySelector('.tab1')
let romance = document.querySelector('.tab2')
let fiction = document.querySelector('.tab3')
let fantasy = document.querySelector('.tab4')



fetch(fullURL)
   .then(data => data.json())
   .then ( data => {
      
      let image = data.items[0].volumeInfo.imageLinks.thumbnail
      mystery.addEventListener("click", function(e){
         e.preventDefault();
         var img = document.createElement('img');
         img.src = image;
         img.width = 500;
         img.height = 500;
         img.className="image1"
         mystery.appendChild(img)
         let news = document.querySelector('.content')
         news.appendChild(img)
        
   })
   
})

let genre1 = "love"
let subject1 = "love"
let fullURL1 = baseURL + genre1 + "+subject:" + subject1 + keyURL

fetch(fullURL1)
   .then(data => data.json())
   .then ( data => {
      
      let image2 = data.items[8].volumeInfo.imageLinks.thumbnail
      romance.addEventListener("click", function (e) {
         e.preventDefault();
         var img2 = document.createElement('img');
         img2.src = image2;
         img2.width = 500;
         img2.height = 500;
         img2.className="image2";
         romance.appendChild(img2)
         let news2 = document.querySelector('.content')
         news2.appendChild(img2)
      
   })
})

let genre2 = "fiction"
let subject2 = "fiction"
// let keyURL = "&key=AIzaSyBurcL0Vnq50D-vV1kMvd-LMuoPLf0XBag"
let fullURL2 = baseURL + genre2 + "+subject:" + subject2 + keyURL

fetch(fullURL2)
   .then(data => data.json())
   .then ( data => {
      
      let image3 = data.items[1].volumeInfo.imageLinks.thumbnail
      fiction.addEventListener("click", function (e) {
         e.preventDefault();
         var img3 = document.createElement('img');
         img3.src = image3;
         img3.width = 500;
         img3.height = 500;
         img3.className="image3";
         romance.appendChild(img3)
         let news3 = document.querySelector('.content')
         news3.appendChild(img3)
      
   })
})

let genre3 = "fantasy"
let subject3 = "fantasy"
// let keyURL = "&key=AIzaSyBurcL0Vnq50D-vV1kMvd-LMuoPLf0XBag"
let fullURL3 = baseURL + genre3 + "+subject:" + subject3 + keyURL

fetch(fullURL3)
   .then(data => data.json())
   .then ( data => {
      
      let image4 = data.items[3].volumeInfo.imageLinks.thumbnail
      fantasy.addEventListener("click", function (e) {
         e.preventDefault();
         var img4 = document.createElement('img');
         img4.src = image4;
         img4.width = 500;
         img4.height = 500;
         img4.className="image4";
         fantasy.appendChild(img4)
         let news4 = document.querySelector('.content')
         news4.appendChild(img4)
      
   })
})



// function image1(){
//    document.querySelector(".tab1").getElementsByClassName.display= 'block';
//    document.querySelector(".tab2").getElementsByClassName.display= 'none';
//    document.querySelector(".tab3").getElementsByClassName.display= 'none';
//    document.querySelector(".tab4").getElementsByClassName.display= 'none';
   
// }
// function image2(){
//    document.querySelector(".image2").getElementsByClassName.display= 'block';
//    document.querySelector(".image1").getElementsByClassName.display= 'none';
//    document.querySelector(".image3").getElementsByClassName.display= 'none';
//    document.querySelector(".image4").getElementsByClassName.display= 'none';
   
// }
// function image3(){
//    document.querySelector(".image3").getElementsByClassName.display= 'block';
//    document.querySelector(".image2").getElementsByClassName.display= 'none';
//    document.querySelector(".image1").getElementsByClassName.display= 'none';
//    document.querySelector(".image4").getElementsByClassName.display= 'none';
   
// }
// function image4(){
//    document.querySelector(".image4").getElementsByClassName.display= 'block';
//    document.querySelector(".image2").getElementsByClassName.display= 'none';
//    document.querySelector(".image3").getElementsByClassName.display= 'none';
//    document.querySelector(".image1").getElementsByClassName.display= 'none';
   
// }