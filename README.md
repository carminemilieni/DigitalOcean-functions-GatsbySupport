<a href="https://ninjacoding.it/">
     <img src="https://raw.githubusercontent.com/carminemilieni/ninjacoding-commons/main/ninjacoding-primary-logo.svg" alt="NinjaCoding logo" title="NinjaCoding" height="60" />
</a>

# Digitalocean Functions GatsbySupport 🇬🇧

⭐️ Add a star on GitHub — it motivates me a lot!

## Index

- [Introduction](#Introduction)
- [Requirements](#Requirements)
- [Setup](#Setup)
    - [Step1](#Step1)
    - [Step2](#Step2)
    - [Step3](#Step3)
    - [Step4](#Step4)
    - [Step5](#Step5)
    - [Step6](#Step6)
    - [Step7](#Step7)
- [License](#License)

## Introduction

This repository contains several functions written in Node.js.
It is a repository for personal use but made public to demonstrate how serverless functions can help in different
contexts.

I'm trying to create a completely serverless personal site in GatsbyJS but unfortunately this is not always possible,
specifically this repository was born for a very trivial problem, I needed on my site to create an ajax widget able to
show my last three tweets , this cannot be done in the frontend because the twitter authentication keys cannot be
exposed in the clear.

I will probably use Digitalocean's Functions for other features as well.

You can distribute these functions directly on Digitalocean Function

## Requirements

- You must have a Digitalocean
  account [https://cloud.digitalocean.com/registrations/new](https://cloud.digitalocean.com/registrations/new)
- You must have Doctl
  installed [https://docs.digitalocean.com/reference/doctl/](https://docs.digitalocean.com/reference/doctl/)
- You need to create a twitter app to use twitter
  features [http://developer.twitter.com/](http://developer.twitter.com/)
- You need to create an access token to use the github api and grant the public_repo
  scope ([Create new token here](https://github.com/settings/tokens/new))

## Setup

### Step1

Fork the repository:

```shell
git clone https://github.com/carminemilieni/digitalocean-functions-gatsbysupport
cd digitalocean-functions-gatsbysupport
```

### Step2

Generate and pin your BearerToken from your Twitter application.

### Step3

Retrieve and copy your twitter id [https://tweeterid.com](https://tweeterid.com).

### Step4

Rename the env.example file to .env and put your token and id in the file:

`
mv env.example .env
`

```
#TWITTER
TWITTER_USER_ID=YOUR_USER_ID
TWITTER_BEARER_TOKEN=YOUR_APP_BEARER_TOKEN
#GITHUB
GITHUB_USERNAME=YOUR_GITHUB_USERNAME
GITHUB_ACCESS_TOKEN=YOUR_GITHUB_ACCESS_TOKEN
```

### Step5

Create and connect to your [Namespace](https://docs.digitalocean.com/products/functions/how-to/create-namespaces/)

### Step6

After configuring your Digitalocean account, installing and authenticating doctl, we create a new namespace only after
installing **serverless support**

```shell
docl serverless install
doctl serverless namespaces create --label ${namespaces} --region ${region-slug}
```

Obviously replace **${namespace}** with your name and **${region-slug}** with your region. here is
a [list here](https://docs.digitalocean.com/products/platform/availability-matrix/).
You can get a list of available regions with this command:

```shell
doctl serverless namespaces list-regions
```

Your namespace will be created and your doctl will automatically link to the newly created namespace.
You will get something like this in response

```shell
Connected to functions namespace 'fn-XXXXXXXXXXXX' on API host 'https://xxxxx.doserverless.co'
```

Pin your host API.

### Step7

If you followed all the previous commands we should be in the project folder so you can run the command:

```shell
doctl serverless deploy ./
```

You will get in response the distributed functions and their path:

```shell
Deployed functions ('doctl sls fn get <funcName> --url' for URL):
  - github/getLastThreeRepos
  - twitter/getLastThreeTweets
```

Launch any http request to ${apiHost}/${funcName}

## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Licenza Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />
This work is distributed under a License <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative
Commons Attribution - Share Alike 4.0 International</a>.

<a href="https://ninjacoding.it/">
     <img src="https://raw.githubusercontent.com/carminemilieni/ninjacoding-commons/main/emoji-2.png" alt="NinjaCoding Emoji" title="Emoji" height="500" />
</a>