import {database} from "./firebase.js";
import {ref, onValue, set, getDatabase, query, limitToLast} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
let randomnum = Math. floor((Math. random() * 1000000) + 1);
const db = getDatabase();
const txt = document.getElementById('tweet');
const btn = document.getElementById('TweetButton');
   let name = prompt("What is your name?").toLocaleLowerCase();
if(name==='turgut' || name === 'nazan'){
}else{
window.close()
}

btn.onclick = function(){
  const d = new Date();
let time = d.getTime();
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
 writeUserData(name, message, time);
      
    }
    function writeUserData(name, message, time) {
      set(ref(database, 'messages/' + time +' ' + name), {
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
     var p = document.createElement('p');
     var img = document.createElement('img');
         div.classList.add('tweet2');
         div.classList.add('tweet');
            div.style = 'position: releative; display:flex; width: 500px; height: fit-content; margin-top:40px; margin-right:20px;';
            img.style = 'width:60px; height: 60px;';
            p.style = 'margin-left:10px; margin-top: 20px;  background-color: rgba(4, 195, 253, 0.801) !important; font-weight: bold; border-radius: 20px; text-align: center;';
             img.src = 'prof2.webp';
             p.textContent =   Object.values(dataz)[0];
            document.getElementsByTagName('body')[0].appendChild(div);
            div.appendChild(p);
            div.appendChild(img);
            console.log(Object.values(dataz)[0]);
}else if(Object.values(dataz)[2] == 'turgut' && name !== 'turgut'){
      var div = document.createElement('div');
      var p = document.createElement('p');
      var img = document.createElement('img');
          div.classList.add('tweet');
      
             div.style = 'position: releative; display:flex; width: 500px; height: fit-content; margin-top:40px; margin-left:20px;';
             img.style = 'width:60px; height: 60px;';
             p.style = 'margin-left:10px; margin-top: 20px;  background-color: rgb(15, 235, 15) !important; font-weight: bold; border-radius: 20px; text-align: center;';
              img.src = 'prof.png';
    
              p.textContent =   Object.values(dataz)[0];
             document.getElementsByTagName('body')[0].appendChild(div);
             div.appendChild(img);
             div.appendChild(p);
           } 
   });
