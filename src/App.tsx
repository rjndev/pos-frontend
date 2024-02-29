import { useState } from "react";
import { useGetItem } from "./db/hooks/dbHooks";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);
  const [item] = useGetItem("testItem01");

  console.log("ITEM IS");
  console.log(item);

  console.log("API KEY");
  console.log(import.meta.env.VITE_FIREBASE_API_KEY);
  return (
    <>
      <Sidebar />
    </>
  );
}

export default App;
