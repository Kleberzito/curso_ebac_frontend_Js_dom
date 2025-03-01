# Formulário de Validação

Este projeto contém um formulário HTML com dois campos numéricos e um botão de submissão. O formulário é validado usando JavaScript para garantir que o número B seja maior que o número A.

## Estrutura do Projeto

- `index.html`: Contém a estrutura HTML do formulário.
- `style.css`: Contém os estilos CSS para o formulário.
- `script.js`: Contém a lógica de validação em JavaScript.

## Funcionalidades

- **Campos de Entrada**: Dois campos numéricos para os valores A e B.
- **Validação**: O formulário só será considerado válido se o valor de B for maior que o valor de A.
- **Mensagens de Validação**: Exibe uma mensagem apropriada dependendo se a validação foi bem-sucedida ou não.

## Estrutura HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validação de Formulário</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="form-container">
        <h1>Bem-vindo!</h1>
        <form id="meuFormulario">
            <label for="valorA">Valor A:</label>
            <input type="number" id="valorA" name="valorA" placeholder="Digite um valor numérico">
            <label for="valorB">Valor B:</label>
            <input type="number" id="valorB" name="valorB" placeholder="Digite um valor numérico">
            <input type="submit" value="Enviar">
        </form>
        <div class="footer">
            &copy; 2024 Kleber G. da Silva
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## Estilos CSS

```css
/* Reset CSS */ 
* { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}
.form-container {
    width: 300px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.form-container h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}
.form-container label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}
.form-container input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;    
    border: 1px solid #ccc;
    border-radius: 4px;
}
.form-container input[type="submit"] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
}
.form-container input[type="submit"]:hover {
    background-color: #0056b3;
}
.footer {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: #777;
}

```

## Lógica de Validação em JavaScript

```js
document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var valorA = parseFloat(document.getElementById('valorA').value);
    var valorB = parseFloat(document.getElementById('valorB').value);

    if (valorB > valorA) {
        alert('Número B é maior que o número A.');
    } else {
        alert('Número B deve ser maior que o número A.');
    }
});

```

## Como Usar

1. Clone o repositório:

  ```bash
  git clone https://github.com/Kleberzito/curso_ebac_frontend_Js_dom.git
  ```

2. Navegue até o diretório do projeto:

  ```bash
  cd curso_ebac_frontend_Js_dom
  ```

3. Abra o arquivo index.html no seu navegador para ver o formulário em ação.
