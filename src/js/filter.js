function createCards(arrayCards){
    const cards = document.querySelector('.itens-lista')
    cards.innerHTML = ''

    for(let i = 0; i < arrayCards.length; i++){
        const li = document.createElement('li')
        li.classList.add('itens-bloco')

        const div = document.createElement('div')
        div.classList.add('itens-img')

        const img = document.createElement('img')
        img.src = arrayCards[i].img

        const informacao = document.createElement('div')
        informacao.classList.add('itens-info')
        
        const tag = document.createElement('span')
        tag.innerText = arrayCards[i].tag

        const h2 = document.createElement('h2')
        h2.innerText = arrayCards[i].titulo

        const p = document.createElement('P')
        p.innerText = arrayCards[i].descricao

        const preco = document.createElement('div')
        preco.classList.add('dinheiro')
        preco.innerText = arrayCards[i].preco

        const addCarrinho = document.createElement('div')
        addCarrinho.classList.add('carrinho')
        addCarrinho.innerText = arrayCards[i].addCarrinho

        div.appendChild(img)

        informacao.appendChild(tag)
        informacao.appendChild(h2)
        informacao.appendChild(p)
        informacao.appendChild(preco)
        informacao.appendChild(addCarrinho)
        
        li.appendChild(div)
        li.appendChild(informacao)

        cards.appendChild(li)
    }
}
createCards(data)

function createElements(event){
    const divBox = document.querySelector('.itens-carrinho')
    divBox.innerHTML = ''
    
    for(let i = 0; i < event.length; i++){

        const ul = document.createElement('ul')
        const li = document.createElement('li')
        li.classList.add('itens-no-carrinho')
        const divImg = document.createElement('div')
        divImg.classList.add('item-foto')
        const img = document.createElement('img')
        img.src = data[i].img
        const divInfo = document.createElement('div')
        divInfo.classList.add('info-item')
        const h3 = document.createElement('h3')
        h3.innerText = data[i].titulo
        const divPreco = document.createElement('div')
        divPreco.classList.add('item-preco')
        divPreco.innerText = data[i].preco
        const divRemove = document.createElement('div')
        divRemove.classList.add('remove')
        divRemove.innerText = 'Remover Produto'
        
        divImg.appendChild(img)
        
        divInfo.appendChild(h3)
        divInfo.appendChild(divPreco)
        divInfo.appendChild(divRemove)
        
        li.appendChild(divImg)
        li.appendChild(divInfo)
        
        ul.appendChild(li)
        
        divBox.appendChild(ul)
    }
}

function filtrandoVitrine(event){
    const newData = [];
    const item = event.target
    const arrayItens = document.querySelectorAll('.item-nav')

    if(item.dataset.tag === 'Todos'){
        createCards(data)
    }else{
        for(let i = 0; i < data.length; i++){
            if(data[i].tag.indexOf(item.dataset.tag) !== -1){
                newData.push(data[i])
            }
        }
        createCards(newData)
    }
    for(let i = 0; i < arrayItens.length; i++){
        arrayItens[i].classList.remove('active')
    }
    item.classList.add('active')
}

function findItem(){
    const inputValue = document.getElementById('inputSrc')
    const newData = []
    for(let i = 0; i < data.length; i++){
        if(data[i].tag.indexOf(inputValue.value) !== -1){
            newData.push(data[i])
        }
    }
    createCards(newData)
}

const botaoPesquisar = document.getElementById('btnFind')
botaoPesquisar.addEventListener('click', findItem)

const addCarrinho = document.querySelector('.carrinho')
addCarrinho.addEventListener('click', createElements()) 

const listItem = document.querySelector('.listaNav')
listItem.addEventListener('click', filtrandoVitrine)