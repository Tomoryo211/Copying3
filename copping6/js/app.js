// toggleとはクラスを付けたり消したりできる


const icon = document.querySelector("#icon");

icon.onclick = () => {
    // ライト・ダークモード設定
    document.body.classList.toggle("dark_mode");
    if(document.body.classList.contains("dark_mode")){
        icon.textContent = "🌞";
    }else {
        icon.textContent = "🌝"; // ライトモード → 月アイコン
    }
};