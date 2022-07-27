document.addEventListener("click", (event) => {
  console.log("document was clicked!");

  // console.log(event);
  // console.log("target", event.target);
  // event.target is the DOM Node that triggered this event. It does not have to be the node that has the event
  console.log("currentTarget", event.currentTarget);
  // event.currentTarget is the node that owns this event
  console.log(this);
  // key word this returns the same value as event.currentTarget only when it is not inside the arrow function!!!
});

const toxicTim = document.getElementById("toxic-tim");
toxicTim.addEventListener("click", (event) => {
  console.log("Toxic Tim was clicked");
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.x, event.y);
});

// clicking titles
const titles = document.querySelectorAll(".doggo.fighter h1");
titles.forEach((node) => {
  node.addEventListener("click", () => {
    console.log("Doggo name was clicked");
  });
});

// console.log(document instanceof Node);
// console.log("a string" instanceof Node);

const teamSalmon = document.querySelector(".team.salmon");
teamSalmon.addEventListener("click", function (event) {
  console.log(this);
});

const allDoggos = document.querySelectorAll(".doggo.fighter");

allDoggos.forEach(doggoNode => {
  doggoNode.addEventListener("click", event => {
      const clickedElement = event.currentTarget;
      const rosterNode = clickedElement.closest(".roster");
      rosterNode.append(clickedElement);
  })
})

allDoggos.forEach((doggoNode) => {
  doggoNode.addEventListener("dblclick", (event) => {
    event.currentTarget.classList.toggle("inverted");
  });
  doggoNode.addEventListener("mousedown", (event) => {
    event.currentTarget.classList.add("flipped");
  });
  doggoNode.addEventListener("mouseup", (event) => {
    event.currentTarget.classList.remove("flipped");
  });
  doggoNode.addEventListener("mouseenter", (event) => {
    event.currentTarget.classList.add("inverted");
  });
  doggoNode.addEventListener("mouseleave", (event) => {
    event.currentTarget.classList.remove("inverted");
  });
});

const bottomDiv = document.createElement("div");
bottomDiv.style.position = "fixed";
bottomDiv.style.bottom = "0";
bottomDiv.style.backgroundColor = "white";
document.body.append(bottomDiv);

document.addEventListener("mousemove", (event) => {
  const position = `${event.x}, ${event.y}`;
  bottomDiv.innerText = position;
});

const keySound = new Audio("sounds/vintage-keyboard-1.wav");
const inputs = document.querySelectorAll("input");
inputs.forEach((inputNode) => {
  inputNode.addEventListener("input", (event) => {
    // keySound.play();
  });
});

const explosionSound = new Audio("sounds/small-explosion.wav");
const submitForm = document.querySelector("form");
submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // explosionSound.play();
});

const applicantPreview = document.querySelector("#applicant-preview")

const pictureInput = document.querySelector('input[name=picture-url]')
pictureInput.addEventListener("input", event => {
  const imageUrl = event.currentTarget.value
  applicantPreview.style.backgroundImage = `url(${imageUrl})`
})

// Shortcuts of the ninja
let lettersTyped = "panic"

document.addEventListener("keypress", event => {
  lettersTyped += event.key

  console.log(event.key);

  if (lettersTyped == "panic") {
    window.location.href = "https://google.ca"
  }
})

//Nyan Cat
document.addEventListener("keydown", function(event){
  console.log(event);
  const {
      currentTarget,
      target,
      altKey,
      shiftKey,
      metaKey,
      key
  } = event;

 

  if (altKey && shiftKey && keyCode === 73) {
      window.location.href = "http://nyan.cat";
  }
})

//Run Script
document.addEventListener("DOMContentLoaded", function(event){
  console.log("The page has loaded!");
})