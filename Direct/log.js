import {database} from "./firebase.js";
import {getDatabase, ref, onValue, set, child} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
import {name, password, submit} from "./main.js";


function writeUserData(name, password) {

    set(ref(database, 'users/' + name), {

      username: name,
      password: password,
    });
  }

let datal;
let usz;
let usp;
let datas;
let databasem = getDatabase();
const listener =  onValue(ref(databasem, 'users/'), (snapshot) => {
 datas = snapshot.val();
for(let i = 0; i <  Object.values(datas).length; i++){
 datal = Object.values(datas).length;
var datalog = Object.values(datas)[i];
  usz = Object.values(datalog)[1];
  usp = Object.values(datalog)[0];



  };
} 

,);

submit.onclick = function(event) {
  event.preventDefault();
  if (name.value.length > 0 && password.value.length > 0) {
    
    if(usz != name.value && usp != password.value){
      console.log(usz,usp)
      if (datal === datal) {
        console.log(usz,usp)
    console.log('hesabiniz oluşturulmusutr');
    writeUserData(name.value, password.value);
    document.querySelector('form').style.display = 'none';
      }
    }else if (usz == name.value && usp == password.value) {
      console.log('giriş yapdiniz');
      document.querySelector('form').style.display = 'none';
      }else if(usz == name.value || usp !== password.value){
      if (datal === datal) {
        alert('isminiz veya şifreniz yanliş');
        location.reload();
      }
      }else{alert('kullandiginiz şifre baska bir hesaba ayittir')};
    }else{alert('isim veya şifre 0 kelime olamaz ')}
}
,)};