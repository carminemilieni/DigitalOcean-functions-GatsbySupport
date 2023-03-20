<a href="https://ninjacoding.it/">
    <img src="https://raw.githubusercontent.com/carminemilieni/ninjacoding-commons/main/ninjacoding-primary-logo.svg" alt="NinjaCoding logo" title="NinjaCoding" height="60" />
</a>

# Digitalocean Functions GatsbySupport 🇮🇹

⭐️ Aggiungi una stella su GitHub — mi motiva molto!

## Indice

- [Introduzione](#Introduzione)
- [Requisiti](#Requisiti)
- [Setup](#Setup)
    - [Step1](#Step1)
    - [Step2](#Step2)
    - [Step3](#Step3)
    - [Step4](#Step4)
    - [Step5](#Step5)
    - [Step6](#Step6)
    - [Step7](#Step7)
- [Licenza](#Licenza)

## Introduzione

Questo repository contiene diverse funzioni scritte in Node.js.
É un repository ad uso personale ma reso pubblico per dimostrare come le funzioni serverless possano aiutare in diversi
contesti.

Sto cercando di realizzare un sito personale completamente serverless in GatsbyJS ma questo purtroppo non é sempre
possibile, nello specifico questo repository nasce per un problema molto banale, avevo la necessita sul mio sito di
creare un widget ajax in grado di mostrare i miei ultimi tre twitt, questo non puó essere fatto nel frontend perché non
posso essere esposte in chiaro le chiavi di autenticazioni twitter.

Utilizzero le Functions di Digitalocean probabilmente anche per altre funzionalità.

Puoi distribuire queste funzioni direttamete su Digitalocean Function

## Requisiti

- Devi possedere un account
  Digitalocean [https://cloud.digitalocean.com/registrations/new](https://cloud.digitalocean.com/registrations/new)
- Devi avere installato
  Doctl [https://docs.digitalocean.com/reference/doctl/](https://docs.digitalocean.com/reference/doctl/)
- Devi creare un app su Twitter per utilizzare le funzioni
  twitter [http://developer.twitter.com/](http://developer.twitter.com/)

## Setup

### Step1

Esegui il fork del repository:

```shell
git clone https://github.com/carminemilieni/digitalocean-functions-gatsbysupport
cd digitalocean-functions-gatsbysupport
```

### Step2

Genera e appunta il tuo BearerToken dalla tua applicazione Twitter.

### Step3

Recupera e copia il tuo id twitter [https://tweeterid.com](https://tweeterid.com).

### Step4

Rinomina il file env.example in .env e inserisci nel file il tuo token e il tuo id:

`
mv env.example .env
`

```
#TWITTER
TWITTER_USER_ID=YOUR_USER_ID
TWITTER_BEARER_TOKEN=YOUR_APP_BEARER_TOKEN
#GITHUB
GITHUB_USERNAME=YOUR_GITHUB_USERNAME
```

### Step5

Crea e connetti al tuo [Namespace](https://docs.digitalocean.com/products/functions/how-to/create-namespaces/)

### Step6

Dopo aver configurato il tuo account Digitalocean, installato ed autenticato doctl, creiamo un nuovo namespace solo dopo
aver installato **serverless support**

```shell
doctl serverless install
doctl serverless namespaces create --label ${namespaces} --region ${region-slug}
```

Ovviamente sostituisci **${namespace}** con il tuo nome e **${region-slug}** con la tua regione. ecco
una [lista qui](https://docs.digitalocean.com/products/platform/availability-matrix/).
Puoi ottenere una lista di regioni disponibili con questo comando:

```shell
doctl serverless namespaces list-regions
```

Verrà creato il tuo namespace ed in automatico la tua doctl si collegherà allo spazio nomi appena creato.
Otterrai in risposta qualcosa come questo

```shell 
Connected to functions namespace 'fn-XXXXXXXXXXXX' on API host 'https://xxxxx.doserverless.co'
```

Appunta il tuo API host.

### Step7

Se hai seguito tutti i comandi precedenti dovremmo trovarci nella cartella di progetto quindi puoi lanciare il comando:

```shell
doctl serverless deploy ./
```

Otterrai in risposta le funzioni distribuite ed il loro percorso:

```shell
Deployed functions ('doctl sls fn get <funcName> --url' for URL):
  - twitter/getLastThreeTweets
```

Lancia una qualsiasi richiesta http ad ${apiHost}/${funcName}

## Licenza

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Licenza Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />
Quest'opera è distribuita con Licenza <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative
Commons Attribuzione - Condividi allo stesso modo 4.0 Internazionale</a>.

<a href="https://ninjacoding.it/">
    <img src="https://raw.githubusercontent.com/carminemilieni/ninjacoding-commons/main/emoji-2.png" alt="NinjaCoding Emoji" title="Emoji" height="500" />
</a>