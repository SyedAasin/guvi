function addProperty(obj, key){
obj[key]="aasin";
return obj;
}
obj={}
var a = addProperty(obj,"name");
console.log(a);