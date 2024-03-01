import { remove, ref, push, update } from "firebase/database";
import { firebaseDB } from "../database";
import { Category } from "../../types/Category.type";

export function deleteCategory(categoryId: string) {
  return remove(ref(firebaseDB, `/categories/${categoryId}`));
}

export function addCategory(name: string) {
  const updates: any = {};

  const newCat: Category = {
    name: name,
  };

  const key = push(ref(firebaseDB, "categories"), newCat).key;
  updates[`categories/${key}/id`] = key;

  return update(ref(firebaseDB), updates);
}
