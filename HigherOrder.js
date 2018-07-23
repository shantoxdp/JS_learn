function caller (){
    return function(name){
        return 'Caller Calling you '+name;

    }
}

var x= caller();
var y= x('Shanto');
y;
var z= x('Rahman');
z;

//another example

var a = caller()('Sol Khan');
a;
