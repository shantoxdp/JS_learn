// function name(firstName, lastName, gender){
//     var output;

//     if (gender ==='male'){
//         output ='Mr. ' + firstName + ' ' + lastName;
//     }
//     else if (gender ==='female'){

//         output = 'Mrs. ' + firstName + ' ' + lastName;
//     }
//     return output;

// }

// var fullName = name('Shanto','Rahman', 'male');
// console.log(fullName);

function exmple(){
 return{
    name: 'Shanto',
    skill: ['jave','javascript'],
    print: function(){
        console.log(this.name,this.skill);
    }
  }
}
var obj = exmple();
obj.print();
