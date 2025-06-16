
const cards = document.querySelectorAll(".card");
// 監視する要素を設定することでコールバック関数が呼び出される
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        // 監視対象(card)が画面に見えたら(isIntersecting)、
        // activeを初めて追加して外すことを繰り返す
        entry.target.classList.toggle("active",entry.isIntersecting);
        // 監視対象(card)が画面に見えたら(isIntersecting)監視を止める(unobserve)
        // if(entry.isIntersecting){
        //     observer.unobserve(entry.target);
        // }
    });
});
// observeメソッドで引数に入れた要素を監視することができる
cards.forEach((card) => {
    observer.observe(card);
});
