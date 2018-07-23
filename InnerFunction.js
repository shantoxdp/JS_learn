
function outer(){

    function inner(){

/* Inner can't access outer funtion but Outer function 
can access inner function.
*/

        console.log('I am Inner function');

    }

    inner();
    console.log('I am Outer function');

}

outer();


// example of inner function


function add(a,b){

    function sum(){
        return a+b;
    }
    function sub(){
        return a-b;

    }
    function times(){
        return a*b;

    }
    function div(){
        return a/b;
    }
    return sum() + sub() + times() + div();
}

var result = add(10,5);
console.log(result);
