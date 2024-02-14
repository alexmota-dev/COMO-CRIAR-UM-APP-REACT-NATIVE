# CRIANDO O PRIMEIRO APP REACT NATIVE DO ZERO

>**Nota**: É neccessario já ter o Node (18), Java (JDK 17) e o SDK(33 Tiramisu) instalados.

>**Nota**: Em caso de erros consulte a [documentação.](https://reactnative.dev/docs/environment-setup)


## Passo 0: Supondo que você já tenha o SDK do android instalado, no entanto não tenha o Node e o Java, você pode usar o Chocolatey para fazer a instalação.

```bash
choco install -y nodejs-lts microsoft-openjdk17
```

## Se você instalou anteriormente um pacote global react-native-cli, remova-o, pois pode causar problemas inesperados:

```bash
npm uninstall -g react-native-cli @react-native-community/cli
```

## Passo 1: Criando o app

Para criar o app basta copiar o seguinte comando e inserir no terminal:

```bash
npx react-native@latest init ProjectName
```

## Passo 2: Incie o Metro em um terminal separado:

```bash
npm run start
```

## Passo 3: Incie o Metro em um terminal separado:

```bash
npm run android
```

### Você devera ver algo como isso:
![Pagina Home do App](./Home_Page.png)
