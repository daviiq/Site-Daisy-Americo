  window.items = itens;
document.addEventListener("DOMContentLoaded",()=>{

    console.log("Items carregados:", items);
  
    if(!window.items){
      alert("ERRO: array items não encontrado");
      return;
    }
  
    function rota(cat){
      if(cat==="quadro") return "quadros/quadro.html";
      if(cat==="caneca") return "canecas/caneca.html";
      return "outro.html";
    }
  
    function criar(tipo){
  
      const box=document.getElementById("carousel-"+tipo);
  
      const lista=items.filter(i=>
        tipo==="destaque" ? i.destaque : i.desconto>0
      );
  
      console.log(tipo, lista);
  
      if(!lista.length){
        box.innerHTML="<p style='text-align:center'>Sem produtos</p>";
        return;
      }
  
      let idx=0;
  
      lista.forEach(item=>{
  
        const card=document.createElement("div");
        card.className="card cardsel";
  
        const valor=item.desconto
          ? item.valor-item.desconto
          : item.valor;
  
        card.innerHTML=`
          <img src="${item.imagem}">
          <h3>${item.nome}</h3>
          ${item.desconto?`<div class="old">R$ ${item.valor}</div>`:""}
          <div class="price">R$ ${valor}</div>
        `;
  
        card.onclick=()=>{
          window.location.href=
            `${rota(item.categoria)}?id=${item.id}`;
        };
  
        box.appendChild(card);
      });
  
      function render(){
  
        const cards=box.querySelectorAll(".cardsel");
  
        cards.forEach((c,i)=>{
  
          const p=i-idx;
  
          if(Math.abs(p)>1){
            c.style.opacity=0;
            return;
          }
  
          c.style.opacity=1;
  
          c.style.transform=
            `translateX(${p*260}px) translateZ(${p===0?0:-120}px) rotateY(${p*-20}deg)`;
        });
      }
  
      render();
  
      document
      .querySelectorAll(`[data-carousel="${tipo}"]`)
      .forEach(b=>{
  
        b.onclick=()=>{
  
          b.classList.contains("left")?idx--:idx++;
  
          if(idx<0) idx=lista.length-1;
          if(idx>=lista.length) idx=0;
  
          render();
        };
      });
  
      setInterval(()=>{
        idx++;
        if(idx>=lista.length) idx=0;
        render();
      },4000);
    }
  
    criar("destaque");
    criar("desconto");
  
  });