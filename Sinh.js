var questions = [
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

  var ans1 = questions[num].ans1;
  var ans2 = questions[num].ans2;
  var ans3 = questions[num].ans3;
  var ans4 = questions[num].ans4;
  var ans = document.creans1 + "\n" + ans2 + "\n" + ans3 + "\n" + ans4;
  var ansPara = document.createElement('p');
  var ansContent = document.createTextNode(ans);
  ansPara.appendChild(ansContent);
  document.getElementById().appendChild(ansPara);
  

  console.log(ans);

}