let students=[

    {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    
    {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    
    {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    
    {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    
    {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    
    {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    
    {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    
    {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    
    {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    
    ]

    if (a>b) {
    console.log("a b-den boyukdur");
    } else if (a===b){ 
        console.log("beraber");
    } else {
 console.log("a b-den kicikdir");
 }




 let yeniarray =[];
for (let i = 0; i < students.length; i++) {
    if (i %2===0) {
       yeniarray.push(students[i]);
    }
 }
 console.log(yeniarray);




 for (let i = 0; i < students.length; i++) {
    if (students[i].id%2===1) {
console.log(students[i].name);
   }
 }




 let olderStudents=[];
 for (let i = 0; i < students.length; i++) {
 if (students[i].age>20) {
    olderStudents.push(students[i]);
  }
 }
  console.log(olderStudents);




  let highStudents=[];
 for (let i = 0; i < students.length; i++) {
  if (students[i].id%2=== 0 && students[i].grade>=90) {
    highStudents.push(students[i]);
  }
 }
  console.log(highStudents);




  let topStudents=[];
 for (let i = 0; i < students.length; i++) {
  if (students[i].grade=== 100 ||students[i].grade===95) {
    topStudents.push(students[i].name);
  }
}
  console.log(topStudents);
