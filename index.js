const fs = require("fs");
const http = require("http");
const replaceTemplate = require("./utils/replaceTemplate");
// READ FILES (Synchronously for simplicity at startup)
const overviewHtml = fs.readFileSync(
  `${__dirname}/pages/overview.html`,
  "utf-8"
);
const productsHtml = fs.readFileSync(
  `${__dirname}/pages/products.html`,
  "utf-8"
);
const productPartialHtml = fs.readFileSync(
  `${__dirname}/pages/partials/product-partial.html`,
  "utf-8"
); 
// Read the 404 template
const notFoundHtml = fs.readFileSync(`${__dirname}/pages/404.html`, "utf-8");

const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const products = JSON.parse(data);


const server = http.createServer((req, res) => {
  // Parse the URL properly
  const baseURL = `http://${req.headers.host}`;
  const requestURL = new URL(req.url, baseURL);

  const pathname = requestURL.pathname;
  const queryId = requestURL.searchParams.get("id");

  // OVERVIEW PAGE
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const productsCardsHtml = products
      .map((product) => replaceTemplate(productPartialHtml, product))
      .join("");
    const overviewPageHtml = overviewHtml.replace(
      "{%PRODUCT_CARDS%}",
      productsCardsHtml
    );
    res.end(overviewPageHtml);
  }

  // PRODUCTS PAGE
  else if (pathname === "/product") {
    const product = products.find((prod) => prod.productId === Number(queryId));

    if (product) {
      res.writeHead(200, { "Content-type": "text/html" });
      const productPageHtml = replaceTemplate(productsHtml, product);
      res.end(productPageHtml);
    } else {
      // Product not found -> serve 404
      res.writeHead(404, { "Content-type": "text/html" });
      res.end(notFoundHtml);
    }
  }

  // API PAGE
  else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  }

  // NOT FOUND PAGE
  else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end(notFoundHtml);
  }
});

server.listen(9090, "127.0.0.1", () => {
  console.log("Listening to requests on port 9090");
});
