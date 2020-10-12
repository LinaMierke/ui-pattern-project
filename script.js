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

mystery.addEventListener("click", function(e){
   e.preventDefault();
   fetch(fullURL)
   .then(data => data.json())
   .then ( data => {
      
      let image = data.items[0].volumeInfo.imageLinks.thumbnail
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
   let content = document.querySelector('.menu');
content.addEventListener('click',function(e){  
console.log("hello");
let newImage= document.querySelector('.image1') 
console.log(newImage);
newImage.remove();

})


let genre1 = "love"
let subject1 = "love"
let fullURL1 = baseURL + genre1 + "+subject:" + subject1 + keyURL


      
   
      romance.addEventListener("click", function hello (e) {
         e.preventDefault();
fetch(fullURL1)
   .then(data => data.json())
   .then ( data => {
   let image2 = data.items[8].volumeInfo.imageLinks.thumbnail
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
let content2 = document.querySelector('.menu');
content2.addEventListener('click',function(e){  
console.log("hello");
let newImage2= document.querySelector('.image2') 
console.log(newImage2);
newImage2.remove();

})

let genre2 = "fiction"
let subject2 = "fiction"
let fullURL2 = baseURL + genre2 + "+subject:" + subject2 + keyURL


      
      
      fiction.addEventListener("click", function (e) {
         e.preventDefault();
fetch(fullURL2)
   .then(data => data.json())
   .then ( data => {
let image3 = data.items[1].volumeInfo.imageLinks.thumbnail
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
let content3 = document.querySelector('.menu');
content3.addEventListener('click',function(e){  
console.log("hello");
let newImage3= document.querySelector('.image3') 
console.log(newImage3);
newImage3.remove();

})


let genre3 = "fantasy"
let subject3 = "fantasy"
let fullURL3 = baseURL + genre3 + "+subject:" + subject3 + keyURL


      
      
      fantasy.addEventListener("click", function (e) {
         e.preventDefault();
fetch(fullURL3)
   .then(data => data.json())
   .then ( data => {
let image4 = data.items[3].volumeInfo.imageLinks.thumbnail
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

let content4 = document.querySelector('.menu');
content4.addEventListener('click',function(e){  
console.log("hello");
let newImage4= document.querySelector('.image4') 
console.log(newImage4);
newImage4.remove();

})
