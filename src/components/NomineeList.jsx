import { useEffect, useState } from "react";
import { db } from "../firebase"; // Import Firestore
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import toast from "react-hot-toast";

function NomineeList() {
  const [nominees, setNominees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNominees = async () => {
      const nomineeRef = collection(db, "nominees");
      const nomineeSnapshot = await getDocs(nomineeRef);
      const nomineeList = nomineeSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNominees(nomineeList);
    };

    fetchNominees();
  }, []);

  const handleDeleteNominee = async (nomineeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this nominee?"
    );

    if (confirmDelete) {
      setLoading(true);
      try {
        const docRef = doc(db, "nominees", nomineeId);
        await deleteDoc(docRef);
        toast.success("Nominee deleted successfully!");

        setNominees((prevNominees) =>
          prevNominees.filter((nominee) => nominee.id !== nomineeId)
        );
      } catch (error) {
        console.error("Error deleting nominee:", error);
        toast.error("Error deleting nominee");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <div className="overflow-auto max-w-4xl  mx-auto">
        <div className="w-full mx-auto text-center my-5">
          <h1 className="text-4xl font-bold">Nominees List!</h1>
        </div>

        {nominees.length === 0 ? (
          <div className="text-5xl">No nominess avaliable</div>
        ) : (
          <div className="overflow-auto">
            <table className="min-w-full divide-y divide-gray-200 max-h-[90vh] overflow-auto ">
              <thead className="bg-[#111827]">
                <tr className="">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              {nominees.map((nominee, i) => (
                <tbody
                  key={i}
                  className="bg-[#111827] divide-y divide-gray-200"
                >
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={nominee?.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-100 ">
                            {nominee.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-100">
                        {nominee.category}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                      {nominee.description}
                    </td>

                    <td
                      onClick={() => handleDeleteNominee(nominee.id)}
                      className="px-6 py-4 whitespace-nowrap text-sm text-red-500 font-semibold cursor-pointer"
                    >
                      {loading ? "Proccessing..." : "Delete"}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default NomineeList;
