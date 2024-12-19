import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Analytics() {
  const [nominees, setNominees] = useState([]);

  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const nomineesSnapshot = await getDocs(collection(db, "nominees"));
        const nomineesList = nomineesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort nominees by votes in descending order
        const sortedNominees = nomineesList.sort((a, b) => b.votes - a.votes);
        setNominees(sortedNominees);
      } catch (error) {
        console.error("Error fetching nominees:", error);
      }
    };

    fetchNominees();
  }, []);
  return (
    <div className="max-w-screen-lg mx-auto p-4 my-[5rem]">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Most Voted Nominees
      </h1>

      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto ">
        <thead className="bg-[#111827]">
          <tr className="">
            <th
              scope="col"
              className="px-6 py-3  text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Rank
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3  text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3  text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Votes
            </th>
          </tr>
        </thead>
        {nominees.map((nominee, i) => (
          <tbody key={i} className="bg-[#111827] divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-100 text-center">{i + 1}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center justify-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={nominee?.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-100  text-center">
                      {nominee.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-center text-gray-100">
                  {nominee.category}
                </div>
              </td>

              <td className="text-center py-4 whitespace-nowrap text-sm text-gray-100">
                {nominee.votes}
              </td>

              {/* <td
                onClick={() => handleDeleteNominee(nominee.id)}
                className="px-6 py-4 whitespace-nowrap text-sm text-red-500 font-semibold cursor-pointer"
              >
                {loading ? "Proccessing..." : "Delete"}
              </td> */}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
