import {database} from "./firebase.js";
import {ref, onValue, set, getDatabase, query, limitToLast} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
let randomnum = Math. floor((Math. random() * 1000000) + 1);
const db = getDatabase();
const txt = document.getElementById('tweet');
const btn = document.getElementById('TweetButton');
let name = prompt("What is your name?").toLocaleLowerCase();
let change = document.getElementById('ColorChange');


   
change.onclick = function() {
  var color = 'rgb(' + 
  (Math.floor(Math.random()*56)+200) + ', ' +
  (Math.floor(Math.random()*56)+200) + ', ' +
  (Math.floor(Math.random()*56)+200) +
  ')';
  return color;
}



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

/*
    const starCountRef =   const getMessages = query(ref(database, 'messages'), limitToLast(1));
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
              const starCountRef = ref(database, 'messages/' );
*/
 
 const starCountRef = query(ref(database, 'messages'), limitToLast(1));
  onValue(starCountRef, (snapshot) => {
    let data = snapshot.val();
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
