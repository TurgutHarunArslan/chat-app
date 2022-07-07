import {database} from "./firebase.js";
import {ref, onValue, set, getDatabase, query, limitToLast} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
let randomnum = Math. floor((Math. random() * 1000000) + 1);
const db = getDatabase();
const txt = document.getElementById('tweet');
const btn = document.getElementById('TweetButton');
let change = document.getElementById('ColorChange');


   
change.onclick = function() {
  var color = 'rgb(' + 
  (Math.floor(Math.random()*56)+200) + ', ' +
  (Math.floor(Math.random()*56)+200) + ', ' +
  (Math.floor(Math.random()*56)+200) +
  ')';
  return color;
}

   let name = prompt("What is your name?").toLocaleLowerCase();

if(name==='turgut' || name === 'nazan'){
}else{
window.close()
}


btn.onclick = function(color){
const d = new Date();
let time = d.getTime();
if(name == 'turgut' || name == 'nazan'){
  let txtv = txt.value;
  var message = txt.value;

var div = document.createElement('div');
var span = document.createElement('span');
var img = document.createElement('img');
var p = document.createElement('p');
div.classList.add('container');
  img.src = 'prof.png';
  span.textContent = name;
  p.textContent = txtv;
 document.getElementsByTagName('body')[0].appendChild(div);
 div.appendChild(span);
 div.appendChild(img);
 div.appendChild(p);
      }
 writeUserData(name, message, time);
      
    }
    function writeUserData(name, message, time) {

      set(ref(database, 'messages/' + time + ' ' + name), {

        username: name,
        messages: message,
        time: time
      });
    }


 



 

  const GetMessage = query(ref(database, 'messages'), limitToLast(1));

  onValue(GetMessage, (snapshot) => {
    let data = snapshot.val();
    console.log(data);
    let dataz =   Object.values(data)[0];

    if(Object.values(dataz)[2] == 'nazan' && name !== 'nazan'){


  var div = document.createElement('div');
var span = document.createElement('span');
var img = document.createElement('img');
var p = document.createElement('p');
  div.classList.add('container');
      img.src = 'prof.png';
      span.textContent = Object.values(dataz)[2];
      p.textContent = Object.values(dataz)[0];
     document.getElementsByTagName('body')[0].appendChild(div);
     div.appendChild(span);
     div.appendChild(img);
     div.appendChild(p);
            
}else if(Object.values(dataz)[2] !== 'turgut' && name !== 'turgut'){
  var div = document.createElement('div');
var span = document.createElement('span');
var img = document.createElement('img');
var p = document.createElement('p');
  div.classList.add('container');
      img.src = 'prof.png';
      span.textContent = Object.values(dataz)[2];
      p.textContent = Object.values(dataz)[0];
     document.getElementsByTagName('body')[0].appendChild(div);
     div.appendChild(span);
     div.appendChild(img);
     div.appendChild(p);
           } 
   });
