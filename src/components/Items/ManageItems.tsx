import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { Item } from "../../types/Item.type";
import { useListCategories, useListItems } from "../../db/hooks/dbHooks";
import SearchInput, { SearchOption } from "../SearchInput";
import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import AddItemModal from "../AddItemModal";

export default function ManageItems() {
  const [items, itemsLoading] = useListItems();
  const [categories] = useListCategories();
  const [selectedItem, setSelectedItem] = useState<SearchOption>({
    id: "-1",
    name: "",
  });
  const [selectedCategory, setSelectedCategory] = useState<SearchOption>({
    id: "-1",
    name: "",
  });
  const [showEditModal, setShowEditModal] = useState(false);

  const filteredItems = !itemsLoading
    ? items
        ?.filter((element) => {
          if (selectedCategory.id === "-1") return true;
          else return element.category === selectedCategory.id;
        })
        .filter((el) => {
          if (selectedItem.id === "-1") return true;
          else return el.name.includes(selectedItem.name);
        })
        .map((item) => item)
    : [];

  return (
    <>
      <div className="flex items-center justify-between pr-6 ">
        <h2 className="text-black font-bold text-xl">Manage Items</h2>
        <button
          onClick={() => setShowEditModal(true)}
          className="rounded-lg group hover:bg-purple-600 transition-colors h-8 w-24 px-4 gap-2 flex items-center justify-center bg-purple-500"
        >
          <IoAddOutline className="w-5 h-5 group-hover:w-6 group-hover:h-6 text-white transition-colors group-hover:font-semibold" />
          <p className="text-white group-hover:font-bold font-semibold transition-colors">
            Add
          </p>
        </button>
      </div>

      <div className="mt-6 flex gap-4 justify-between">
        <SearchInput
          placeholder="Filter Category"
          selected={selectedCategory}
          setSelected={setSelectedCategory}
          items={categories!}
        />

        <SearchInput
          placeholder="Search Item"
          selected={selectedItem}
          setSelected={setSelectedItem}
          items={
            items?.map((i) => {
              return {
                id: i.id || "",
                name: i.name,
              };
            }) || []
          }
        />
      </div>
      {/* List container  */}
      <div className="mt-6 space-y-2 overflow-auto max-h-[590px] px-2">
        {filteredItems?.map((item) => (
          <ManageItemRow key={item.id} item={item} />
        ))}
      </div>
      <AddItemModal isOpen={showEditModal} setIsOpen={setShowEditModal} />
    </>
  );
}
function ManageItemRow({ item }: { item: Item }) {
  return (
    <div className="flex justify-between items-center gap-x-12 border px-6 py-2 rounded-lg">
      <img src={item.imgUrl} className="rounded-full h-12 w-12" alt="" />

      <p className="text-lg font-semibold flex-1">{item.name}</p>

      <div>
        <p className="text-sm font-light">
          Stock : <span className="font-normal">{item.stock}</span>
        </p>
        <p className="text-sm font-light">
          Price : <span className="font-normal">{item.price}</span>
        </p>
      </div>

      <div className="flex gap-2">
        <div className="rounded-full h-8 w-8 hover:cursor-pointer hover:bg-neutral-300 transition-colors flex justify-center items-center bg-neutral-200">
          <CiEdit className="" />
        </div>
        <div className="rounded-full h-8 w-8 hover:cursor-pointer hover:bg-red-300 transition-colors flex justify-center items-center bg-red-200">
          <FaRegTrashAlt />
        </div>
      </div>
    </div>
  );
}
