# Guia de Manutenção Técnica

Este documento é **exclusivamente técnico**, voltado para quem vai **manter, atualizar ou corrigir** o código do site. Não descreve propósito, marketing ou conteúdo artístico.

---

## 1. Estrutura do Projeto

```
/dayse
  ├─ index.html
  ├─ sobre.html
  ├─ caneca.html
  ├─ quadro.html
  ├─ outros.html
  ├─ encomende.html
  │
  ├─ assets/
  │   └─ imagens (.png, .jpeg)
  │
  ├─ styles/
  │   └─ CSS separados por página
  │
  └─ scripts/
      ├─ outro.js
      ├─ outros.js
      ├─ quadro.js
      ├─ quadros.js
      └─ canecas.js
```

**Regra geral:**

* Cada página HTML possui **um CSS próprio**
* Cada categoria de item possui **um JS específico**

---

## 2. Onde ficam os dados dos itens (parte crítica)

Os itens exibidos (quadros, canecas, outros) são controlados via **JavaScript**, não por HTML fixo.

Normalmente existe um **array global de itens**, com estrutura parecida com:

```js
{
  nome: "",
  imagem: "assets/arquivo.png",
  categoria: "quadro | caneca | outro",
  disponivel: true | false
}
```

### Manutenção comum

| Tarefa                   | Onde mexer              |
| ------------------------ | ----------------------- |
| Adicionar novo item      | Arquivo JS da categoria |
| Trocar imagem            | Pasta `assets/` + JS    |
| Marcar como indisponível | `disponivel: false`     |
| Remover item             | Apagar objeto do array  |

**Atenção:**

* O nome do arquivo da imagem deve bater exatamente com o caminho usado no JS
* Não há fallback se a imagem não existir

---

## 3. Scripts JavaScript (funcionamento)

### Padrão usado

Todos os scripts seguem a mesma lógica:

1. Filtram os itens por categoria
2. Criam cards dinamicamente com `document.createElement`
3. Inserem no container via `appendChild`

Exemplo de risco comum:

* Se o `id` do container no HTML mudar, o JS quebra

---

## 4. HTML (o que **não** mexer sem cuidado)

### Elementos sensíveis

* `id` usados pelos scripts
* Ordem dos scripts no final da página

Regra:

> Nunca renomear `id` ou `class` sem procurar no JS e CSS primeiro

---

## 5. CSS (manutenção segura)

Cada página tem seu próprio CSS.

### Boas práticas

* Ajustes visuais pequenos: ok
* Reaproveitar classes entre páginas: **não recomendado** sem revisão geral

Arquivos grandes = risco de efeito colateral

---

## 6. Adicionar uma nova categoria (avançado)

Checklist:

1. Criar novo HTML
2. Criar novo CSS
3. Criar novo JS
4. Adicionar categoria no array de itens
5. Garantir filtro correto no JS

Se qualquer etapa faltar, a página fica vazia.

---

## 7. Dependências externas

* Pico.css via CDN

Risco:

* Se o CDN cair ou mudar versão, layout pode quebrar

Alternativa de manutenção:

* Baixar Pico.css localmente

---

## 8. Debug rápido

| Problema           | Possível causa              |
| ------------------ | --------------------------- |
| Página vazia       | Erro JS ou categoria errada |
| Imagem não aparece | Caminho incorreto           |
| Estilo sumiu       | CSS não carregou            |
| Console com erro   | `id` inexistente            |

Sempre abrir o **DevTools → Console** primeiro.

---

## 9. Deploy / Atualização

Site é **estático**.

Procedimento padrão:

1. Editar arquivos localmente
2. Testar abrindo o HTML no navegador
3. Subir tudo para o servidor (sem build)

---

## 10. Regra de ouro

> Mudou nome de arquivo, id ou pasta?
> Atualize **HTML + CSS + JS**

Nenhuma validação automática existe.

---

Fim do guia técnico.
