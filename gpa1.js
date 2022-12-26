let section = document.querySelector("section");
let cal = document.querySelector("form button");
cal.addEventListener("click", (e) => {
  // prevent form from being submitted
  e.preventDefault();

  // get the input values
  let subject = document.querySelector(".subject").value;
  let credit = document.querySelector(".credit").value;
  let score = document.querySelector(".score").value;

  let Div = document.createElement("div");
  Div.classList.add("Div");
  let Subject = document.createElement("p");
  Subject.classList.add("Subject");
  Subject.innerText = subject + "（科目）";
  let Credit = document.createElement("p");
  Credit.classList.add("Credit");
  Credit.innerText = credit + "（學分）";
  let Score = document.createElement("p");
  Score.classList.add("Score");
  Score.innerText = score + "（成績）";
  Div.appendChild(Subject);
  Div.appendChild(Credit);
  Div.appendChild(Score);

  document.querySelector(".subject").value = ""; // CLEAR THE TEXT INPUT
  document.querySelector(".credit").value = "";
  document.querySelector(".score").value = "";
  section.appendChild(Div);

  // create an object
  let myTodo = {
    subject: subject,
    credit: credit,
    score: score,
  };

  // store data into an array of objects
  let myList = localStorage.getItem("list");
  if (myList == null) {
    localStorage.setItem("list", JSON.stringify([myTodo]));
  } else {
    let myListArray = JSON.parse(myList);
    myListArray.push(myTodo);
    localStorage.setItem("list", JSON.stringify(myListArray));
  }
  console.log(JSON.parse(localStorage.getItem("list")));
});

loadData();

function loadData() {
  let myList = localStorage.getItem("list");
  if (myList !== null) {
    let myListArray = JSON.parse(myList);
    myListArray.forEach((item) => {
      let Div = document.createElement("div");
      Div.classList.add("Div");
      let Subject = document.createElement("p");
      Subject.classList.add("Subject");
      Subject.innerText = item.subject + "（科目）";
      let Credit = document.createElement("p");
      Credit.classList.add("Credit");
      Credit.innerText = item.credit + "（學分）";
      let Score = document.createElement("p");
      Score.classList.add("Score");
      Score.innerText = item.score + "（成績）";
      Div.appendChild(Subject);
      Div.appendChild(Credit);
      Div.appendChild(Score);

      section.appendChild(Div);
    });
  }
}

let GPA = document.querySelector("#GPA");

let calBtn = document.querySelector("div.cal button");
calBtn.addEventListener("click", () => {
  let sortedArray = JSON.parse(localStorage.getItem("list"));
  localStorage.setItem("list", JSON.stringify(sortedArray));
  let len = sortedArray.length;
  let totalCredit = 0;
  let SC = 0;
  let totalSC = 0;
  for (let i = 0; i < len; i++) {
    totalCredit += parseInt(sortedArray[i].credit);
    console.log(sortedArray[i].score.slice(14, 18));
    if (sortedArray[i].score == "F / below 65 -> 0.0") {
      SC = 0;
    } else {
      SC =
        parseFloat(sortedArray[i].score.slice(14, 18)) *
        parseFloat(sortedArray[i].credit);
    }

    totalSC += SC;
  }

  let gpa = document.createElement("p");
  gpa.innerText = Math.round((totalSC / totalCredit) * 100) / 100;
  GPA.appendChild(gpa);
});

let can = document.querySelector("div.can button");
can.addEventListener("click", () => {
  localStorage.clear();
  window.location = "gpa1.html";
});
