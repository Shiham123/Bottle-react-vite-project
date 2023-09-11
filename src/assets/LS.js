const getLocalStorage = () => {
  const productParse = localStorage.getItem('product');
  if (productParse) {
    return JSON.parse(productParse);
  }
  return [];
};

const saveLocalStorage = (product) => {
  const productStringify = JSON.stringify(product);
  localStorage.setItem('product', productStringify);
};

const addLocalStorage = (id) => {
  const product = getLocalStorage();
  if (!product.includes(id)) {
    product.push(id);
    saveLocalStorage(product);
  }
};

export { addLocalStorage, getLocalStorage, saveLocalStorage };
