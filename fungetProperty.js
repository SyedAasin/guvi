function getProperty(obj, key){
if(obj.hasOwnProperty(key))
{
return obj[key];
}
else
{
return;
}
}
obj={name:"SyedAasin"}
var a = getProperty(obj,"name");
console.log(a);