const plus = document.querySelector(".cart-qty-plus"),
 minus = document.querySelector(".cart-qty-minus"),
 num = document.querySelector(".text");

 let a =1;

 plus.addEventListener("click", ()=>{
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log(a)
 });
 minus.addEventListener("click", ()=>{
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log(a)
 });