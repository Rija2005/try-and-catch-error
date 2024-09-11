// //object,method,function..


// let person={
//     firstName:'Rija',
//     lastName:'Fatima',
//     age:19,
//     email:"123@gmail.com",
//     sayHello(){
//         console.log("Hello my name is  "+this.firstName+"  " +car.brand +"  "+car.model);//this is also a object
//     },

//     fullName:function(){
//         return this.age+" "+this.email

//     }
// }


// let car={
//     brand:'toyotta',
//     model:'lexas',

// }
// console.log(person);
// person.sayHello();//to get function log property
// console.log(person.fullName());

// //Object Constructor Function:
// var plan1 = {
//  name: "Basic",
//   price: 3.99,
// space: 100,
// transfer: 1000,
// pages: 10,
// };

// var plan2 = {
//     name: "Basic",
//      price: 3.99,
//    space: 100,
//    transfer: 1000,
//    pages: 10,
//    };
   
//    var plan3 = {
//     name: "Basic",
//      price: 3.99,
//    space: 100,
//    transfer: 1000,
//    pages: 10,
//    };//long way
   
//     function Student(name,age,gender,email) {
//         this.fullName=name
//         this.Age=age
//         this.Gender=gender
//         this.Email=email

//     } //pattern set
//     Student.prototype.nationality="pakistani"
//     let student1=new Student("Ali Raza","12","Male","ali@gmail.com")
//     console.log(student1);
//     let student2=new Student("Ahmed Raza","16","Male","ahmed@gmail.com")
//     console.log(student2);
//     let student3=new Student("shayan Raza","19","Male","sha@gmail.com")
//     console.log(student3);//pass the value,"new"keyword used to make property



// //if we forget to add somethin gthen we can do this

// student1.nationality=''



// function Patient(name,age, cnicNo,gender,disease,phoneno,address) {
//     this.fullName=name
//     this.Age= age
//     this.IdNo= cnicNo
//     this.Gender=gender
//     this.Disease=disease
//     this.PhoneNo=phoneno
//     this.Address=address
// }
// Patient.prototype.Drname="Dr.Irfan"//we can add any propert thourgh prototype method


// let patient1=new Patient("Saim khan","45","421012456788","Male", "Cancer","0332178945","North Nazimabad")
// console.log(patient1);

// let patient2=new Patient("asra shahid","30","421012456788", "Female","typhiod" ,"03321789459", "Malir")
// console.log(patient2);

// let patient3=new Patient("ali raza","15","421012456788", "Male","TB","0332178945","bufferzone")
// console.log(patient3);







// //chap74
// let man={
//     name:'john',
//     ages:30,

// }


// let name1="ages" in man
// console.log(name1);//true;as ages lies in man
  


// let name2="email" in man
// console.log(name2);//false;as email doesnot lies in man


//form validation;;class miss

//error handling ahd catch block
let a=+prompt("Enter a digit")
let b =+prompt("Enter a digit")
console.log("the sum of" +a+b);

function addition() {
    console.log("the sum of");
    
}//now it will show
console.log("hello world");
addition();//function not made it wil,give error
console.log("javascript chapters");


//try;;when we not function is not make.. try statement defines a code block to run (to try).

//The catch statement defines a code block to handle any error.
try{
    console.log("hello world");
Registration();
console.log("javascript chapters");
}
catch(err){
    console.log(err);
}

function greetWorld() { try {
    var greeting = "Hello world!"; aler(greeting);
    
  
    throw "syntax error"
}
    catch(err) { alert(err);
    
    
    
    
    
    }
}   
greetWorld() 
//mostly use in log in sign up...\



//throw it is custom error

function checkPassword() { try {
    var pass = document.getElementById("f1").value; if (pass.length < 8) {
    throw "Please enter at least 8 characters.";
    

    
    }
    if (pass.indexOf(" ") !== -1) {
    throw "No spaces in the password, please.";
    
    
    }
    var numberSomewhere = false;
    for (var i = 0; i < pass.length; i++) { if (isNaN(pass(i, i+1)) === false) {
    numberSomewhere = true; 
    break;
    }
}

    
    if (numberSomewhere === false) { throw "Include at least 1 number.";
    

    }
    }
    
    
    catch(err) { alert(err);
    
    
    }
    }
    