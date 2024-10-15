function criaCartao(categoria, pergunta, resposta) {
let container=document.getElementById('container')
let cartao = document.createElement(article)
cartao.className = 'cartao'


cartao.innerHTM = `
<div class="cartao__conteudo">
<h3 class="programacao">futsal</h3>
<div class="cartao__conteudo__pergunta">
   <p> Em que ano surgiu o futsal?</p>
</div>
<div class="cartao__conteudo__resposta">
   <p>  década de 1930.</p>
</div>
</div>

`
container.appendChild(cartao)
}