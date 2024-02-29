import { useListVals, useObjectVal } from "react-firebase-hooks/database";
import { ref } from "firebase/database";
import { firebaseDB } from "../database";
import { Item } from "../../types/Item.type";
import { Category } from "../../types/Category.type";

export function useGetItem(key: string) {
  return useObjectVal<Item>(ref(firebaseDB, `items/${key}`));
}

export function useListItems() {
  return useListVals<Item>(ref(firebaseDB, "items"));
}

export function useListCategories() {
  return useListVals<Category>(ref(firebaseDB, "categories"));
}
