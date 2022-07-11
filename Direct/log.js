import {database} from "./firebase.js";
import {getDatabase, ref, onValue, set, query, equalTo, orderByChild, child, get} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
var logged = null;
let submit = document.querySelector('.signupbtn');
let name = document.getElementById('name');
let password = document.getElementById('password');
let who = document.getElementById('who');

function writeUserData(name, password) {

    set(ref(database, 'users/' + name), {

      username: name,
      password: password
    });
  }

let datal;
let usz;
let usp;
let datas;
let db = getDatabase();
let  datalog;
  // const listener =  onValue(ref(databasem, 'users/'), (snapshot) => {
  //   datas = snapshot.val();
  //  for(let i = 0; i <  Object.values(datas).length; i++){
  //   datal = Object.values(datas).length;
  //   datalog = Object.values(datas)[i];
  //    usz = Object.values(datalog)[1];
  //    usp = Object.values(datalog)[0];
     
  //    };
  //  } ,);

submit.onclick = function(event, logged) {
  event.preventDefault();
function GetAllDataOnce(){
const dbref = ref(db);
const user = query(ref(db, "users"), orderByChild("username"), equalTo(name.value));

 get(user).then((snapshot) => {
   if (snapshot.exists()) {
    let datan = Object.values(snapshot.val())[0];
    let usz = Object.values(datan)[1];
    let usp = Object.values(datan)[0];

 
    if (name.value.length > 0 || password.length > 0) {
    
 if (usz == name.value && usp == password.value) {
document.getElementById('1').src = 'main.js';
logged = true
       console.log('giriş yapdiniz');
     document.querySelector('form').style.display = 'none';
     document.getElementById('idst').remove();
           }else{
         if(datal === datal &&  logged == false){
           alert('isminiz veya şifreniz yanliş, yada şifreniz kötü');
 
          }
        }
       }else{alert('isim veya şifre 0 kelime olamaz ')}

  } else {
    logged = true;
  document.getElementById('2').src = "loadms.js";
     console.log('hesabiniz oluşturulmuştur');
    writeUserData(name.value, password.value);
     document.querySelector('form').style.display = 'none';
     document.getElementById('idst').remove();
   }
 });

}
 GetAllDataOnce();
}  




export{logged,name,password,who};