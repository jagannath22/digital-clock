
setInterval(updatetime,1000);
function updatetime(){
  k=new Date();
  console.log(k);
  a.innerHTML=k.getHours();
  b.innerHTML=k.getMinutes();
  c.innerHTML=k.getSeconds();
  e.innerHTML=k.getFullYear();
  l=k.getMonth();
  if(l==0){
      p='JAN';
  }
  else if(l==1){
      p='FEB';
  }
  else if(l==2){
      p='MAR';
  }
  else if(l==3){
      p='APR';
  }
  else if(l==4){
      p='MAY';
  }
  else if(l==5){
      p='JUN';
  }
  else if(l==6){
      p='JUL';
  }
  else if(l==7){
      p='AUG';
  }
  else if(l==8){
      p='SEP';
  }
  else if(l==9){
      p='OCT';
  }
  else if(l==10){
      p='NOV';
  }
  else if(l==11){
      p='DEC';
  }
  h.innerHTML=p;
  j.innerHTML=k.getDate();
 
}
