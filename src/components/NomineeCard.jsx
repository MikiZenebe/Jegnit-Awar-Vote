/* eslint-disable react/prop-types */
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function NomineeCard({ nominee, category, voterId }) {
  const [hasVoted, setHasVoted] = useState(false);

  // Check voting status on load
  useEffect(() => {
    const checkVote = async () => {
      // Check local storage first
      const localVoteStatus = localStorage.getItem(`${voterId}_${category}`);
      if (localVoteStatus) {
        setHasVoted(true);
        return;
      }

      // If not found in local storage, check Firestore
      try {
        const voteRef = doc(db, "votes", `${voterId}_${category}`);
        const existingVote = await getDoc(voteRef);
        if (existingVote.exists()) {
          setHasVoted(true);
          localStorage.setItem(`${voterId}_${category}`, "true"); // Save in local storage for faster subsequent checks
        }
      } catch (error) {
        console.error("Error checking vote:", error);
      }
    };

    checkVote();
  }, [voterId, category]);

  async function handleVote() {
    if (hasVoted) {
      toast.error("You have already voted in this category!");
      return;
    }

    try {
      const voteRef = doc(db, "votes", `${voterId}_${category}`);
      const nomineeRef = doc(db, "nominees", nominee.id);

      await setDoc(voteRef, {
        nomineeId: nominee.id,
        category,
        voterId,
      });

      await updateDoc(nomineeRef, {
        votes: nominee.votes + 1,
      });
      window.location.reload();
      setHasVoted(true);
      toast.success(`Your vote for ${nominee.name} has been recorded!`);
    } catch (error) {
      console.error("Error saving vote:", error);
      toast.error("An error occurred. Please try again.");
    }
  }

  return (
    <div className="">
      <div className="w-full flex items-center justify-center  ">
        <article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden ">
          <div>
            <img
              className="object-cover h-64 w-full"
              src={nominee.imageUrl}
              alt={nominee.name}
            />
          </div>

          <div className="flex flex-col gap-3 my-4 px-4">
            <div className="text-lg font-semibold text-gray-800  flex justify-between items-center">
              <div> {nominee.name}</div>
              <div className="font-normal text-gray-600  text-sm">
                #{nominee.category}
              </div>
            </div>

            <div className="font-semibold text-gray-800 ">
              Votes: {nominee.votes}
            </div>
          </div>

          <div className=" p-4 border-t border-gray-200 ">
            <button
              className="bg-[#FFB001] text-gray-800 font-semibold rounded px-4 py-2  w-full hover:bg-yellow-600 disabled:cursor-not-allowed disabled:bg-[#968f81]"
              onClick={handleVote}
              disabled={hasVoted}
            >
              {hasVoted ? "You Already Voted" : "Vote"}
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default NomineeCard;
