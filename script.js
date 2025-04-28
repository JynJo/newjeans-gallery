const steps = document.querySelectorAll(".step");
const options = document.querySelectorAll(".images > div");
const name = document.querySelector(".name");
const galerry = document.querySelector(".galerry");
let currentStep = 0;
let selectedMember;

const memberDetails = [
  {
    id: "minji",
    name: "Minji",
    full_name: "Kim Minji",
    birthdate: "2004-05-07",
    position: "Leader, Vocalist, Dancer",
    nationality: "Korean",
    images: 3,
  },
  {
    id: "hanni",
    name: "Hanni",
    full_name: "Phạm Ngọc Hân",
    birthdate: "2004-10-06",
    position: "Vocalist, Dancer",
    nationality: "Vietnamese-Australian",
    images: 0,
  },
  {
    id: "danielle",
    name: "Danielle",
    full_name: "Danielle Marsh (Mo Ji-hye)",
    birthdate: "2005-04-11",
    position: "Vocalist, Dancer",
    nationality: "Korean-Australian",
    images:0,
  },
  {
    id: "haerin",
    name: "Haerin",
    full_name: "Kang Haerin",
    birthdate: "2006-05-15",
    position: "Vocalist",
    nationality: "Korean",
    images:0,
  },
  {
    id: "hyein",
    name: "Hyein",
    full_name: "Lee Hyein",
    birthdate: "2008-04-21",
    position: "Vocalist, Maknae",
    nationality: "Korean",
    images:0,

  },
];

function showGalerry(index) {
  steps.forEach((step, i) => step.classList.toggle("active", i == index));

  galerry.innerHTML = "";

  memberDetails.forEach((detail, i) => {
    if (detail.id == selectedMember) {
      for (let i = 0; i < detail.images; i++) {
        var img = document.createElement("img");
        img.src = `./images/gallery/${selectedMember}/${i}.jpg`;
        img.width = 200;
        img.classList.add('rounded-md')
        img.classList.add('shadow-sm')
        galerry.appendChild(img);
      }
    }
  });
}

function validateForm() {
  const inputs = steps[currentStep].querySelectorAll("input");

  if (!selectedMember) {
    return alert("Please choose a member");
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
    showGalerry(currentStep);
  }
});

// document.getElementById("next2").addEventListener("click", () => {
//   if (validateForm()) {
//     currentStep++;
//     showGalerry(currentStep);
//   }
// });

// document.getElementById("next3").addEventListener("click", () => {
//   if (validateForm()) {
//     currentStep++;
//     showGalerry(currentStep);
//   }
// });

document.getElementById("prev1").addEventListener("click", () => {
  currentStep--;
  showGalerry(currentStep);
});

// document.getElementById("prev2").addEventListener("click", () => {
//   currentStep--;
//   showGalerry(currentStep);
// });

// document.getElementById("prev3").addEventListener("click", () => {
//   currentStep--;
//   showGalerry(currentStep);
// });

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((opt) =>
      opt.classList.remove("border-4", "border-pink-400", "rounded-md")
    );

    option.classList.add("border-4", "border-pink-400", "rounded-sm");

    selectedMember = option.id;
    name.innerHTML = selectedMember;
  });
});
