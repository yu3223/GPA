let section = document.querySelector("section");
let cal = document.querySelector("form button");
cal.addEventListener("click", (e) => {
  // prevent form from being submitted
  e.preventDefault();

  // get the input values
  let date1 = document.querySelector(".date1").value;
  let date2 = document.querySelector(".date2").value;

  if (date1 === "" || date2 === "") {
    alert("請輸入日期");
    return;
  }

  let result = Calculate(date1, date2);
  console.log(result);

  let text = document.createElement("p");
  text.innerHTML = date1 + " 與 " + date2 + " 相差 " + result + " 天 ";
  section.appendChild(text);
});

let Calculate = function (date1, date2) {
  let strDate, Date1, Date2, result;
  strDate = date1.split("/");
  Date1 = new Date(strDate[1] + "/" + strDate[2] + "/" + strDate[0]);
  strDate = date2.split("/");
  Date2 = new Date(strDate[1] + "/" + strDate[2] + "/" + strDate[0]);
  result = parseInt(Math.abs(Date1 - Date2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
  return result;
};
