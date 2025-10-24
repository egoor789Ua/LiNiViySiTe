//alert(`hello`);
//alert(`0=V:C;8 NECCCCCCCCCCC`);
function temp(t1,t2,t3){console.log((t1+t2+t3)/3);}
temp(11,10,9);
//function hello(name){alert(`hello+name`);}
function convert(uah,rate){
return uah*rate}
const valut=prompt(`що переводимо в гривні:злоті,євро,долари,Японскі єни`);
let course;
if (valut=='долар'){course=36;}
else if(valut==`євро`){course=48;}
   else if (valut==`злоті`){course=11.52}
else if (valut=='Японскі єни'){course=0.28}else
alert(`нажаль не можу знайти цю валюту`);
let UserUah=+prompt(`Скільки обмінюємо`);
let result=convert(UserUah,course);
   result= Math.floor(result);
alert(`У вас буде ${result} гривень`);
