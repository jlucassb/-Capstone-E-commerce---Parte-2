

const titulo = document.createElement('h1')
titulo.innerText = 'Weartake'

const listaNav = document.createElement('ul')
listaNav.classList.add('listaNav')

const listaLi1 = document.createElement('li')
listaLi1.setAttribute('data-tag', 'Todos')
listaLi1.classList.add('item-nav')
listaLi1.classList.add('active')
listaLi1.innerText = 'Todos'
const listaLi2 = document.createElement('li')
listaLi2.setAttribute('data-tag', 'Acessórios')
listaLi2.classList.add('item-nav')
listaLi2.innerText = 'Acessórios'
const listaLi3 = document.createElement('li')
listaLi3.setAttribute('data-tag', 'Calçados')
listaLi3.classList.add('item-nav')
listaLi3.innerText = 'Calçados'
const listaLi4 = document.createElement('li')
listaLi4.setAttribute('data-tag', 'Camisetas')
listaLi4.classList.add('item-nav')
listaLi4.innerText = 'Camisetas'

listaNav.appendChild(listaLi1)
listaNav.appendChild(listaLi2)
listaNav.appendChild(listaLi3)
listaNav.appendChild(listaLi4)

document.querySelector('header').appendChild(titulo)
document.querySelector('header').appendChild(listaNav)


const caixaCompra = document.createElement('div')
caixaCompra.classList.add('item-pesquisar')

const inputPesquisa = document.createElement('input')
inputPesquisa.setAttribute('id', 'inputSrc')
inputPesquisa.placeholder = 'Digite aqui sua pesquisa'

const botao = document.createElement('button')
botao.setAttribute('id', 'btnFind')
botao.innerText = 'Pesquisar'

const boxShop = document.createElement('ul')
boxShop.classList.add('compras')

const shopList = document.createElement('li')

const tituloShop = document.createElement('h2')
tituloShop.innerText = 'Carrinho de compras'

const itensShop = document.createElement('div')
itensShop.classList.add('itens-carrinho')

const emptyShop = document.createElement('h3')
emptyShop.classList.add('empty')
emptyShop.innerText = 'Carrinho vázio'

const emptyShop2 = document.createElement('p')
emptyShop2.innerText = 'Adicionar itens'

caixaCompra.appendChild(inputPesquisa)
caixaCompra.appendChild(botao)

itensShop.appendChild(emptyShop)
itensShop.appendChild(emptyShop2)

shopList.appendChild(tituloShop)
shopList.appendChild(itensShop)

boxShop.appendChild(shopList)

document.querySelector('.bloco-direita').appendChild(caixaCompra)
document.querySelector('.bloco-direita').appendChild(boxShop)

const data = [
    {
        img: './src/imgs/Jacket.png',
        tag: 'Camisetas',
        titulo: 'Jaqueta preta',
        descricao: 'Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...',
        preco: 'R$ 100.00',
        addCarrinho: 'Adicionar ao carrinho',
    },
    {
        img: './src/imgs/blackhat.png',
        tag: 'Acessórios',
        titulo: 'Toca preta',
        descricao: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...',
        preco: 'R$ 100.00',
        addCarrinho: 'Adicionar ao carrinho',
    },
    {
        img: './src/imgs/Mask.png',
        tag: 'Acessórios',
        titulo: 'Máscara',
        descricao: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...',
        preco: 'R$ 40.00',
        addCarrinho: 'Adicionar ao carrinho',
    },
    {
        img: './src/imgs/TShirt-Black.png',
        tag: 'Camisetas',
        titulo: 'Camiseta preta',
        descricao: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...',
        preco: 'R$ 100.00',
        addCarrinho: 'Adicionar ao carrinho',
    },
    {
        img: './src/imgs/TShirt-White.png',
        tag: 'Camisetas',
        titulo: 'Camiseta branca',
        descricao: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...',
        preco: 'R$ 100.00',
        addCarrinho: 'Adicionar ao carrinho',
    },
    {
        img: './src/imgs/mockup.png',
        tag: 'Camisetas',
        titulo: 'Jaqueta embalável',
        descricao: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
        preco: 'R$ 100.00',
        addCarrinho: 'Adicionar ao carrinho',
    },  
]


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
        addCarrinho.addEventListener('click', verificarClick) 
        console.log(verificarClick)

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

function encontrarItem(){
    const inputValue = document.getElementById('inputSrc')
    const newData = []
    for(let i = 0; i < data.length; i++){
        if(data[i].tag.indexOf(inputValue.value) !== -1){
            newData.push(data[i])
        }
    }
    createCards(newData)
}

function verificarClick(event){
    return criandoOsItensNoCarrinho(data[i])
}

/*function verificarClick(event){
    const button = document.querySelectorAll('.carrinho')
    const item = event.target
    const newData = []

    for(let i = 0; i < data.length; i++){
        if(data[i].addCarrinho.indexOf(button) !== -1){
            newData.push(data[i])
        }
    }
    criandoOsItensNoCarrinho(newData)
}
*/
function criandoOsItensNoCarrinho(array){
    const divBox = document.querySelector('.itens-carrinho')
    divBox.innerHTML = ''
    
    for(let i = 0; i < array.length; i++){
        const ul = document.createElement('ul')
        
        const li = document.createElement('li')
        li.classList.add('itens-no-carrinho')
        
        const divImg = document.createElement('div')
        divImg.classList.add('item-foto')
        
        const img = document.createElement('img')
        img.src = array[i].img
        
        const divInfo = document.createElement('div')
        divInfo.classList.add('info-item')
        
        const h3 = document.createElement('h3')
        h3.innerText = array[i].titulo
        
        const divPreco = document.createElement('div')
        divPreco.classList.add('item-preco')
        divPreco.innerText = array[i].preco
        
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


function soma(){
    const sumBox = document.querySelector('.bloco-direita')
    const box = document.createElement('div')
    box.setAttribute('id', 'box')
    const P = document.createElement('p')
    P.classList.add('Quantidade')
    const p2 = document.createElement('p')
    p2.classList.add('Total')
    P.innerText = 'Quantidade:'
    p2.innerText = 'Total:'
    
    box.appendChild(P)
    box.appendChild(p2)
    sumBox.appendChild(box)
}

const botaoPesquisar = document.getElementById('btnFind')
botaoPesquisar.addEventListener('click', encontrarItem)


const listItem = document.querySelector('.listaNav')
listItem.addEventListener('click', filtrandoVitrine)