/* eslint-disable no-unused-vars */
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import axios from "axios";

function AddNominee() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "voting_preset");
    formData.append("cloud_name", "dcj1talnd");

    try {
      setUploading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcj1talnd/image/upload",
        formData
      );

      setImageUrl(res.data.secure_url);
      setUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
    }
  };

  const handleAddNominee = async (e) => {
    e.preventDefault();

    try {
      if (!imageUrl) {
        alert("Please upload an image");
        return;
      }
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
      setFile(null);
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
                placeholder="Category"
                className="py-3 p-5 rounded-md  bg-zinc-50 md:w-[500px] w-[300px] text-[#111827]"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />{" "}
              <div>
                {uploading && <p>Uploading image...</p>}
                {imageUrl && (
                  <img
                    className="object-cover rounded-full"
                    src={imageUrl}
                    alt="Uploaded"
                    width={50}
                  />
                )}
              </div>
              <label className="cursor-pointer" htmlFor="image">
                Upload an Image
              </label>
              <input
                type="file"
                id="image"
                placeholder="Image URL"
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                type="submit"
                className="py-3 bg-[#FFB001] text-blue-950 text-white w-full rounded-md font-bold"
                disabled={uploading}
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
