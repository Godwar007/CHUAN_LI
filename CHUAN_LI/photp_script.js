let page_sum = [33,137,22,15,13,52,25,21,83,15,12];//設定每個資料夾的圖檔數量
let page_path = localStorage.getItem('number');   //重記憶體抓取變數確認哪個資料夾被遠取
let img_show = document.querySelector("div.view");
let newImage = document.createElement("img"); //增加img元素
let img_path = "./Photo/" + page_path + "/" + page_path + "_1.jpg";
console.log(img_path);
newImage.setAttribute("src",img_path);   //變更img屬性  定義src圖檔路徑
img_show.appendChild(newImage);           //在PHOTO層下加入子圖層img
//img_show.innerHTML = page_path;

let page_index = page_path.slice(6);   //讀取路徑字串最後一個字判別所需陣列的索引
let sum = page_sum[page_index-1];       //讀取索引陣列的檔案數量
//console.log(page_index);
//console.log(sum);
let page_text = document.querySelector(".page_now");
page_text.innerHTML = "&nbsp&nbsp1&nbsp" + "&nbsp/&nbsp" + "&nbsp" + sum + "&nbsp&nbsp";
let i = 1;
function next(){
    if (i < sum){
        i = i + 1;
        img_path = "./Photo/" + page_path + "/" + page_path + "_" + i + ".jpg";
        console.log(img_path);
        newImage.setAttribute("src",img_path);
        newImage.innerHTML;
        page_text.innerHTML = "&nbsp&nbsp" + i + "&nbsp" + "&nbsp/&nbsp" + "&nbsp" + sum + "&nbsp&nbsp";
    }
}
function back(){
    if (i <= sum && i != 1){
        i = i - 1;
        img_path = "./Photo/" + page_path + "/" + page_path + "_" + i + ".jpg";
        console.log(img_path);
        newImage.setAttribute("src",img_path);
        newImage.innerHTML;
        page_text.innerHTML = "&nbsp&nbsp" + i + "&nbsp" + "&nbsp/&nbsp" + "&nbsp" + sum + "&nbsp&nbsp";
    }
}
