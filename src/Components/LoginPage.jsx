import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({
  token,
  setToken,
  isLoggedIn,
  setLoggedIn,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function fetchUser(username, password) {
    const res = await fetch(
      "https://fakestoreapi.com/auth/login",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );
    //.then((res) => res.json())
    // .then((json) => console.log(json));
    const result = await res.json();
    console.log(result);
    localStorage.setItem("token", JSON.stringify(result.token));
    console.log(token);
    setToken(token);
    setLoggedIn(true);
    console.log(token);
    console.log(isLoggedIn);
    alert(`Successfully Logged in as ${username}`);
    navigate("/products");
    return result;
  }

  async function handleSubmit1(event) {
    event.preventDefault();
    await fetchUser(username, password);
    console.log(username, password);
  }

  return (
    // Assume that a person visiting this page is a first time user or that isLoggedIn(false);
    // Gonna have to use dummy data, and preset username and password
    // Also need to set token to local storage upon successful log in
    // UN: "donero"  PW: "ewedon"
    <>
      <div>
        <h1 className="LoginWelcome">Welcome Back! Log in Below</h1>
        <br></br>
        <h3></h3>
      </div>
      <br></br>
      <br></br>
      <form className="LoginForm" onSubmit={handleSubmit1}>
        <label htmlFor="Username">
          Username{" "}
          <input
            className="label1"
            placeholder="Username"
            id="username"
            value={username}
            type="username"
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
        </label>
        <br></br>
        <br></br>
        <label htmlFor="password">
          Password:{" "}
          <input
            className="label1"
            placeholder="*************"
            id="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className="button1" type="submit">
          Log in
        </button>
        <br></br>
        <br></br>
      </form>
    </>
  );
}
