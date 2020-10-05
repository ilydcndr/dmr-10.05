/*
===============
Submit your answers where you see the question marks. See the example below:
===============
 */
// Question:
var a = null;
var b = {name: "Ahmet", role: "Front End Developer"}
console.log(a == null); // ?
console.log(b.name); // ?
console.log(b.id); // ?

// Your answer should be in this format:
var a = null;
var b = {name: "Ahmet", role: "Front End Developer"}
console.log(a == null); // true  (type: bool)
console.log(b.name); // "Ahmet" (type: string)
console.log(b.id); // undefined





/*
===============
Question: The difference between == and ===
===============
 */
(function () {
    console.log(1 == '1'); // true //type:bool
    console.log(1 === [1]); // false //type:bool
    console.log(1 == true); // true //type:bool
    console.log(0 == ''); // true //type:bool
    console.log(0 === '0'); // false //type:bool
    console.log(0 == false); // true //type:bool
})();

/*
===============
Question: Differences between a variable that is: null, undefined or undeclared
===============
 */
(function () {
    var foo;
    console.log(foo); // undefined
    console.log(foo === undefined); // true // type:bool
    console.log(typeof foo === 'undefined'); //true //type:bool

    console.log(foo == null); // true //type:bool

    function bar() {
    }

    var baz = bar();
    console.log(baz); // undefined
})();

/*
===============
Question: .map()
===============
 */
(function () {
    const a = [1, 2, 3];
    const doubled = a.map(num => {
        return num * 2;
    });
    console.log(doubled); // [2,4,6] //type:object
})();

/*
===============
Question: hoisting
===============
 */
(function () {
    console.log(foo); // undefined
    var foo = 1;
    console.log(foo); // 1 //type:number
})();
(function () {
    console.log(bar); // ref error
    let bar = 2;
    console.log(bar); // error olmasaydı 2//type:number
})();
(function () {
    console.log(foo); // fnc foo //type:fnc
    foo(); // FOOOO//type:string
    function foo() {
        console.log('FOOOOO');
    }

    console.log(foo); // fnc foo //type:fnc
})();
(function () {
    console.log(bar); // undefıned
    bar(); // ref error
    var bar = function () {
        console.log('BARRRR');
    };
    console.log(bar); // error olmasaydı bar fnc basar.
})();

/*
===============
Question: Iterate an array, uppercase and reverse the sorting
===============
 */
(function () {
    const names = ['mustafa', 'ahmet', 'mehmet'];
    const transformUppercaseAndReverse = function (names) {
        names.reverse()
        const upperCase=names.map((item)=>{
          return item.toUpperCase()
        })
       return upperCase
    }; 
    const result = transformUppercaseAndReverse(names);
    console.log(result);  // Expected output: ['MEHMET', 'AHMET', 'MUSTAFA']
})();

/*
===============
Question: Spread Operator
===============
 */
(function () {
    function addFiveToNumbers(...numbers) {
       const addfive=numbers.map((item)=>{
           return item+5
       })
       return addfive
    }

    const result = addFiveToNumbers(4, 5, 6, 7, 8, 9, 10);
    console.log(result) // Expected output: [9, 10, 11, 12, 13, 14, 15]
})();

/*
===============
Question: .filter()
===============
 */
(function () {
    const data = [
        {
            id: 1,
            name: "Lorem",
            department: "IT"
        },
        {
            id: 2,
            name: "Ipsum",
            department: "Marketing"
        },
        {
            id: 3,
            name: "Dolor",
            department: "Cargo"
        },
        {
            id: 4,
            name: "Adipiscing",
            department: "IT"
        }
    ];

    function showItUsersOnly(data) {
      const ıtUsers =data.filter((item)=>{
        return item.department==="IT"
      })
      return ıtUsers
    }

    const result = showItUsersOnly(data);
    console.log(result)
    /* Expected output:

        {
            id: 1,
            name: "Lorem",
            department: "IT"
        },
        {
            id: 4,
            name: "Adipiscing",
            department: "IT"
        }

    */
})();
