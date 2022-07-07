import {database} from "./firebase.js";
import {ref, set,  get } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
let randomnum = Math. floor((Math. random() * 1000000) + 1);
let mess = document.getElementsByTagName('div');
const txt = document.getElementById('tweet');
const btn = document.getElementById('TweetButton');

let name = prompt("What is your name?").toLocaleLowerCase();
if(name==='turgut' || name === 'nazan'){
let src = document.createElement('script');
src.src ='loadms.js';
src.type = 'module';
document.getElementsByTagName('body')[0].appendChild(src);
}else{
window.close()
}

btn.onclick = function(){
  
if(name == 'turgut'){
let txtv = txt.value;
var message = txt.value;

var div = document.createElement('div');
var p = document.createElement('p');
var img = document.createElement('img');
    div.classList.add('tweet');

       div.style = 'position: releative; display:flex; width: 500px; height: fit-content; margin-top:40px; margin-left:20px;';
       img.style = 'width:60px; height: 60px;';
       p.style = 'margin-left:10px; margin-top: 20px;  background-color: rgb(15, 235, 15) !important; font-weight: bold; border-radius: 20px; text-align: center;';
        img.src = 'prof.png';
        p.textContent = txtv;
       document.getElementsByTagName('body')[0].appendChild(div);
       div.appendChild(img);
       div.appendChild(p);
       div.classList.add('mess');
      }else if(name == 'nazan'){
        let txtv = txt.value;
        var message = txt.value;

    var div = document.createElement('div');
var p = document.createElement('p');
var img = document.createElement('img');
    div.classList.add('tweet2');
    div.classList.add('tweet');
       div.style = 'position: releative; display:flex; width: 500px; height: fit-content; margin-top:40px; margin-right:20px;';
       img.style = 'width:60px; height: 60px;';
       p.style = 'margin-left:10px; margin-top: 20px;  background-color: rgba(4, 195, 253, 0.801) !important; font-weight: bold; border-radius: 20px; text-align: center;';
        img.src = 'prof2.webp';
        p.textContent = txtv;
       document.getElementsByTagName('body')[0].appendChild(div);
       div.appendChild(p);
       div.appendChild(img);
      }

 writeUserData(name, message);
      
    }
    function writeUserData(name, message) {
      set(ref(database, 'messages/' + message + randomnum), {
        username: name,
        messages: message
      });
    }

/*
    const starCountRef = ref(database, 'messages/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      var div = document.createElement('div');
      var p = document.createElement('p');
      var img = document.createElement('img');
          div.classList.add('tweet2');
          div.classList.add('tweet');
             div.style = 'position: releative; display:flex; width: 500px; height: fit-content; margin-top:40px; margin-right:20px;';
             img.style = 'width:60px; height: 60px;';
             p.style = 'margin-left:10px; margin-top: 20px;  background-color: rgba(4, 195, 253, 0.801) !important; font-weight: bold; border-radius: 20px; text-align: center;';
              img.src = 'prof2.webp';
              p.textContent = data.messages;
             document.getElementsByTagName('body')[0].appendChild(div);
             div.appendChild(p);
             div.appendChild(img);
*/

const starCountRef = ref(database, 'messages/' );
get(starCountRef, (snapshot) => {
  let data = snapshot.val();


    let valz =  Object.values(data)[0 + mess.length];
    Object.values(valz)[0];

    if(Object.values(valz)[1] == 'nazan'){
     var div = document.createElement('div');
     var p = document.createElement('p');
     var img = document.createElement('img');
         div.classList.add('tweet2');
         div.classList.add('tweet');
            div.style = 'position: releative; display:flex; width: 500px; height: fit-content; margin-top:40px; margin-right:20px;';
            img.style = 'width:60px; height: 60px;';
            p.style = 'margin-left:10px; margin-top: 20px;  background-color: rgba(4, 195, 253, 0.801) !important; font-weight: bold; border-radius: 20px; text-align: center;';
             img.src = 'prof2.webp';
             p.textContent =   Object.values(valz)[0];
            document.getElementsByTagName('body')[0].appendChild(div);
            div.appendChild(p);
            div.appendChild(img);
            
    }else if(Object.values(valz)[1] == 'turgut'){
      var div = document.createElement('div');
      var p = document.createElement('p');
      var img = document.createElement('img');
          div.classList.add('tweet');
      
             div.style = 'position: releative; display:flex; width: 500px; height: fit-content; margin-top:40px; margin-left:20px;';
             img.style = 'width:60px; height: 60px;';
             p.style = 'margin-left:10px; margin-top: 20px;  background-color: rgb(15, 235, 15) !important; font-weight: bold; border-radius: 20px; text-align: center;';
              img.src = 'prof.png';
    
              p.textContent =   Object.values(valz)[0];
             document.getElementsByTagName('body')[0].appendChild(div);
             div.appendChild(img);
             div.appendChild(p);
           }
   });
