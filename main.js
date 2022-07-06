import {database} from "./firebase.js";
import {ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";

const txt = document.getElementById('tweet');
const btn = document.getElementById('TweetButton');

let name = prompt("What is your name?").toLocaleLowerCase();
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
      set(ref(database, 'users/' + name ), {
        username: name,
        messages: message
      });
    }

if(name == 'turgut'){
    const starCountRef = ref(database, 'users/' +  'nazan' + '/messages');
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
              p.textContent = data;
             document.getElementsByTagName('body')[0].appendChild(div);
             div.appendChild(p);
             div.appendChild(img);
    });

  }else if(name == 'nazan'){
    const starCountRef = ref(database, 'users/' +  'turgut' + '/messages');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
  
       var div = document.createElement('div');
       var p = document.createElement('p');
       var img = document.createElement('img');
           div.classList.add('tweet');
       
              div.style = 'position: releative; display:flex; width: 500px; height: fit-content; margin-top:40px; margin-left:20px;';
              img.style = 'width:60px; height: 60px;';
              p.style = 'margin-left:10px; margin-top: 20px;  background-color: rgb(15, 235, 15) !important; font-weight: bold; border-radius: 20px; text-align: center;';
               img.src = 'prof.png';
               p.textContent = data;
              document.getElementsByTagName('body')[0].appendChild(div);
              div.appendChild(img);
              div.appendChild(p);
    });
  }