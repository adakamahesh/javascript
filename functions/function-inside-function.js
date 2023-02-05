let add=function add(a,b)//it is function intialization
{
    console.log(a+5,b+2)//it is used to display output
}
let mul=function mul(a,b)//it is function intialization
{
    console.log(a*2,b*a)//it is used to display output
    add(a,b)//it is function calling inside the function
}
mul(3,3)//it is function calling