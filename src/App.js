 import { Route, Routes } from "react-router-dom";
import Users from "./Features/Users";
import AddUser from "./Features/AddUser";
import EditUser from "./Features/EditUser";

function App() {
  return (
    <div className="container mx-auto  px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center text-3xl font-bold text-gray-800 m-5">Crud Application</h1>

      <Routes>
        <Route path="/" element={<Users/>}/> 
        <Route path="/add-user" element={<AddUser/>}/> 
        <Route path="/edit-user/:id" element={<EditUser/>}/> 
      </Routes>
    </div>
  );
}

export default App;
