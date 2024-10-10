var stName = prompt("What is your name")
var stuName = document.getElementById("sn")
stuName.innerText = stName

var urdu = prompt("Your urdu marks")
var uMarks = document.getElementById("umarks")
uMarks.innerText = Number(urdu)

var eng = prompt("Your english marks")
var eMarks = document.getElementById("emarks")
eMarks.innerText = Number(eng)

var islam = prompt("Your islamiat marks")
var iMarks = document.getElementById("imarks")
iMarks.innerText = Number(islam)

var physics = prompt("Your physics marks")
var pMarks = document.getElementById("pmarks")
pMarks.innerText = Number(physics)

var chem = prompt("Your chemistry marks")
var cMarks = document.getElementById("cmarks")
cMarks.innerText = Number(chem)

var bio = prompt("Your biology marks")
var bMarks = document.getElementById("bmarks")
bMarks.innerText = Number(bio)

var maths = prompt("Your maths marks")
var mMarks = document.getElementById("mmarks")
mMarks.innerText = Number(maths)

var total = Number(urdu) + Number(eng) + Number(islam) + Number(physics) + Number(chem) + Number(bio) + Number(maths)
var tMarks = document.getElementById("tmarks")
tMarks.innerText = total

var percentage = total/550 * 100 + "%"
var percent = document.getElementById("per")
percent.innerText = percentage

if (urdu > 75) {
    uMarks.innerText = NaN
    tMarks.innerText = NaN
    percent.innerText = NaN
}
if (maths > 75) {
    mMarks.innerText = NaN
    tMarks.innerText = NaN
    percent.innerText = NaN
}
if (eng > 100) {
    eMarks.innerText = NaN
    tMarks.innerText = NaN
    percent.innerText = NaN
}
if (islam > 75) {
    iMarks.innerText = NaN
    tMarks.innerText = NaN
    percent.innerText = NaN
}
if (physics > 75) {
    pMarks.innerText = NaN
    tMarks.innerText = NaN
    percent.innerText = NaN
}
if (chem > 75) {
    cMarks.innerText = NaN
    tMarks.innerText = NaN
    percent.innerText = NaN
}
if (bio > 75) {
    bMarks.innerText = NaN
    tMarks.innerText = NaN
    percent.innerText = NaN
}
//var grade = document.getElementById("grd")
//if (Number(percentage) > 79) {
  //  grade.innerText = "A1"
//}
//else if (Number(percentage) > 69) {
   //  grade.innerText = "A"
// }
// else if (Number(percentage) > 59) {
   //  grade.innerText = "B"
// }
 // else if (Number(percentage) > 49) {
    // grade.innerText = "C"
// }
// else{
   //  grade.innerText = "Fail"
// }

// var scholarship = document.getElementById("ship")
// if (Number(percentage) > 79) {
   //  scholarship.innerText = "70%"
// }
// else if (Number(percentage) > 69) {
   //  scholarship.innerText = "40%"
// }
// else if (Number(percentage) > 59) {
   //  scholarship.innerText = "20%"
// }
// else if (Number(percentage) > 49) {
   //  scholarship.innerText = "0%"
// }
// else{
   //  scholarship.innerText = "0%"
// }