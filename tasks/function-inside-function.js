let key=42;//it is intialization of key
function getsecreatecode(value)//it is intialization of function
{
    let keygenerator=function(){
        let key=12//it is new key value
        console.log("in keygenerator:",key)
        return key
    }//it is function inside the function 
    let code =value *keygenerator();//it is logic part
    console.log("ingenerate code:",key)
    return code
}
let secreatcode=getsecreatecode(2)//it is function calling