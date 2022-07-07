import {database} from "./firebase.js";
import {getDatabase, ref, onValue, child} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";



  let databasem = getDatabase();


  const listener =  onValue(ref(databasem, 'messages'), (snapshot) => {
  const datas = snapshot.val();
  for(let i = 0; i <  Object.values(datas).length; i++){
      let valz =  Object.values(datas)[i];
      Object.values(valz)[0];

      if(Object.values(valz)[2] == 'nazan'){

      
      var div = document.createElement('div');
      var span = document.createElement('span');
      var img = document.createElement('img');
      var p = document.createElement('p');
      div.classList.add('container');
        img.src = 'prof.png';
        span.textContent = Object.values(valz)[2];
        p.textContent = Object.values(valz)[0];
       document.getElementsByTagName('body')[0].appendChild(div);
       div.appendChild(span);
       div.appendChild(img);
       div.appendChild(p);
              
      }else if(Object.values(valz)[2] == 'turgut'){
        var div = document.createElement('div');
        var span = document.createElement('span');
        var img = document.createElement('img');
        var p = document.createElement('p');
        div.classList.add('container');
          img.src = 'prof.png';
          span.textContent = Object.values(valz)[2];
          p.textContent = Object.values(valz)[0];
         document.getElementsByTagName('body')[0].appendChild(div);
         div.appendChild(span);
         div.appendChild(img);
         div.appendChild(p);

} {
setTimeout(() => {
  listener();
}, 500);
}}}); 
