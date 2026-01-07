import { useState } from "react";

const App = () => {
   return (
      // UI first
      <>
         <Navbar />
         <Catalogues />
      </>
   );
};
export default App;

const Navbar = () => {
   return (
      <nav
         style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "right",
            padding: ".5rem 1.5rem",
         }}
      >
         <h1 style={{ marginRight: "Auto" }}>Welcome, Vynettro</h1>
         <p>About us</p>
         <p>Products</p>
         <p>Contacts</p>
      </nav>
   );
};

const PRODUCTS = ['Salsa Sauce', 'Black Curry Powder', 'Parmesan Cheese', 'Pickle']

const Catalogues = () => {
   const [query, setQuery] = useState('')
   const [products, setProducts] = useState(PRODUCTS)
   const deleteProduct = () => {
      if (query === null) return

      const updatedProducts = products.filter(product => product !== query)
      setProducts(updatedProducts)
      setQuery('')
   }
   return (
      <>
         <div>Catalogue of {products.length} product items</div>
         <hr />
         <ul>
            {products.map(product => (
               <li key={product}>{product}</li>
            ))}
         </ul>
         <input value={query} onChange={(e) => setQuery(e.target.value)} />
         <button onClick={deleteProduct}>delete item</button>
      </>
   );
};
