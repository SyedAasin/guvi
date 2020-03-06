function removeProperty(obj, a){
    let x = obj;
    delete x[a];
    return x;
}
let obj={firstname:"aasin",Secondname:"syed"};
var a= removeProperty(obj,'firstname');
console.log(a);