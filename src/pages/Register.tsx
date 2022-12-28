import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { FormEvent, useState } from "react";

export function Register() {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event: any) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })
  }

  const submitFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    console.log('user created')
  };

  return (
    <>
      <form onSubmit={submitFormHandler} className="bg-zinc-800">
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
        <input type="submit" value="create" />
      </form>
    </>
  );
}
