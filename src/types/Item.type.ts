export type Item = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  options: "small" | "medium" | "large";
  imgUrl: string;
};
