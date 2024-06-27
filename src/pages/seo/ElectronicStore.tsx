// import React from 'react';
import { Helmet } from 'react-helmet';

const ElectronicsStore = () => {
  const pageTitle = "Electronics Store";
  const pageDescription = "Your one-stop shop for all electronic gadgets.";
  const siteUrl = "https://www.example.com";
  
  const products = [
    {
      name: "Television",
      description: "The latest Samrt TV with advanced features.",
      imageUrl: "https://www.example.com/images/smartphone.jpg",
      price: "N500,000.00",
      availability: "In stock",
      sku: "SKU123456",
      brand: "Samsung",
    },
    // Add more products here
  ];

  // Generate JSON-LD structured data for products
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${siteUrl}/products/${product.sku}`,
      "name": product.name,
      "image": product.imageUrl,
      "description": product.description,
      "sku": product.sku,
      "brand": {
        "@type": "Brand",
        "name": product.brand,
      },
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "NG",
        "availability": product.availability,
      },
    })),
  };

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* Add other meta tags here */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <h1>Welcome to our Electronics Store!</h1>
      {/* Render product listings */}
      {products.map(product => (
        <div key={product.sku}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.price}</p>
          {/* Add more product details */}
        </div>
      ))}
    </div>
  );
};

export default ElectronicsStore;
