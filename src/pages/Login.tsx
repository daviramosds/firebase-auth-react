import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../lib/firebase";

export function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const submitFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { user } = await signInWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    console.log(user);
  };

  return (
    <form onSubmit={submitFormHandler} className="flex flex-col">
      <input
        className="border-2 border-zinc-800"
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <input type="submit" value="login" />
    </form>
  );
}
