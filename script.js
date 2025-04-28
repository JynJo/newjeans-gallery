const steps = document.querySelectorAll(".step");
const options = document.querySelectorAll('.images > div')
const name = document.querySelector('.name')
let currentStep = 0;
let selectedMember;

function showForm(index) {
  steps.forEach((step, i) => step.classList.toggle("active", i == index));
}

function validateForm() {
  const inputs = steps[currentStep].querySelectorAll("input");


  if (!selectedMember) {
    return alert('Please choose a member')
  }

  for (let input of inputs) {
    if (!input.checkValidity()) {
      input.reportValidity();
      return false;
    }
  }

  return true;
}

document.getElementById("continue").addEventListener("click", () => {
  if (validateForm()) {
    currentStep++;
    showForm(currentStep);
  }
});


// document.getElementById("next2").addEventListener("click", () => {
//   if (validateForm()) {
//     currentStep++;
//     showForm(currentStep);
//   }
// });

// document.getElementById("next3").addEventListener("click", () => {
//   if (validateForm()) {
//     currentStep++;
//     showForm(currentStep);
//   }
// });


document.getElementById("prev1").addEventListener("click", () => {
  currentStep--;
  showForm(currentStep);
});

// document.getElementById("prev2").addEventListener("click", () => {
//   currentStep--;
//   showForm(currentStep);
// });

document.getElementById("prev3").addEventListener("click", () => {
  currentStep--;
  showForm(currentStep);
});


options.forEach((option) => {
  option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('border-4', 'border-pink-400', 'rounded-md'));

    option.classList.add('border-4', 'border-pink-400', 'rounded-sm');

    selectedMember = option.id
    name.innerHTML = selectedMember
    
  })
})