// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  

  var today = dayjs();console.log(today)
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'));

  //$(document).ready(function(){
    $("#butt").on("click", function() {
      event.preventDefault();
       var area = document.querySelector("#area").value;//console.log([area]) 
       
       localStorage.setItem("area", area );

  //var storedValue = localStorage.getItem("#area");console.log(storedValue)
     })
// });

 //var input = "#area"
//window.localStorage.getItem('#area');

//const container = $(".container");
function saveData(){
  
}



//localStorage.setItem("#area", input.value);
//         console.log(localStorage.getItem("#area"));

// const range = (start, end, step) => {
//   return Array.from(
//     Array.from(Array(Math.ceil((end - start) / step)).keys()),
//     (x) => start + x * step
//   );
// };

// const hoursOfTheDay = Array.from(new Array(24)).map((v, i) => {
 //  const text = moment().hour(i).format("h:00 A");
 //  const hour = moment().hour(i);
 // return { text, hour };
// });

function color(time) {
   return time.text === currentTime.text
     ? "bg-red-300"
     : time.hour < now
     ? "bg-gray-300"
     : "bg-green-200";
 }

// hoursOfTheDay.forEach((hr) => {
//   const grid = $(
//     `<form data-name="${hr.text}" class="grid grid-cols-12  border-gray-500 "></form>.`
//   );

//   const time = $(
//     `<div class="flex items-center justify-center col-span-2 h-16">${hr.text}</div>`
//   );

//   const textArea = $(
//     `<textarea name="${
//       hr.text
//     }" maxLength="50" style="resize: none; overflow: hidden;" class="col-span-8 h-16 p-6 ${color(
//       hr
//     )}">${store.getItem(hr.text) || ""}</textarea>`
//   );

//   textArea.keydown((e) => {
//     if (e.keyCode == 13 && !e.shiftKey) {
//       e.preventDefault();
//       return false;
//     }
//   });

//   const saveButton = $(
//     `<button type="submit" class="col-span-2 h-16 bg-indigo-500 text-white font-bold hover:bg-indigo-400 transition duration-500 ease-in-out"><i class="fas fa-save text-xl"></i></button>`
//   );

//   grid.submit((e) => {
//     e.preventDefault();

//     const value = $(`textarea[name="${hr.text}"]`).val();

//     store.setItem(hr.text, value);
//   });

//   grid.append(time);
//   grid.append(textArea);
//   grid.append(saveButton);

//   container.append(grid);
// //});