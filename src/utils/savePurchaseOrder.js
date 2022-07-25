import {
  db
} from "../firebase/config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  writeBatch
} from "firebase/firestore";

export const savePurchaseOrder = async (order) => {
  const batch = writeBatch(db);
  const productsOutOfStock = [];
  const {
    items
  } = order;

  for (let i = 0; i < items.length; i++) {
    const productInCart = items[i];
    const docSnap = await getDoc(doc(db, "products", productInCart.id));

    if (docSnap.exists()) {
      const product = {
        ...docSnap.data(),
        id: docSnap.id
      };
      if (product.stock >= productInCart.quantity) {
        await batch.update(doc(db, "products", product.id), {
          stock: product.stock - productInCart.quantity
        });
      } else {
        productsOutOfStock.push(product);
      }
    } else {
      // doc.data() will be undefined in this case
      return {
        status: "doc.data() undefined",
        message: "Hay un documento del producto indefinido"
      }
    }
  }

  if (productsOutOfStock.length === 0) {
    const docRef = await addDoc(collection(db, "orders"), order);
    await batch.commit();
    return {
      status: "ok",
      message: `La orden se ha generado su id es ${docRef.id}`,
      orderId: docRef.id,
      productsOutOfStock
    };
  } else
    return {
      status: "productsOutOfStock",
      message: "Hay productos fuera de stock",
      productsOutOfStock,
    }
}