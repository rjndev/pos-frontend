import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

export interface SearchOption {
  id: string;
  name: string;
}

export default function SearchInput({
  items,
  selected,
  setSelected,
  placeholder,
}: {
  items: SearchOption[];
  selected: SearchOption;
  setSelected: React.Dispatch<React.SetStateAction<SearchOption>>;
  placeholder: string;
}) {
  const itemMapList: SearchOption[] = items.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  const [query, setQuery] = useState("");

  console.log("SELECTED");
  console.log(selected);

  const filteredItems =
    query === ""
      ? itemMapList
      : itemMapList.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="w-full">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border  sm:text-sm">
            <Combobox.Input
              className={`w-full  py-2 pl-3 pr-10 text-sm leading-5 ring-0   focus:outline-purple-400   ${
                selected.id === "-1" ? "text-gray-400" : "text-gray-900"
              }`}
              placeholder={placeholder}
              displayValue={(item: any) => item.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            {selected.id !== "-1" && (
              <Combobox.Button
                onClick={(par) => {
                  par.preventDefault();
                  setSelected({ id: "-1", name: "" });
                }}
                className="absolute inset-y-0 right-5 flex items-center pr-2"
              >
                <FcCancel
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            )}
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <FaChevronDown
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            enter="transition ease-in duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm">
              {filteredItems.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <Combobox.Option
                    key={item.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-purple-400 text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-purple-400"
                            }`}
                          >
                            <FaCheck className="h-3 w-3" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
