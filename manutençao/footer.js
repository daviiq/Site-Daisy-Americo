// footer.js
const footerHTML = `
<footer style="background:#222;color:#fff;padding:2rem;text-align:center;">
  <p>© 2026 Daisy Américo. Todos os direitos reservados.</p>
  <p>Contato: +55 (48) 98832-0641</p>
  <p>
    Criado por 
    <a href="https://site-curriculo.pages.dev/" target="_blank" style="color:#0a66c2; text-decoration:none;">
      Igor Rodrigues da Silva
    </a> 
    e 
    <a href="https://www.linkedin.com" target="_blank" style="color:#0a66c2; text-decoration:none;">
      Davi Israel Quirino
    </a>
  </p>
</footer>
`;

// Insere o footer no final da página
document.body.insertAdjacentHTML('beforeend', footerHTML);
