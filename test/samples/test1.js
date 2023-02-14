class ProductIngestor {
    constructor() {
      this.cleanedProducts = [];
    }
    
    cleanAndPackageProducts(products) {
      products.forEach(product => {
        let cleanedProduct = {};
        
        cleanedProduct.id = product.id;
        cleanedProduct.name = product.name.trim();
        cleanedProduct.description = product.description.trim();
        cleanedProduct.price = product.price;
        cleanedProduct.imageUrl = product.imageUrl;
        
        this.cleanedProducts.push(cleanedProduct);
      });
      
      return this.cleanedProducts;
    }
    
    sendToHomeProductGallery(cleanedProducts) {
      // code to send cleaned products to the HomeProductGallery microservice
    }
  }