document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('meuFormulario');
    
    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o recarregamento da página
      
      // Pega os valores dos campos
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;
      
      // Mostra no console
      console.log("Mensagem enviada:");
      console.log("De:", email);
      console.log("Conteúdo:", mensagem);
      
      // Feedback visual para o usuário
      alert("Mensagem registrada no console!");
      
      // Opcional: Limpa o formulário após enviar
      formulario.reset();
    });
  });