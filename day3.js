let section = document.querySelector("section");
let cal = document.querySelector("form button");
cal.addEventListener("click", (e) => {
  // prevent form from being submitted
  e.preventDefault();

  // get the input values
  let Name = document.querySelector(".Name").value;
  let date = document.querySelector(".date").value;

  if (Name === "" || date === "") {
    alert("請輸入事件名稱及日期");
    return;
  }

  let result = Calculate(date);
  console.log(result);

  let text = document.createElement("p");
  text.innerHTML = date + "  " + Name + " 距今 " + result + " 天 ";
  section.appendChild(text);
});

let Calculate = function (date) {
  let strDate, Date1, Date2, result;
  strDate = date.split("/");
  Date1 = new Date(strDate[1] + "/" + strDate[2] + "/" + strDate[0]);
  var Today = new Date();
  Date2 = new Date(
    Today.getFullYear() + "/" + (Today.getMonth() + 1) + "/" + Today.getDate()
  );

  result = parseInt(Math.abs(Date1 - Date2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
  return result;
};

// var Today = new Date();
// document.write(
//   "今天日期是 " +
//     Today.getFullYear() +
//     " 年 " +
//     (Today.getMonth() + 1) +
//     " 月 " +
//     Today.getDate() +
//     " 日"
// );
