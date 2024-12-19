/* eslint-disable react/prop-types */
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function NomineeCard({ nominee, category, voterId }) {
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const checkVote = async () => {
      const voteRef = doc(db, "votes", `${voterId}_${category}`);
      const existingVote = await getDoc(voteRef);
      setHasVoted(existingVote.exists());
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

      setHasVoted(true);
      toast.success(`Your vote for ${nominee.name} has been recorded!`);
    } catch (error) {
      console.error("Error saving vote:", error);
      toast.error("An error occurred. Please try again.");
    }
  }

  return (
    <div className="border rounded-lg p-4 shadow">
      <img
        src={nominee.imageUrl}
        alt={nominee.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{nominee.name}</h3>
      <p className="text-gray-600">{nominee.description}</p>
      <div className="flex w-full justify-end">
        <p className="text-gray-500 mt-2">Votes: {nominee.votes || 0}</p>
      </div>
      <button
        className="bg-[#FFB001] text-white rounded px-4 py-2 mt-4 w-full hover:bg-yellow-600 disabled:cursor-not-allowed disabled:bg-[#968f81]"
        onClick={handleVote}
        disabled={hasVoted}
      >
        {hasVoted ? "You Already Voted" : "Vote"}
      </button>
    </div>
  );
}

export default NomineeCard;
