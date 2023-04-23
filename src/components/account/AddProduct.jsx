import React from "react";

function AddProduct() {
  const [image, setImage] = React.useState(null);
  return (
    <section className="w-full">
      <div className="w-full flex justify-center items-center mt-6">
        <div className="w-[90%] sm:w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-slate-700">Add Product</h1>
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">Product Name</h1>
            <input
              type="text"
              className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">Product Image</h1>
            <div className="w-full h-[250px] rounded-2xl overflow-hidden border mb-2 object-cover">
              <img src={image} className={`w-full h-full`} alt="" />
            </div>
            <input
              type="file"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
              className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">Product Category</h1>
            <input
              type="text"
              className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">Product Price</h1>
            <input
              type="number"
              min={0}
              className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">Product Discount</h1>
            <input
              type="number"
              min={0}
              className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">
              Product Description
            </h1>
            <textarea
              type="text"
              className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
            />
          </div>
          <button
            className="w-full h-10 bg-jaguar-400 mt-2 hover:bg-jaguar-500
           ease-in-out duration-300 text-white rounded-xl"
          >
            Add Product
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddProduct;
