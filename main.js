import {database} from "./firebase.js";
import {ref, onValue, set, getDatabase, query, limitToLast} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
import{ name, password} from './log.js';
let randomnum = Math. floor((Math. random() * 1000000) + 1);
const db = getDatabase();
const txt = document.getElementById('tweet');
const btn = document.getElementById('TweetButton');
 


btn.onclick = function(){
const d = new Date();
let time = d.getTime();
  let txtv = txt.value;
  var message = txt.value;

var div = document.createElement('div');
var span = document.createElement('span');
var img = document.createElement('img');
var p = document.createElement('p');
div.classList.add('container');
div.classList.add('egg');
  img.src = 'prof.png';
  span.textContent = name.value;
  p.textContent = txtv;
 document.getElementsByTagName('body')[0].appendChild(div);
 div.appendChild(span);
 div.appendChild(img);
 div.appendChild(p);
      
 writeUserData(name.value, message, time);
      
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
    let dataz =   Object.values(data)[0];

    if(Object.values(dataz)[2] != name.value && Object.values(dataz)[3] == null){


  var div = document.createElement('div');
var span = document.createElement('span');
var img = document.createElement('img');
var p = document.createElement('p');
div.classList.add('container');
div.classList.add('egg');
img.src = 'prof.png';
      span.textContent = Object.values(dataz)[2];
      p.textContent = Object.values(dataz)[0];
     document.getElementsByTagName('body')[0].appendChild(div);
     div.appendChild(span);
     div.appendChild(img);
     div.appendChild(p);
            
} });

   
