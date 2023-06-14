const _discts = (words)=>{
    var results = ""
    const keys = {
        "oi": "Olá, como estás?",
        "olá": "Olá como estás?",
        "bom dia": "Olá bom dia, como estás?",
        "boa tarde": "Olá boa tarde, como estás?",
        "boa noite": "Olá boa noite, como estás?",
        "oi bom dia": "Olá bom dia, como estás?",
        "oi boa tarde": "Olá boa tarde, como estás?",
        "oi boa noite": "Olá boa noite, como estás?",
        "olá bom dia": "Olá bom dia, como estás?",
        "olá boa tarde": "Olá boa tarde, como estás?",
        "olá boa noite": "Olá boa noite, como estás?",
        "bem e contigo?": "Também estou bem! Como posso ajudar?",
        "bem e voçê?": "Também estou bem! Como posso ajudar?",
        "bem e tu?": "Também estou bem! Como posso ajudar?",
        "bem e do seu lado?": "Também estou bem! Como posso ajudar?",
        "bem e consigo?": "Também estou bem! Como posso ajudar?",
        "estou bem e contigo?": "Também estou bem! Como posso ajudar?",
        "estou bem e voçê?": "Também estou bem! Como posso ajudar?",
        "estou bem e tu?": "Também estou bem! Como posso ajudar?",
        "estou bem e do seu lado?": "Também estou bem! Como posso ajudar?",
        "estou bem e consigo?": "Também estou bem! Como posso ajudar?",
        
        "sobre nós": "Lu-Butique! Uma loja de venda de ténis e distribuidoras! "+
        "Temos as melhores marcas de ténis e originais. Obtenha um par, por um preço acessível para todos "+
        "Estamos localizado em: Luanda, Huambo, Lubango e Zaíre.",

        "contactos": "Nossos contactos: <br> <br> "+
        "<i class='bi-telephone-fill'></i> +2444 947 344 147 <br>"+
        "<i class='bi-envelope-at-fill'></i> lucasveraz102000@gmail.com <br>"+
        "<i class='bi-facebook'></i> <a href='https://facebook.com/lveraz1'>Lukas Veraz</a> <br>"+
        "<i class='bi-whatsapp'></i> <a href='https://facebook.com/lveraz1'>Lukas Veraz</a>",

        "solicitar": "Obrigada por fazer a melhor escolha, e o seu pedido foi feito com sucesso! Entraremos encontacto "+
        "consigo assim possível. Obrigada!",

        "esta bem": "Okay sem problema!",
        "ok": "Okay", "okay": "Okay", "tudo bem": "Está bem!", "fx": "Okay fixe", "ok fx": "Está bem!"
    }

    results = keys[words]
    return {results}
}