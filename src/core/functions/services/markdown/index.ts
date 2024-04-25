const md = require("markdown-it");
const hljs = require("highlight.js");

export default function () {
  const renderer = new md({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
    highlight: (str: string, lang: string) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (error) {
          console.error("Error highlighting code:", error);
        }
      }
      return "";
    },
  });

  function render(markdownText: string): string {
    return renderer.render(markdownText);
  }

  return { render };
}
