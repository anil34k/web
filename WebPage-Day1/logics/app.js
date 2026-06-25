const btn = document.getElementById('menu');
const btnclose = document.getElementById('close');
btn.onclick = () => {
    const links = document.getElementById('link');
    btnclose.style.display = 'flex';
    btn.style.display = 'none';
    links.style.display = 'flex';
    links.style.flexDirection = 'column';
}
btnclose.onclick = () => {
    const links = document.getElementById('link');
    btnclose.style.display = 'none';
    links.style.display = 'none';
    links.style.flexDirection = 'row'
    btn.style.display = 'flex';
}

// Display categrories
let navbar=document.querySelector('nav');
const categrories=[
    {title:"Grocery",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJcHUd1HpTSVEwMJgyEG3RTB7rGJhu5Fp_w&s"},
    {title:"Mobile",image:"https://etimg.etb2bimg.com/photo/98913352.cms"},
    {title:"Cloth",image:"https://img.magnific.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740&q=80"},
    {title:"Toys",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2-NlQAF9spMTvybSrx7zuUMtwyCWNDYu6A&s"},
]
categrories.map((ele)=>{
    navbar.innerHTML+=`
    <div class=category-item>   
        <img src=${ele.image} alt="">
        <h3>${ele.title}</h3>
    </div>
    `
})