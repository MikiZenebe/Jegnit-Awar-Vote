import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col gap-[3rem] w-full mx-auto">
        <h2 className="text-center text-3xl">Welcome to the Admin Dashboard</h2>

        <div className="max-w-2xl mx-auto">
          <div className="flex gap-[2rem]">
            {" "}
            <button className="bg-[#FFB001] text-blue-950 p-4 rounded-xl">
              <Link to="/add">Add Nominne</Link>
            </button>
            <button className="bg-[#FFB001] text-blue-950 p-4 rounded-xl">
              <Link to="/list">Nominne List</Link>
            </button>
          </div>
        </div>
      </div>
      {/* We'll add more features like nominee management here later */}
    </div>
  );
};
