import { push, ref, update, remove } from "firebase/database";
import { Item } from "../../types/Item.type";
import { firebaseDB } from "../database";

export function addItem(
  name: string,
  category: string,
  price: number,
  stock: number,
  options: boolean,
  imgUrl: string,
  itemId?: string
) {
  const updates: Record<string, any> = {};

  const item: Item = {
    name,
    category,
    price,
    stock,
    options,
    imgUrl,
  };

  if (itemId) {
    updates[`items/${itemId}/name`] = name;
    updates[`items/${itemId}/category`] = category;
    updates[`items/${itemId}/price`] = price;
    updates[`items/${itemId}/stock`] = stock;
    updates[`items/${itemId}/options`] = options;
    updates[`items/${itemId}/imgUrl`] = imgUrl;
  } else {
    const key = push(ref(firebaseDB, "items"), item).key;
    updates[`items/${key}/id`] = key;
  }

  return update(ref(firebaseDB), updates);
}

export function deleteItem(itemId: string) {
  return remove(ref(firebaseDB, `/items/${itemId}`));
}
