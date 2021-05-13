
const visit = require(`unist-util-visit`);

module.exports = ({markdownAST}, options = {}) => {
  const template = (prop) => `
  <iframe 
    style="width:100%;height:155px;max-width:680px;"
    title="${prop.title}"
    src="https://hatenablog-parts.com/embed?url=${prop.url}"
    width="300"
    height="200"
    frameborder="0"
    scrolling="no"
    /></iframe>
  `;

  const isValidUrl = (userInput) => {
    const match = userInput.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, /* eslint-disable-line max-len */
    );
    return (match !== null);
  };

  const find = (text) => {
    const re = new RegExp(`\(blogcard\):\(\.\*\)`, 'i');
    const match = text.match(re);

    if (match == null) return null;

    return match[2].trim();
  };

  const parse = (text) => {
    const match = text.match(/\[(.*)\]\((.*)\)/);

    const title = (match) ? match[1] : defaultTitle;
    const url = (match) ? match[2] : text;

    if (!isValidUrl(url)) return null;

    return {
      title: title,
      url: url,
    };
  };
  visit(markdownAST, `inlineCode`, (node) => {
    const {value} = node;

    const findValue = find(value);
    if (findValue == null) return;

    const parsedValue = parse(findValue);
    if (parsedValue == null) return;

    node.type = `html`;
    node.value = template(parsedValue);
  });

  return markdownAST;
};
