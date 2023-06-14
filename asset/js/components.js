let btnSend = document.querySelector("#btn-sender")
btnSend.addEventListener("click", ()=>{
    if(btnSend.classList.item(0) === "bi-send"){
        sendMessage()
        document.querySelector("#btn-sender").classList.remove("bi-send")
        document.querySelector("#btn-sender").classList.add("bi-mic")
    }
    
})  

function textareaHeight (){
    var texts = document.querySelector("textarea")
    if(texts.value === ""){
        document.querySelector("#btn-sender").classList.remove("bi-send")
        document.querySelector("#btn-sender").classList.add("bi-mic")
    }else{
        document.querySelector("#btn-sender").classList.remove("bi-mic")
        document.querySelector("#btn-sender").classList.add("bi-send")
    }

    
}
// before bot reply
function BotTypes (times){
    let article = document.createElement("article")
    article.setAttribute("class", "types")
    article.innerHTML = 
    `
    <div></div>
    <div></div>
    <div></div>
    `
    document.querySelector(".body").appendChild(article)
    setInterval(()=>{
        article.style.display = "none"
    }, times)
    document.querySelector(".body").scrollTop = document.querySelector(".body").scrollHeight
}
// UserMessages
function UserMessages (context,image,audio,categorie, values,time){
    let article = document.createElement("article")
    article.setAttribute("class", "user")
    let context2, image2, audio2, borders
    if( image === ""){ image2 = "none"}else{ image2 = "block"}
    if( audio === ""){ audio2 = "none"}else{ audio2 = "block"}
    if( context === ""){ context2 = "none"}else{ context2 = "block"}
    if(context.length > 30){ borders = "20px 20px 0 20px" } else{  borders = "50px 50px 0 50px" }
    article.innerHTML = 
    `
    <small>${time}</small>
    <div style="display: ${image2}" class="user-item">
        <img src="${image}" >
        <p> 
            ${categorie} <br>
            $ ${values}
        </p>
    </div>
    <span style="display: ${context2}; border-radius:${borders}" >${context}</span>
    <audio src="${audio}" style="display: ${audio2}" controls></audio>
    `
    document.querySelector(".body").appendChild(article)
    document.querySelector(".body").scrollTop = document.querySelector(".body").scrollHeight
}
// bots reply
function BotMessages (context,image,audio,time){
    let article = document.createElement("article")
    article.setAttribute("class", "boot")
    let context2, image2, audio2, borders
    if( image === ""){ image2 = "none"}else{ image2 = "block"}
    if( audio === ""){ audio2 = "none"}else{ audio2 = "block"}
    if( context === ""){ context2 = "none"}else{ context2 = "block"}
    if(context.length > 30){ borders = "20px 20px 20px 0" } else{  borders = "50px 50px 50px 0" }
    article.innerHTML = 
    `
    <div class="profil"></div>
    <img src="${image}" style="display: ${image2}">
    <span style="display: ${context2}; border-radius:${borders}" >${context}</span>
    <audio src="${audio}" style="display: ${audio2}" controls></audio>
    <small>${time}</small>
    `
    document.querySelector(".body").appendChild(article)
    document.querySelector(".body").scrollTop = document.querySelector(".body").scrollHeight
}
// returns list menus
function BotList (){
    let article = document.createElement("div")
    article.classList.add("lists")
    article.innerHTML = 
    `
    <button class="bi-journal-text" onclick="getButtonContext(this)">Lista de produtos</button>
    <button class="bi-telephone" onclick="getButtonContext(this)">Contactos</button>
    <button class="bi-info-circle" onclick="getButtonContext(this)">Sobre nós</button>
    <span>Escolhe umas das opções clicando ... </span>
    `

    document.querySelector(".body").appendChild(article)
    document.querySelector(".body").scrollTop = document.querySelector(".body").scrollHeight
}
function BotListMenu (categorie, values, image, id){
    let article = document.createElement("div")
    article.setAttribute("class", "menu-list")
    article.innerHTML = 
    `
    <div class="cards">
    <img src="${image}" alt=""> <br>
    <p style="color: rgb(2, 2, 2); font-weight: 600;"> ${categorie} <br>
        <i class="bi-star-fill"></i> <i class="bi-star-fill"></i>
        <i class="bi-star-fill"></i> <i class="bi-star"></i>
    </p>
    <p style="color: orange; font-weight: 600;"> $ <strong>${values}</strong></p>
    <button class="bi-cart-fill" id="${id}" onclick="getItems(this)"> + carrinho</button>
    </div>
    `

    document.querySelector(".body").appendChild(article)
    document.querySelector(".body").scrollTop = document.querySelector(".body").scrollHeight
}
function Carrinhos (categorie, values, image, id){
    let article = document.createElement("article")
    article.setAttribute("class", "boot")
    article.innerHTML = 
    `
    <div class="profil"></div>
    <div class="carrinhos">
        <p>Vamos finalizar a sua compra</p>
        <img src="${image}" alt="">
        <p>Modelos: ${categorie}</p>
        <p id="values">$ ${values}</p> 
        <strong>Quant</strong>
        <input type="text" onchange="Calculator(this)"  value="1" min="1"> 
        <strong>Num</strong> <input type="text" value="32" min="25"> <br>
        <div class="pagem">
            <input type="text" placeholder="Nome completo"> <br>
            <input type="text" placeholder="Número"> <br>
            <input type="email" placeholder="Email"> <br>
            <input type="text" placeholder="CEP"> <br>
            <input type="text" placeholder="ZIP CODE">
        </div>
        <button onclick="Solicitars(this)" >Solicitar</button>
    </div>
    `

    document.querySelector(".body").appendChild(article)
    document.querySelector(".body").scrollTop = document.querySelector(".body").scrollHeight
}
function Calculator (val){
    var values = document.querySelector("#values").innerHTML
    var prece = parseInt(values.slice(2)) * parseInt(val.value)
    console.log(prece)
    document.querySelector("#values").innerHTML = `$ `+ prece +".00"
}
