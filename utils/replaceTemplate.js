const replaceTemplate = (HTMLtemplate, product) => {
  let output = HTMLtemplate.replace(/{%PRODUCT_NAME%}/g, product.productName);
  output = output.replace(/{%PRODUCT_IMAGE%}/g, product.productImage);
  output = output.replace(/{%PRODUCT_PRICE%}/g, product.productPrice);
  output = output.replace(
    /{%PRODUCT_DESCRIPTION%}/g,
    product.productDescription
  );
  output = output.replace(/{%PRODUCT_ID%}/g, product.productId);
  return output;
};

module.exports = replaceTemplate;
