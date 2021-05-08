<h1 align="center">
<strong>gatsby-remark-blog-card</strong>
</h1>

<p align="center">
Gatsby plugin to embed external links beautifully in markdown.
</p>

<p align="center">
<img alt="npm (scoped)" src="https://img.shields.io/npm/v/@w2-yamaguchi/gatsby-remark-blog-card">
<img alt="npm" src="https://img.shields.io/npm/dt/@w2-yamaguchi/gatsby-remark-blog-card">
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
