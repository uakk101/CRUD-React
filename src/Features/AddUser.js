import { React, useState } from "react";
import TextFeild from "../components/TextFeild";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';

const AddUser = () => {

  const dispatch = useDispatch();


  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  const HandleAddUser = () => {
    setValue({name : '' , email : ''})
    dispatch(addUser({
      id: Math.floor(Math.random() * 1000) + 1,
      name: value.name,
      email: value.email,

    }))

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
      <Button onClick={HandleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
