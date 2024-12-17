import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";

function AddNominee() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddNominee = async (e) => {
    e.preventDefault();

    try {
      const nomineeRef = collection(db, "nominees");
      await addDoc(nomineeRef, {
        name,
        description,
        category,
        imageUrl,
      });
      toast.success("Nominee added successfully!");
      setName("");
      setDescription("");
      setCategory("");
      setImageUrl("");
    } catch (error) {
      console.error("Error adding nominee:", error);
      toast.error("Error adding nominee");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="xl:w-[700px] px-10 h-auto rounded-3xl xl:shadow-xl bg-[#111827]">
          <h1 className="text-center text-2xl font-bold my-[1rem] ">
            Add Nominee
          </h1>
          <hr />

          <div className="flex justify-center my-10">
            <form
              onSubmit={handleAddNominee}
              className="flex flex-col gap-[1rem]"
            >
              <input
                type="text"
                className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] text-[#111827]"
                placeholder="Nominee Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <textarea
                className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] outline-indigo-400 text-[#111827]"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <input
                type="text"
                className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] text-[#111827]"
                placeholder="Nominee Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />{" "}
              <input
                type="text"
                placeholder="Category"
                className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] text-[#111827]"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />{" "}
              <input
                type="text"
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
              <button
                type="submit"
                className="py-3 bg-[#2563EB] text-white w-full rounded-md font-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNominee;
