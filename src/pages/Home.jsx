import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Productos Disponibles</h1>
      {products.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <button
                onClick={() => alert(`Producto "${product.name}" activado`)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Activar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
