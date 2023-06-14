const def = [
    "Infezmente ainda não tenho resposta para esta pergunta!"+
    "Mas, podes me ajudar a responder-te melhor segundo a lista abaixo!",
    "As melhores marcas de calçados, com os melhores preços do mercado encontra-se aqui! "+
    "Conferi nossos calçados a partir de $10. Temos para si",
    "E a forma de Pagamento, aceitamos cartões de créditos, e na compra à vista  ganhas 15% de desconto"
]
const items = [
    {   
        id: 1,
        categorie: "Adidas",
        image: "../asset/img/adidas.png",
        values: "11.00"
    },
    {   
        id: 2,
        categorie: "Adidas",
        image: "../asset/img/adidas2.png",
        values: "13.00"
    },
    {
        id: 3,
        categorie: "Adidas",
        image: "../asset/img/adidas3.png",
        values: "15.00"
    },
    {
        id: 4,
        categorie: "Adidas",
        image: "../asset/img/adidas4.png",
        values: "9.00"
    },
    {
        id: 5,
        categorie: "Jordan",
        image: "../asset/img/jordan.png",
        values: "11.00"
    },
    {
        id: 6,
        categorie: "Jordan",
        image: "../asset/img/jordan2.png",
        values: "13.00"
    },
    {
        id: 7,
        categorie: "Jordan",
        image: "../asset/img/jordan3.png",
        values: "15.00"
    },
    {
        id: 8,
        categorie: "Jordan",
        image: "../asset/img/jordan4.png",
        values: "9.00"
    },
    {
        id: 9,
        categorie: "Nike",
        image: "../asset/img/nike.png",
        values: "15.00"
    },
    {
        id: 10,
        categorie: "Nike",
        image: "../asset/img/nike2.png",
        values: "9.00"
    },
    {
        id: 11,
        categorie: "Banlenciaga",
        image: "../asset/img/palenciaga.png",
        values: "15.00"
    },
    {
        id: 12,
        categorie: "Banlenciaga",
        image: "../asset/img/palenciaga2.png",
        values: "9.00"
    },
    {
        id: 13,
        categorie: "Puma",
        image: "../asset/img/puma-black.png",
        values: "15.00"
    },
    {
        id: 14,
        categorie: "Puma",
        image: "../asset/img/puma.png",
        values: "9.00"
    },
]




function sendMessage (){
    const time = new Date().toLocaleTimeString()
    var texts = document.querySelector("textarea")
    const bot = _discts(texts.value.toLocaleLowerCase())
     UserMessages(texts.value, "", "","","", time)
    if(bot.results === undefined){
        BotTypes(1800)
        setTimeout(()=>{  BotMessages(def[0], "", "", "just now ") }, 1900)
        setTimeout(() =>{ BotList() }, 3000)

    } else{
        BotTypes(1800)
        setTimeout(()=>{ 
            BotMessages(bot.results, "", "", "just now ")
        }, 1900)
    }
    texts.focus()
    texts.value = ""
    
}
function getButtonContext (context) {
    const time = new Date().toLocaleTimeString()
    UserMessages(context.innerHTML,"","","","",time)
    BotTypes(1800)
    const bot = _discts(context.innerHTML.toLocaleLowerCase())  
    console.log(bot.results)
    if(bot.results === undefined){
        if(context.innerHTML === "Lista de produtos"){
            setTimeout(()=>{ 
                BotMessages(def[1], "", "", "just now ") 
                items.map((ls)=>(BotListMenu(ls.categorie, ls.values, ls.image, ls.id)))
            }, 1900)
        }
    }else{
        setTimeout(()=>{ BotMessages(bot.results, "", "", "just now ") }, 1900)
    }
}
function getItems (id) {
    var ids = parseInt(id.id)
    var item = items.filter((item) => item.id === ids)[0]
    UserMessages("",item.image, "",item.categorie, item.values, "")
    BotTypes(1800)
    setTimeout(()=>{ Carrinhos(item.categorie, item.values, item.image, item.id)}, 2000)
}
function Solicitars (el){
    el.style.backgroundColor = "gray"
    el.style.color = "white"
    el.setAttribute("disabled","")
    UserMessages(el.innerHTML, "","","","","just now")
    BotTypes(1800)
    const bot = _discts(el.innerHTML.toLocaleLowerCase())
    setTimeout(()=>{BotMessages(bot.results,"","","just now")}, 2000)
}
