var questions = [//câu dễ
  {
    quest: "Nhân tố nào gây sự biến động kích thước quần thể?",
    ans1: "A. Mức sinh sản",
    ans2: "B. Mức tử vong",
    ans3: "C. Mức xuất cư và nhập cư",
    ans4: "D. Cả A B C"
  },
  {
    quest: "Khi môi trường sống không đồng nhất thường xuyên thay đổi, loại quần thể nào sau đây có khả năng thích nghi cao nhất?",
    ans1: "A. Quần thể có kích thước lớn và sinh sản hữu tính bằng tự phối",
    ans2: "B. Quần thể có kích thước lớn và sinh sản hữu tính bằng ngẫu phối",
    ans3: "C. Quần thể có kích thước nhỏ và sinh sản vô tính",
    ans4: "D. Quần thể có kích thước nhỏ và sinh sản hữu tính bằng ngẫu phối"
  },
  {
    quest: "Những yếu tố nào không ảnh hưởng tới kích thước quần thể?",
    ans1: "A. Tỉ lệ giới tính",
    ans2: "B. Sinh sản",
    ans3: "C. Tử vong",
    ans4: "D. Nhập cư và xuất cư"
  },
  {
    quest: "Nếu kích thước quần thể vượt quá kích thước tối đa thì đứa đến hậu quả gì?",
    ans1: "A. Phần lớn các cá thể bị chết do cạnh tranh gay gắt",
    ans2: "B. Quần thể bị phân chia thành hai",
    ans3: "C. Một số cá thể di cư ra khỏi quần thể",
    ans4: "D. Phân lớn cá thể bị chết do dịch bệnh"
  },
  {
    quest: "Kích thước của quần thể thay đổi không phụ thuộc vào yếu tố nào sau đây?",
    ans1: "A. Sức sinh sản",
    ans2: "B. Mức độ tử vong",
    ans3: "C. Cá thể nhập cư và xuất cư",
    ans4: "D. Tỉ lệ đực – cái"
  },
  {
    quest: "Kích thước của quần thể là?",
    ans1: "A. Số lượng cá thể hoặc khối lượng trong các cá thể của quần thể có trong khoảng không gian sống",
    ans2: "B. Khối lượng hoặc năng lượng tích luỹ trong các cá thể của quần thể có trong khoảng không gian sống",
    ans3: "C. Số lượng cá thể hoặc khối lượng hoặc năng lượng tích luỹ trong các cá thể trong khoảng không gian sống",
    ans4: "D. Số lượng cá thể hoặc năng lượng tích luỹ trong các cá thể của quần thể có trong khoảng không gian sống"
  },
  {
    quest: "Mật độ của quần thể là?",
    ans1: "A. Số lượng cá thể trung bình của quần thể được xác định trong một khoảng thời gian xác định nào đó",
    ans2: "B. Số lượng cá thể cao nhất ở một thời điểm xác định nào đó trong một đơn vị diện tích nào đó của quần thể",
    ans3: "C. Khối lượng sinh vật thấp nhất ở một thời điểm xác định trong một đơn vị thể tích của quần thể",
    ans4: "D. Số lượng cá thể có trên một đơn vị diện tích hay thể tích của quần thể"
  },
  {
    quest: "Một quần thể như thế nào là quần thể không sinh trưởng nhanh?",
    ans1: "A. Trong quần thể có nhiều cá thể ở tuổi trước sinh sản hơn cá thể sinh sản",
    ans2: "B. Trong quần thể có kiểu phân bố tập trung",
    ans3: "C. Quần thể gần đạt sức chứa tối đa",
    ans4: "D. Quần thể có nhiều cá thể ở tuổi sau sinh sản hơn cá thể sinh sản"
  },//câu tb
  {
    quest: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: ""
  },
  {
    quest: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: ""
  },
  {
    quest: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: ""
  },
  {
    quest: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: ""
  },
  {
    quest: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: ""
  }
 
]

var time;

function show(btn){
  var num = btn.id;
  var numLevel = num * 100;
  var numLevelString =  numLevel.toString();
  document.getElementById(numLevelString).remove();
  num--;
  var quest = questions[num].quest;
  var questPara = document.createElement('p');
  var questContent = document.createTextNode(quest);
  questPara.appendChild(questContent);
  var numInfo = (num +1) * 10000;
  var numInfoString = numInfo.toString();
  document.getElementById(numInfoString).appendChild(questPara);
  setTimeout(function(){
    document.getElementById(numInfoString).remove();
  },45000);

  var ans1 = questions[num].ans1;
  var ans2 = questions[num].ans2;
  var ans3 = questions[num].ans3;
  var ans4 = questions[num].ans4;
  document.getElementById("ans1").innerHTML = ans1;
  document.getElementById("ans2").innerHTML = ans2;
  document.getElementById("ans3").innerHTML = ans3;
  document.getElementById("ans4").innerHTML = ans4;

  time = 16;
  var countdown = setInterval(updatecountdown,1000);
  clearInterval(countdown);
}

function updatecountdown(){
  if (time > 0){
    time--;
    document.getElementById("timer").innerHTML = time;
  }
}
var countdown = setInterval(updatecountdown,1000);

var x1 = 0;
var x2 = 0;
var x3 = 0; 
var x4 = 0;

function add1(){
  var score1 = prompt("Scores ?") * 8;
  x1 = x1 + score1;
    const canvas = document.getElementById("canvas");
    const context1 = canvas.getContext("2d");
    context1.fillStyle = "#30e3ca";
    context1.fillRect(0,5,x1,25);
    document.getElementById("score1").innerHTML = x1/8;
}

function add2(){
  var score2 = prompt("Scores ?") * 8;
  x2 = x2 + score2;
  const canvas = document.getElementById("canvas");
  const context2 = canvas.getContext("2d");
  context2.fillStyle = "#faee1c";
  context2.fillRect(0,40,x2,25);
  document.getElementById("score2").innerHTML = x2/8;
}

function add3(){
  var score3 = prompt("Scores ?") * 8;
  x3 = x3 + score3;
  const canvas = document.getElementById("canvas");
  const context3 = canvas.getContext("2d");
  context3.fillStyle = "#ff1f5a";
  context3.fillRect(0,80,x3,25);
  document.getElementById("score3").innerHTML = x3/8;
}

function add4(){
  var score4 = prompt("Scores ?") * 8;
  x4 = x4 + score4;
  const canvas = document.getElementById("canvas");
  const context4 = canvas.getContext("2d");
  context4.fillStyle = "#9c1de7";
  context4.fillRect(0,120,x4,25);
  document.getElementById("score4").innerHTML = x4/8;
}

