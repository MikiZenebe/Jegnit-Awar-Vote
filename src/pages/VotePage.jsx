import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import NomineeCard from "../components/NomineeCard";
import Cookies from "js-cookie";
import Loader from "../components/Loader";

function generateVoterId() {
  return `voter_${Math.random().toString(36).substr(2, 9)}`;
}

export default function VotePage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [nominees, setNominees] = useState([]);
  const [loading, setLoading] = useState(false);

  const voterId = Cookies.get("voterId") || generateVoterId();
  useEffect(() => {
    Cookies.set("voterId", voterId, { expires: 30 });
  }, [voterId]);

  useEffect(() => {
    // Fetch unique categories
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const nomineesSnapshot = await getDocs(collection(db, "nominees"));
        const allCategories = new Set(
          nomineesSnapshot.docs.map((doc) => doc.data().category)
        );
        setCategories([...allCategories]);
        setSelectedCategory([...allCategories][0]); // Select the first category by default
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Fetch nominees for the selected category
      setLoading(true);
      const q = query(
        collection(db, "nominees"),
        where("category", "==", selectedCategory)
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const nomineesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNominees(nomineesData);
        setLoading(false);
      });

      // Cleanup listener on category change
      return () => unsubscribe();
    }
  }, [selectedCategory]);

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {/* Category List */}
      <div className="flex gap-4 justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "underline text-[#FFB001] font-semibold"
                : " text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Nominee Cards */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nominees.map((nominee) => (
            <NomineeCard
              key={nominee.id}
              nominee={nominee}
              category={selectedCategory}
              voterId={voterId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
