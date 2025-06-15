import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const seedProducts = async () => {
  const products = [
    {
      name: "Auriculares Bluetooth",
      description: "Auriculares inalámbricos con cancelación de ruido.",
    },
    {
      name: "Cargador Rápido USB-C",
      description: "Carga tu teléfono al 100% en 30 minutos.",
    },
    {
      name: "Teclado Mecánico",
      description: "Teclado con switches rojos para máxima velocidad.",
    },
    {
      name: "Webcam HD",
      description: "Ideal para videollamadas y streaming.",
    },
  ];

  for (let product of products) {
    await addDoc(collection(db, "products"), product);
  }

  console.log("Productos cargados exitosamente ✅");
};
