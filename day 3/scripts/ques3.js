console.log("Question 3")

let mark = prompt("Enter your mark");
console.log(mark);
switch (mark) {
    case 100:
        console.log("Marks are 100 grade is A+");
        break;

    case 90:
        console.log("Marks are 90 grade is A");
        break;

    case 80:
        console.log("Marks are 80 grade is B+");
        break;

    case 70:
        console.log("Marks are 70 grade is B");
        break;
    default:
        console.log("Please Enter marks in multiple of 10");    

}