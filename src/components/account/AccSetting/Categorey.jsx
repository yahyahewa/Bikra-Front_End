import React, { useEffect, useState } from "react";
import { useUploadImageMutation } from "../../../app/api/productEndPoint";
import { useAddCategoreyMutation } from "../../../app/api/categorey.endpoint";
function Categorey() {
  // const [uploadImage, { data: UploadImage }] = useUploadImageMutation();
  const [formData, setFormData] = useState({
    name: "",
    imgae: null,
  });
  const [addCategorey, { data: CategoreyData }] = useAddCategoreyMutation();
  // useEffect(() => {
  //   if (UploadImage?.status === "success") {
  //     setFormData({ ...formData, image: UploadImage?.data });
  //   }
  // }, [UploadImage]);
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (formData.imgae) {
      addCategorey(formData);
    }
  };
  return (
    <form
      onSubmit={handelSubmit}
      className="w-[90%] sm:w-1/2 flex flex-col m-auto justify-center items-center"
    >
      <h1 className="text-2xl font-bold text-slate-700">Add Categorey</h1>
      {/* ----------------------Name------------------------------------ */}
      <div className="w-full flex flex-col justify-center items-center mt-4">
        <h1 className="text- font-bold text-slate-700">Categorey Name</h1>
        <input
          onChange={handelChange}
          type="text"
          name="name"
          className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
        />
      </div>
      {/* ----------------------Image------------------------------------ */}
      <div className="w-full flex flex-col justify-center items-center mt-4">
        <h1 className="text- font-bold text-slate-700">Categorey Image</h1>
        <div className="w-full h-[250px] rounded-2xl overflow-hidden border mb-2 object-cover">
          <img src={formData.imgae} className={`w-full h-full`} alt="" />
        </div>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];

            const reader = new FileReader();

            reader.onloadend = function () {
              const base64Image = reader.result;
              if (base64Image) {
                setFormData({ ...formData, [e.target.name]: base64Image });
              }
            };

            reader.readAsDataURL(file);
          }}
          name="imgae"
          className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
        />
      </div>
      <button
        type="submit"
        className="w-full h-10 bg-jaguar-400 mt-2 hover:bg-jaguar-500
           ease-in-out duration-300 text-white rounded-xl"
      >
        Add Categorey
      </button>
    </form>
  );
}

export default Categorey;
