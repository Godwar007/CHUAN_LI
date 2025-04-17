
about();
frist_view();
let about_even = document.querySelector(".about_button");
let bussiness_even = document.querySelector(".bussiness_button");
let photo_even = document.querySelector(".photo_button");
let QA_even = document.querySelector(".QA_button");
let contact_even = document.querySelector(".contact_button");
//設定監聽
about_even.addEventListener('click',about,false) 
bussiness_even.addEventListener('click',bussiness,false) 
photo_even.addEventListener('click',photo_change,false) 
QA_even.addEventListener('click',QA,false) 
// contact_even.addEventListener('click',function(){ alert("contact_even");},false) 
//******************* about function **********************************************************************
function about(){
  let home_page = document.querySelector("div.home");
      home_page.innerHTML = "";
  let add_tag = document.createElement("div");
      add_tag.setAttribute("class","about");
      home_page.appendChild(add_tag);
  let about_page = document.querySelector(".about");
      
  let home_text = "空間，不只是居住，而是生活的樣貌。"
      home_text = home_text + "<br>我們是一群熱愛設計與細節的室內裝修團隊，專注打造實用與美感兼具的生活空間。從風格規劃、平面配置、材質選擇，到細膩施工，每一步都為了實現你心中的理想居所。讓我們陪你一起，將家的藍圖變成真實風景。";
      home_text = home_text + "<br><br>我們深信，設計不該只是外表，更應該貼近生活的每一刻。";
      home_text = home_text +"<br>專業團隊擁有多年室內設計與裝修經驗，擅長住宅空間、舊屋翻新與小型商業空間改造。每個案子，我們都從「你的需求」出發，量身打造獨一無二的空間方案，確保機能、美感與預算取得完美平衡。";
      about_page.innerHTML = home_text;
      frist_view();
}
//************************  bussiness function ****************************************
function bussiness(){
  let home_page = document.querySelector("div.home");
      home_page.innerHTML = "";
  let add_tag = document.createElement("div");
      add_tag.setAttribute("class","bussiness");
      home_page.appendChild(add_tag);
  let business_page = document.querySelector(".bussiness");
  let home_text = "<ul>"
      home_text = home_text + "一條龍服務，讓你無後顧之憂：";
      home_text = home_text + "<li>&diams;&nbsp;空間設計規劃</li>";
      home_text = home_text + "<li>&diams;&nbsp;材質與色彩搭配建議</li>";
      home_text = home_text + "<li>&diams;&nbsp;居家/商業空間整體施工</li>";
      home_text = home_text + "<li>&diams;&nbsp;舊屋翻新與格局改善</li>";
      home_text = home_text + "<li>&diams;&nbsp;專業監工與完工驗收</li></ul>";
      home_text = home_text + "<ul>";
      home_text = home_text + "我們的承諾：";
      home_text = home_text + "<li>&diams;&nbsp;客製設計：依照你的生活習慣與美感量身打造。</li>";
      home_text = home_text + "<li>&diams;&nbsp;透明報價：清楚報價，施工過程無隱藏費用。</li>";
      home_text = home_text + "<li>&diams;&nbsp;細節把關：嚴格施工品質控管，讓你住得安心又放心。</li>";
      home_text = home_text + "<li>&diams;&nbsp;後續服務：完工後持續提供諮詢與維修建議。</li></ul>";
      business_page.innerHTML = home_text;
  frist_view();
}
let page_project = 11;   //設定資料夾數量

//********************* photo_change function ****************************
function photo_change(e){ 
    let home_page = document.querySelector("div.home");
        home_page.innerHTML = "";
        // home_page.setAttribute('class','photo');

    for (i = 1; i <= page_project; i++){
        let tag = "Photo_" + i;          //設定class編號
        var img_path = "./Photo/" + tag +"/" + tag +"_1.jpg" //圖檔路徑
        let  add_tag = document.querySelector(".home");  //搜尋class PHOTO層
        let newImage = document.createElement("img"); //增加img元素
        newImage.setAttribute("class",tag);      //變更img屬性 定義class名稱
        newImage.setAttribute("src",img_path);   //變更img屬性  定義src圖檔路徑
        add_tag.appendChild(newImage);           //在PHOTO層下加入子圖層img  
       }
   //----------------進入photo頁面時檢查背景圖是否符合畫面大小,同第一次載入畫面 
   frist_view(); //呼叫函示
   //---------------------------------------------------------------------- 
   let data_file = document.querySelectorAll(".home img"); //抓取 class.PHOTO下所有img元素
   let data_file_len = data_file.length;        //計算元素數量
  //    console.log(e);
    for (i = 0; i <= data_file_len-1; i++){
        let e_class = data_file[i].getAttribute('class');  //抓取每個class的名稱
        let e_name = document.querySelector("."+ e_class) //抓取相對應class的資料
        e_name.addEventListener('click', function(){
          localStorage.setItem('number',e_class);
          let page_url = "./photo_page.html";
          window.open(page_url,"photo");//若不定義網頁名稱會一直開新視窗
        },false)
        
          //page_name.innerHTML = e_class;
          //對抓取到的元素監聽,採按下監聽,

                  //false: 使用冒泡方式處理事件 事件觸發的內層元素開始，逐層往外觸發事件。
                          //trun :捕獲是指從最外層的元素開始，逐層往內觸發事件；
      }
 }   
 //************************************************************************
 //*********************  first_view function *****************************
function frist_view(){
  let home_view = document.querySelector("div.home");   //抓取home 文字和圖片區塊的螢幕大小
  let back_view = document.querySelector(".back_img");  //抓抓body背景圖區塊螢幕大小
  if (back_view.clientHeight < 800){back_view.style.height = 800 + "px"}
  if (back_view.clientHeight <= home_view.clientHeight){
    reportWindowSize();
  }
}
//************************************************************************
//------------------第一次登陸網頁時背景圖高度變更 -----------------------
  frist_view(); //呼叫函示
//----------------------畫面如果縮放背景圖跟著變更------------------------
window.onresize = reportWindowSize;  //監聽windowa視窗 如有變更呼叫 reportWindowSize函式庫
//***************** reportWindowsSize ************************************
function reportWindowSize(){
  let home_view = document.querySelector("div.home");   //抓取home 文字和圖片區塊的螢幕大小
  let back_view = document.querySelector(".back_img");  //抓抓body背景圖區塊螢幕大小
  console.log(home_view.clientHeight);
  console.log(back_view.clientHeight);
  let view =home_view.clientHeight;
  if(home_view.clientHeight > back_view.clientHeight){
  back_view.style.height = (view + 100)+ "px";}
  if (back_view.clientHeight > home_view.clientHeight && home_view.clientHeight > 800){
    back_view.style.height = (view + 100)+ "px";}
  }
//************************************************************************
//let a = document.querySelector("div.home"); 讀取home的元素
// console.log(a.clientHeight);讀取當前元素的高度
// console.log(a.clientWidth);讀取當前元素的寬度

//*********************QA function ****************************************
function QA(){
   let home_page = document.querySelector("div.home");
       home_page.innerHTML = "";
       let new_tag = document.createElement("div");
           new_tag.setAttribute("class","ps");
           home_page.appendChild(new_tag);
       let  add_tag = document.querySelector(".ps");  //搜尋class PHOTO層
        let newImage = document.createElement("img"); //增加img元素
        let img_path = "./image/back1.jpg"
        newImage.setAttribute("class","QA_img");      //變更img屬性 定義class名稱
        newImage.setAttribute("src",img_path);   //變更img屬性  定義src圖檔路徑
        add_tag.appendChild(newImage);           //在PHOTO層下加入子圖層img  
        let img_view = document.querySelector("div.home img");
        if (window.screen.width > 500){
            img_view.style.width = 800 + "px";
            img_view.style.height = 417 + "px";
           }
           if (window.screen.width <= 500){
            img_view.style.width = 280 + "px";
            img_view.style.height = 140 + "px";
           }  
        // window.onresize = img_size;
        // function img_size(){
        //    let img_width = document.documentElement.clientWidth;
        //    let img_height = document.documentElement.clientHeight;
        //    let img_viewsize = document.querySelector("div.home img");
        //    console.log(img_width);
        //    console.log(img_height);
        //    if (img_width < 1200){img_viewsize.style.width = 600 + "px"};
        //    if (img_width < 900){img_viewsize.style.width = 400 + "px"};
        //    if (img_width < 600){img_viewsize.style.width = 200 + "px"};
        //    img_viewsize.style.height = (img_height / 3) + "px";
        // }
        
        img_view.style.transform = "none";
        img_view.style.cursor ="default";
        frist_view();      
}
