import Auth from "../../../hoc/auth";
import { useState } from "react";
import FileUpload from "../utils/FileUpload";
const categories = [
  { key: 1, value: "outer" },
  { key: 2, value: "top" },
  { key: 3, value: "pants" },
  { key: 4, value: "etc" },
];
function UploadProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  return (
    <div className="min-h-screen flex-row items-center justify-center text-gray-900 py-40">
      <div className="max-w-md w-full space-y-8 m-auto">
        <div className="font-extrabold text-3xl">Product Upload</div>
        <FileUpload />
        <form>
          <label>Name</label>
          <input
            id="name"
            name="name"
            type="name"
            required
            className="appearance-none relative block w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="name"
            value={name}
            onChange={(event) => {
              setName(event.currentTarget.value);
            }}
          />
          <label>Description</label>{" "}
          <input
            id="description"
            name="description"
            type="description"
            required
            className="appearance-none relative block w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="description"
            value={description}
            onChange={(event) => {
              setDescription(event.currentTarget.value);
            }}
          />
          <label>Price</label>{" "}
          <input
            id="price"
            name="price"
            type="number"
            required
            className="appearance-none relative block w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="price"
            value={price}
            step={100}
            onChange={(event) => {
              setPrice(event.currentTarget.valueAsNumber);
            }}
          />
          <label>Category</label>{" "}
          <select
            className="relative block w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            onChange={(event) => {
              setCategory(event.currentTarget.value);
            }}
            value={category}
          >
            {categories.map((item) => (
              <option key={item.key}>{item.value}</option>
            ))}
          </select>
          <button
            type="submit"
            className="group relative w-2/5 flex justify-center py-2 px-4 my-6 mx-auto border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth(UploadProductPage, true);
