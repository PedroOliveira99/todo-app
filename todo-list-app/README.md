# Informações do criador
Nome: Pedro Oliveira

# Descrição
É uma aplicação voltada para fins educativos que usa tecnologias do React Native como: 
useState
useEffect
flatList
AsyncStorage
Componentização

O intuito da aplicação é ser uma todo-list. 
O que é todo-list ? é um sistema onde voce consegue registrar coisas que precisa fazer e acompanhar se ja foram
concluidas, pode ser usado para lista de compras tambem, na qual voce escreve o que tem que comprar e vai marcando
como concluido os itens que voce ja comprou.

Conta com funcionalidades que são:
Adicionar Tarefas
Salvar Tarefas
Concluir Tarefas
Excluir Tarefas
Navegação entre telas 

# Prints
# Tela 01 (Primeira)
![Tela 01 Lista vazia](../todo-list-app/assets/images/Tela%201%20Lista%20vazia.jpeg)
![Tela 01 Lista com Task](../todo-list-app/assets/images/Tela%201%20Lista%20com%20task.jpeg)
![Tela 01 Lista Task Finalizada](../todo-list-app/assets/images/Tela%201%20Lista%20com%20task%20Finalizada.jpeg)
![Tela 02 Sobre](../todo-list-app/assets/images/Tela%202%20Sobre%20App%20pagina.jpeg)

# Welcome to your Expo app seu puto(a)

1 Use o 'git clone URL' para clonar o repositorio.
2 Apos o clone use 'cd todo-list-app' ou o nome da pasta do projeto existente.
3 execute o codigo com 'npx expo start' e veja se precisa se vai rodar e esta tudo atualizado.

# Em Caso de Erro
Em caso de erro como o 'The global expo-cli package has been deprecated' por exemplo use o 'npm install'.
Lembre-se de executar o 'npm install' dentro da pasta do projeto, no nosso caso é a 'todo-list-app'
Para entrar na pasta use o 'cd + nome-da-pasta'.
Reformulando 'cd todo-list-app' + 'npm install' + npx expo start

# Em algumas ocasiões
Em algumas ocasiões em que a rede seja mais estruturada ou o Desktop seja mais fechado por questões de firewall
e voce não consiga a conexao entre Desktop e Celular vamos precisar ir por um meio alternativo.
E esse sem duvida é o mais certeiro, vamos la.

Primeiro instale o NGROK que é nada mais nada menos que uma dependecia/pacote que fornece a integração/binario necessario para o expo criar o tunel usando o NGROK.
Temos dois exemplos de instalação do NGROK.

1 O primeiro é o Global que fica disponivel para o ambiente da sua maquina ou seja, é instalado na sua maquina inteira 'npm install -g @expo/ngrok'.

2 O segundo é o 'npm install @expo/ngrok --save-dev' que é Local/devDependecy ele fica instalado dentro do projeto e registrado no 'package.json'.

Apos instalar o NGROK use o 'npx expo start --tunnel' ele ira fazer um tunelamento entre servidor local e uma URL acessivel pela internet.
Em caso de erro use o 'npx expo start -c' ele vai limpar o Cache do metro bundler depois 'Ctrl+C' para fechar o servidor e apos isso 'npx expo start --tunnel'

# Resumo
Primeira instalação:
1 git clone URL
2 cd nome-da-pasta-do-projeto
3 npm install
4 npx expo start

# Se der erro
1 'npm install @expo/grok --save-dev' para instalaçao dentro do projeto ou 'npm install -g @expo/ngrok' para instalaçao global, em toda a maquina. 
2 npx expo start -c
3 Ctrl + C
4 npx expo start --tunnel


