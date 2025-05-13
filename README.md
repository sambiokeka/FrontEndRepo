# FrontEndRepo

Bem-vindo(a) ao **FrontEndRepo**! Este repositório contém o front-end de um projeto que utiliza principalmente HTML e CSS. 

Feito por:<br>
- Erick Jooji (RM: 564482)<br>
- Luiz Dalboni (RM: 564189)<br>
- Matheus Tozarelli (RM: 563490)<br>
- Rafael Lorenzini (RM: 563643)

## Índice

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Contribuição](#contribuição)
- [Links Úteis](#links-úteis)
- [Efeitos Visuais](#efeitos-visuais)

## Descrição

O **FrontEndRepo** é um projeto de faculdade, da matéria de Front End. Ele foi desenvolvido com base no caso da vinheria do sr. Giulio, dono da **vinheria Agnello**, que após muita resistência decidiu entrar no mundo do e-commerce, seguindo os conselhos de sua filha Bianca.

## Tecnologias Utilizadas

Este projeto foi construído utilizando:

- **HTML** (63.4%)
- **CSS** (35.1%)
- **JS** (1.5%)

## Estrutura do Projeto

O projeto é dividido nas seguintes páginas:

1. **[Index.html]**: Página inicial do site, com informações gerais sobre a vinheria.
2. **[vinhos.html]**: Lista alguns vinhos oferecidos pela vinheria Agnello.
3. **[vinicola.html]**: Mostra as principais vinícolas parceiras da vinheria.
4. **[sobre_nos.html]**: Conta a história da vinheria em mais detalhes.
5. **[contatos.html]**: Permite que os usuários entrem em contato com a vinheria.

## Instalação

Para rodar este projeto localmente, siga as etapas abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/sambiokeka/FrontEndRepo.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd FrontEndRepo
   ```

3. Abra o arquivo `index.html` em seu navegador.

## Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Faça o push para a branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request neste repositório.

## Links Úteis

- [Repositório no GitHub](https://github.com/sambiokeka/FrontEndRepo)
- [GitHub Pages](https://sambiokeka.github.io/FrontEndRepo/)

## Efeitos Visuais

O projeto utiliza diversos efeitos visuais para melhorar a experiência do usuário. Estes incluem pseudo-classes, pseudo-elementos e animações.

### Pseudo-Classes
- `header .main-nav .nav-list li a:hover`: Altera a cor dos itens do cabeçalho ao passar o mouse.
- `footer .nav-list a:hover`: Altera a cor dos itens do rodapé ao passar o mouse.
- `.social-list a:hover img`: Aumenta o tamanho dos ícones do rodapé ao passar o mouse.
- `.containerBODY h1:first-child`: Customiza o título do rodapé em todas as páginas.
- `social-icons a:hover`: Move o ícone para cima quando o usuário passa o mouse.
- `.btn-submit:hover`: Escurece o botão de envio ao clicar.

### Pseudo-Elementos
- `::before` e `::after`: Usados para adicionar elementos decorativos, como linhas ou ícones, antes ou depois de títulos e textos importantes.

### Animações
1. **Animação de zoom suave em imagens da home**:
   ```css
   @keyframes scaleUp {
       from {
           transform: scale(1); 
       }
       to {
           transform: scale(1.05); 
       }
   }

   @keyframes scaleDown {
       from {
           transform: scale(1.05); 
       }
       to {
           transform: scale(1); 
       }
   }

   .img_border {
       transform: scale(1);
   }

   .conteudo_home .img_border.hovered {
       animation: scaleUp 0.5s ease-in-out forwards;
   }

   .conteudo_home .img_border.not-hovered {
       animation: scaleDown 0.5s ease-in-out forwards;
   }
   ```
   Permite que as imagens na página inicial aumentem de tamanho suavemente quando o usuário passa o mouse.

2. **Animação de vinhos na página de vinhos**:
   ```css
   @keyframes scaleUp {
       from {
           transform: scale(1); 
       }
       to {
           transform: scale(1.05); 
       }
   }

   @keyframes scaleDown {
       from {
           transform: scale(1.05); 
       }
       to {
           transform: scale(1); 
       }
   }

   .vinho-card {
       transform: scale(1);
   }

   .vinho-grid .vinho-card img.hovered {
       animation: scaleUp 0.5s ease-in-out forwards;
   }

   .vinho-grid .vinho-card img.not-hovered {
       animation: scaleDown 0.5s ease-in-out forwards;
   }
   ```
   Aumenta o tamanho dos cards de vinhos na página de vinhos.

3. **Transição suave de vinícolas**:
   ```css
   .vinicola img {
       transition: transform 0.5s ease-in-out; 
   }

   .vinicola img:hover {
       transform: scale(1.05);
   }
   ```
   Aumenta suavemente o tamanho das imagens das vinícolas ao passar o mouse.

---

> **Nota**: Atualize este README conforme necessário para refletir quaisquer mudanças no projeto.
