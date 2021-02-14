
function printObject(object, body) {
  bodyG = body
  if (
    (!!object && object.constructor === Object) ||
    (!!object && object.constructor === Array)
  ) {
    Object.keys(object).forEach((item, index) => {
      if (
        (!!object[item] && object[item].constructor === Object) ||
        (!!object[item] && object[item].constructor === Array)
      ) {
        body  = bodyG+`${item} :  `;
      } else {
        body  = bodyG+`${item} : ${object[item]}<br>`;
      }
       
      printObject(object[item], body );   
    }); 
  }  
    
}     

let bodyG=''
let obj = { a: "test", b: { bkey1: "sub b1", bkey2: "sub b2" }, c:"TEST-C", d:{dKey:"d Val"},
f:{fs:{fsKey1:"fs1 Val",fsKey2:"fs2 Val"}} }; 


printObject(obj, '' )  ;
console.log(bodyG);
document.getElementById("app").innerHTML = bodyG;
