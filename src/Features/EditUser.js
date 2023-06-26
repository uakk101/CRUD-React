import { React, useState } from "react";
import TextFeild from "../components/TextFeild";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  const HandleEditUser = () => {
    setValue({name : '' , email : ''})
    console.log(value);
    navigate('/');

  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextFeild
        label="Name"
        inputProps={{ type: "text", placeholder: "jhon Doe" }}
        value={value.name}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
      />
      <br />
      <TextFeild
        label="Email"
        inputProps={{ type: "email", placeholder: "jhonDoe@gmail.com" }}
        onChange={(e) => setValue({ ...value, email: e.target.value })}
        value={value.email}
      />
      <Button onClick={HandleEditUser}>Edit User</Button>
    </div>
  );
}

export default EditUser