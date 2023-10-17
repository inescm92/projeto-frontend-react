# Website TRAVEL

Este é um website responsivo de viagens, criado para pessoas que gostam de viajar e procuram novos destinos e experiências pelo mundo fora. Neste site é também possível ficar a saber um pouco mais sobre a empresa, podendo o utilizador entrar em contacto com a empresa.

# Opções Técnicas

Procurei aplicar uma boa semântica de HTML, utilizar da melhor forma o CSS de forma a obter um design equilibrado, e acrescentar a interação com o utilizador através da utilização de React JS.

## Navbar

Este componente apresenta o menu de desktop e mobile. É utilizado o hook `useState`, e o `react-router-dom` para o sistema de rotas.

1.  O hook `useState` é usado para gerir:
    - `menuMobile` - controla se o menu mobile está ativo.
    - `menuBtn` - controla se o botão do menu está ativo.
2.  A função `toggleMenu` é responsável por alternar o estado de `menuMobile` e `menuBtn`, exibindo ou ocultando o menu mobile. Ela permite a navegação até à secção selecionada quando um link é clicado.

## Home

A componente Home representa a secção inicial do website. Ela inclui uma imagem de fundo, informações de boas-vindas e uma série de cartões de destinos de viagem.

## About

Esta secção exibe informações sobre a empresa e o serviço prestado, juntamente com uma imagem ilustrativa.

## Popular

Apresenta uma série de imagens e informações de alguns dos destinos mais populares e demonstrando algumas das melhores experiências a ser vividas.

## Blog

O Blog exibe uma série de posts, onde é possível fazer updade e delete. Fornece ainda a funcionalidade de paginação.

## Explore

Esta componente destaca os paraísos a serem explorados. Inclui uma imagem ilustrativa de um destino paradisíaco, informações sobre o local e um pequeno detalhe acerca do autor.

## Join

Aqui é possível encontrar um formulário de contato com a respetiva validação (utilizado o hook useFormik e o validationSchema). Apresenta campos para nome, e-mail e mensagem. Quando o formulário é enviado através do clique no botão "Submit", uma notificação de sucesso é exibida usando a biblioteca "react-toastify".

## Footer

Este componente representa o rodapé do site e inclui links para diferentes seções, informações de contato, links para redes sociais e informações de direitos autorais.
O Footer inclui ainda a componente Weather através de rota, que exibe informações sobre o clima de uma cidade específica (Lisboa, neste caso) usando a API _OpenWeatherMap_ (temperatura, descrição do clima, humidade e velocidade do vento).

# Dependências

1.  **React**: O projeto é baseado no framework JavaScript React, que é usado para criar interfaces de utilizadores reativas.
2.  **React Router**: A biblioteca React Router é usada para lidar com a navegação entre páginas ou rotas num aplicativo React. Ela permite criar links e rotas para diferentes partes do aplicativo.
3.  **Axios**: O Axios é uma biblioteca JavaScript para fazer solicitações HTTP. Neste projeto, ele é usado para fazer uma solicitação para a API OpenWeatherMap para obter dados de clima, assim como para criar, atualizar e excluir posts.
4.  **FontAwesome**: A biblioteca FontAwesome é usada para exibir ícones na interface do utilizador. No código, os ícones do FontAwesome são importados e usados no componente "Weather".
5.  **react-toastify**: A biblioteca "react-toastify" é usada para exibir notificações (toast) na interface do usuário. Ela é usada para mostrar uma notificação de sucesso após buscar os dados do clima.
6.  **Yup**: Yup é uma biblioteca de validação usada com o Formik para definir esquemas de validação.
7.  **Formik**: O Formik é usado para criar e gerenciar um formulário de contato.
8.  **HTML e CSS**: O projeto utiliza HTML para estruturar a página e CSS para estilizar os componentes e a aparência geral do site.

# Aspetos a desenvolver

1. Navegação dos botões existentes nas componentes Home e About para as seções pretendidas.
2. Os cartões com imagens na seção Home serem mais interativos e permitirem aceder a publicações acerca dos destinos numa página de Blog.
3. Na seção Popular, os cartões apresentarem reviews e rating de cada experiência dados pelo utilizador.
4. Links presentes no Footer conduzirem a outras páginas com a respetiva informação.
5. Integração de Newsletter
6. Opção de tradução do site.
