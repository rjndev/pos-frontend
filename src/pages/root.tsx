import { useGetItem } from "../db/hooks/dbHooks";

function RootPage() {
  const [item] = useGetItem("testItem01");

  console.log("ITEM IS");
  console.log(item);

  console.log("API KEY");
  console.log(import.meta.env.VITE_FIREBASE_API_KEY);
  return <></>;
}

export default RootPage;
