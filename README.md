<h1 align="center">
<strong>gatsby-remark-blog-card</strong>
</h1>

<p align="center">
Gatsby plugin to embed external links beautifully in markdown, as you can see below.
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/14968984/118245567-f3706900-b4db-11eb-8abe-eef0cacdd2f4.png" width="600">
</p>

<p align="center">
<img alt="npm (scoped)" src="https://img.shields.io/npm/v/gatsby-remark-blog-card">
<img alt="npm" src="https://img.shields.io/npm/dt/gatsby-remark-blog-card">
</p>

## Usage

### Install the plugin:

```
npm install gatsby-remark-blog-card
```

or

```
yarn add gatsby-remark-blog-card
```

### Add it to your gatsby-config.js:

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-blog-card",
        }
      },
    },
  ],
};
```

### Usage in Markdown:

#### Usage #1

You specify the title and URL.

Better accessibility than Usage 2.

```
`blogcard:[*** TITLE ***](*** URL ***)`

Example below:

`blogcard:[Portfolio](https://w2-yamaguchi.web.app/)`
```

The resulting HTML generated from the Markdown:

```
<iframe 
    style="width:100%;height:155px;max-width:680px;"
    title="Portfolio"
    src="https://hatenablog-parts.com/embed?url=https://w2-yamaguchi.web.app/"
    width="300"
    height="200"
    frameborder="0"
    scrolling="no"
/></iframe>
```

#### Usage #2

Also, You can specify only URL.

The title is `Blog Card` by default.

```
`blogcard:*** URL ***`

Example below:

`blogcard:https://w2-yamaguchi.web.app/`
```

#### The resulting HTML generated from the Markdown:

```
<iframe 
    style="width:100%;height:155px;max-width:680px;"
    title="Blog Card"
    src="https://hatenablog-parts.com/embed?url=https://w2-yamaguchi.web.app/"
    width="300"
    height="200"
    frameborder="0"
    scrolling="no"
/></iframe>
```
