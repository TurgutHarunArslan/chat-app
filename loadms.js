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
              
      }else if(Object.values(valz)[2] == 'turgut'){
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

} {
setTimeout(() => {
  listener();
}, 500);
}}}); 
