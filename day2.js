let section = document.querySelector("section");
let cal = document.querySelector("form button");
cal.addEventListener("click", (e) => {
  // prevent form from being submitted
  e.preventDefault();

  // get the input values
  let date1 = document.querySelector(".date1").value;
  let day = document.querySelector(".day").value;

  if (date1 === "" || day === "") {
    alert("請輸入日期和天數");
    return;
  }

  let result = Calculate(date1, day);
  console.log(result);

  let text = document.createElement("p");
  text.innerHTML = date1 + " 經過 " + day + " 天是 " + result;
  section.appendChild(text);
});

let Calculate = function (date1, day) {
  var dateTime = new Date(date1);
  dateTime = dateTime.setDate(dateTime.getDate() + parseInt(day));
  dateTime = new Date(dateTime);
  result = dateTime.toLocaleDateString();
  return result;
};
