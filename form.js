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
}
