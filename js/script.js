function Adicionar(){
   const produto = {
      nome: document.getElementById("prod_nome").value,
      marca: document.getElementById("prod_marca").value,
      preco: document.getElementById("prod_preco").value,
   }
   const prod_item = document.createElement("li")
   const prod_nome = document.createElement("h3")
   const prod_marca = document.createElement("h4")
   const prod_preco = document.createElement("p")
   prod_nome.innerHTML = produto.nome
   prod_marca.innerHTML = produto.marca;
   prod_preco.innerHTML = produto.preco;
   prod_item.appendChild(prod_nome);
   prod_item.appendChild(prod_marca);
   prod_item.appendChild(prod_preco);
   document.getElementById("lista_prod").appendChild(prod_item)
}