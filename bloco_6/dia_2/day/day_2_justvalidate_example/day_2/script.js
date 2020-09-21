// const states = ["AC", "AL", "AP", "AM", "BA", "CE", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO", "DF"]

// const validateButton = document.getElementById("validate")
// const clearButton = document.getElementById("clear")

// const houseChoice = document.getElementById("house")
// const apChoice = document.getElementById("apartment")

// houseChoice.addEventListener("click", function () {
//   if (apChoice.classList.contains("line-content")) {
//     apChoice.classList.remove("line-content")
//   }
//   if (houseChoice.classList.contains("line-content") === false) {
//     houseChoice.classList.add("line-content")
//   }
// })

// apChoice.addEventListener("click", function () {
//   if (houseChoice.classList.contains("line-content")) {
//     houseChoice.classList.remove("line-content")
//   }
//   if (apChoice.classList.contains("line-content") === false) {
//     apChoice.classList.add("line-content")
//   }
// })

// loadStates(states)

// clearButton.addEventListener("click", function () {
//   const cvContent = document.getElementsByClassName("line-content")
//   const resumeContent = document.querySelector("#resume-content")
//   const lineResumeContent = document.querySelectorAll(".line-resume-content")
//   for (let index = 0; index < cvContent.length; index += 1) {
//     cvContent[index].value = ""
//   }
//   if (lineResumeContent.length > 0)
//     for (let content = 0; content < lineResumeContent.length; content += 1) {
//       resumeContent.removeChild(lineResumeContent[content])
//     }
// })

// validateButton.addEventListener("click", function (event) {
//   event.preventDefault()
//   console.log('hello')
// })

// function loadStates(states) {
//   const stateCombo = document.getElementById("state");
//   if (stateCombo.childElementCount < 2) {
//     for (let item = 0; item < states.length; item += 1) {
//       let state = document.createElement("option");
//       state.innerText = states[item];
//       state.value = states[item];
//       stateCombo.appendChild(state);
//     }
//   }
// }

// function outPutInformation() {
//   const formInputElement = document.getElementsByClassName("line-content")
//   const labelContent = document.getElementsByClassName("label-content")
//   for (let index = 0; index < formInputElement.length; index += 1) {
//     let elementLabel = labelContent[index].innerText
//     let elementValue = formInputElement[index].value
//     createDivElement(elementLabel, elementValue)
//   }
// }

// function createDivElement(key, value) {
//   const resumeContent = document.getElementById('resume-content')
//   let newDiv = document.createElement('div')
//   newDiv.innerText = `${key} ${value}`
//   newDiv.className = "line-resume-content"
//   resumeContent.appendChild(newDiv)
// }


new window.JustValidate('.cv-content', {
  rules: {
    name: {
      required: true,
    },
    text: {
      required: true,
    },
    city: {
      required: true
    },
    cargo: {
      required: true
    },
  },
  messages: {
  },
  focusWrongField: true,
  submitHandler: function (form, values, ajax) {
    console.log(values)
  },
  invalidFormCallback: function (errors) {
    console.log(errors);
  },
});

// new window.JustValidate('.js-form', {
//   rules: {
//     checkbox2: {
//       required: true
//     },
//     radio: {
//       required: true
//     },
//     email: {
//       required: true,
//       email: true,
//       // remote: {
//       //   url: 'https://just-validate-api.herokuapp.com/check-correct',
//       //   sendParam: 'email',
//       //   successAnswer: 'OK',
//       //   method: 'GET',
//       // }
//     },
//     login: {
//       required: true,
//       // remote: {
//       //   url: 'https://just-validate-api.herokuapp.com/check-correct',
//       //   sendParam: 'login',
//       //   successAnswer: 'OK',
//       //   method: 'GET'
//       // }
//     },
//     password: {
//       strength: {
//         custom: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]',
//       },
//     },
//   },
//   messages: {
//     // login: {
//     //   remote: 'Login already exists'
//     // }
//   },
//   focusWrongField: true,
//   submitHandler: function (form, values, ajax) {
//     console.log(values)
//     // ajax({
//     //   url: 'https://just-validate-api.herokuapp.com/submit',
//     //   method: 'POST',
//     //   data: values,
//     //   async: true,
//     //   callback: (response) => {
//     //     console.log(response);
//     //   }
//     // });
//   },
//   invalidFormCallback: function (errors) {
//     console.log(errors);
//   },
// });