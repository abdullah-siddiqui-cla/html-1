// Get references to the HTML elements we’ll be interacting with
const button = document.getElementById('calculate');
const input = document.getElementsByTagName('input')[0];
const gradeArea = document.getElementById('grade');
const reset = document.getElementById('reset');
const gradeHeading = document.getElementsByTagName('h3')[0];

// Function to calculate grade based on the number provided
const calcGrade = (numbers) => {
  // Grade criteria:
  // > 90 -> A (green)
  // 80 - 90 -> B (yellow)
  // 70 - 80 -> C (brown)
  // 60 - 70 -> D (purple)
  // 50 - 60 -> F (red)

  let grade;

  if (numbers > 90) {
    grade = 'A';
  } else if (numbers > 80) {
    grade = 'B';
  } else if (numbers > 70) {
    grade = 'C';
  } else if (numbers > 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return grade;
}

// Function to handle the "Calculate" button click
const clickHandler = () => {
  // Convert input value (string) into a number
  const number = parseInt(input.value);

  // Get grade letter by passing number to calcGrade function
  const grade = calcGrade(number);

  // Show grade area and heading (in case they were hidden)
  gradeArea.classList.remove('hidden');
  gradeHeading.classList.remove('hidden');

  // Create a new <p> element to display the grade
  const newP = document.createElement('p');

  // Add a CSS class (like 'a', 'b', etc.) for color styling
  newP.classList.add(grade.toLowerCase());

  // Set the text inside <p> to the grade letter
  newP.innerText = grade;

  // Clear any previous grade inside the grade area
  gradeArea.innerHTML = '';

  // Add the new <p> element to the grade area
  gradeArea.appendChild(newP);
}

// When the "Calculate" button is clicked, run clickHandler
button.addEventListener('click', clickHandler);

// When the "Reset" button is clicked, clear everything
reset.addEventListener('click', () => {
  // Remove any grade content
  gradeArea.innerHTML = '';

  // Hide the grade area and heading again
  gradeArea.classList.add('hidden');
  gradeHeading.classList.add('hidden');

  // Reset input field to 0
  input.value = 0;
});
