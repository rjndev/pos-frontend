import { useListCategories } from "../../db/hooks/dbHooks";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteCategory } from "../../db/mutations/categoryMutate";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { addCategory } from "../../db/mutations/categoryMutate";

export default function ManageCategories() {
  const [categories] = useListCategories();
  const [input, setInput] = useState("");

  return (
    <div>
      <h2 className="text-black font-bold text-xl">Manage Categories</h2>

      <div className="mt-4 flex items-center justify-between px-2">
        <div>
          <label
            className="block font-semibold text-neutral-500 text-sm"
            htmlFor=""
          >
            Add Category
          </label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Category Name here..."
            className="border mt-2 text-md placeholder:text-sm rounded-lg w-max-[300px] outline-purple-400 px-3 py-1"
            type="text"
          />
        </div>

        <button
          onClick={async () => {
            await addCategory(
              `${input.charAt(0).toUpperCase() + input.slice(1)}`
            );
            setInput("");
          }}
          className="rounded-lg group hover:bg-purple-600 transition-colors h-8 w-24 px-4 gap-2 flex items-center justify-center bg-purple-500"
        >
          <IoAddOutline className="w-5 h-5 group-hover:w-6 group-hover:h-6 text-white transition-colors group-hover:font-semibold" />
          <p className="text-white group-hover:font-bold font-semibold transition-colors">
            Add
          </p>
        </button>
      </div>

      <div className="flex gap-4 flex-wrap mt-10">
        {categories?.map((category) => {
          return (
            <div
              key={category.id}
              className="rounded-lg flex items-center gap-8 bg-purple-300 py-2 px-4"
            >
              <p>{category.name}</p>
              <div
                onClick={async () => {
                  await deleteCategory(category.id!);
                }}
                className="hover:cursor-pointer"
              >
                <FaRegTrashAlt />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
