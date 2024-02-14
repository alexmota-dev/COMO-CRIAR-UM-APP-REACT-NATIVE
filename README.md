# CRIANDO O PRIMEIRO APP REACT NATIVE DO ZERO

>**Nota**: É neccessario já ter o Node (18), Java (JDK 17) e o SDK(33 Tiramisu) instalados.

>**Nota**: Em caso de erros consulte a [documentação.](https://reactnative.dev/docs/environment-setup)


## Passo 0: Supondo que você já tenha o SDK do android instalado, no entanto não tenha o Node e o Java, você pode usar o Chocolatey para fazer a instalação.

```bash
choco install -y nodejs-lts microsoft-openjdk17
```

>**Nota**: Em caso de erro semelhante: "O termo 'choco' não é reconhecido como nome de cmdlet" habilite o uso do Chocolatey com o comando abaixo, lembre-se de abri o Terminal como Administrador.

```bash
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "(iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))) >$null 2>&1" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
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
