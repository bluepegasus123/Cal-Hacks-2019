// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9TmIlRtVDewZwTgExXmWN_F2tQwze730",
  authDomain: "study-budy-finder-app.firebaseapp.com",
  databaseURL: "https://study-budy-finder-app.firebaseio.com",
  projectId: "study-budy-finder-app",
  storageBucket: "study-budy-finder-app.appspot.com",
  messagingSenderId: "211707898413",
  appId: "1:211707898413:web:a7c93fe0744f7f14b926a4",
  measurementId: "G-K327EBRVEE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Student input collection
var students = firebase.database().ref('students');


document.getElementById('student-form').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getInputVal('fName');
  var email = getInputVal('email');
  var resHallSelect = getInputVal('resHall');
  var resHall = resHallSelect.options[resHallSelect.selectedIndex].value;
  saveInfo(name, email, resHall);
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function addCourses(){
  var addCourseBtn = document.getElementById("courseBtn");
  var div = document.getElementById("course-code-div")
  div.appendChild(document.createTextNode("Course Code " + (i+1)));
  // Create an <input> element, set its type and name attributes
  var input = document.createElement("input");
  input.type = "text";
  input.name = "course" + i;
  div.appendChild(input);
  // Append a line break
  div.appendChild(document.createElement("br"));
  }

function saveInfo(name, email, resHall){
  var newStudentRef = studentsRef.push();
  newStudentRef.set({
    name: name,
    email: email,
    Residence_Hall: resHall
  })

}
}
