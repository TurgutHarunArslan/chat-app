import {database} from "./firebase.js";
import {ref, onValue, set, getDatabase, query, limitToLast} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
let randomnum = Math. floor((Math. random() * 1000000) + 1);
const db = getDatabase();
const txt = document.getElementById('tweet');
const btn = document.getElementById('TweetButton');
 let submit = document.querySelector('.signupbtn');
let name = document.getElementById('name');

submit.onclick = function(event) {
  event.preventDefault();
name = name.value;
document.querySelector('form').style.display = 'none';
document.getElementById('idst').remove();
}

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
  span.textContent = name;
  p.textContent = txtv;
 document.getElementsByTagName('body')[0].appendChild(div);
 div.appendChild(span);
 div.appendChild(img);
 div.appendChild(p);
      
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
    let dataz =   Object.values(data)[0];

    if(Object.values(dataz)[2] != name && Object.values(dataz)[3] == 'undefined'){


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

   export {name, submit};
   
