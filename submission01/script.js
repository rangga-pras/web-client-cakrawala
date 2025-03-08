//task01 
function FindRectangleArea(width, height) {
    return width * height;
}
console.log("Area Of Rectangle:", FindRectangleArea(5, 3));

//task02
function CalculateTheCircle(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;  
    return { diameter, circumference, area };
}
console.log("Circle Result:", CalculateTheCircle(5));

//task03
function FindAngleOfTriangle (angle1, angle2) {
    return 180 - (angle1 + angle2);
}
console.log("The Third Angle:", FindAngleOfTriangle(80, 65));

//task04
function CalculateDiffDays (date1, date2) {
    let day1 = new Date(date1);
    let day2 = new Date(date2);
    let Different = Math.abs(day2 - day1) / (1000 * 3600 * 24);
    return Different;
}
console.log("Difference in Days Beetwen Dates:", CalculateDiffDays("2024-03-18", "2024-03-21"));

//task05
function GetInitial (name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
}
console.log("Initial Of The Name:", GetInitial("Muhammad Rangga Prasetya"));