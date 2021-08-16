import React, { useRef } from "react";

import Router from "next/router";
import Cookies from "js-cookie";
import styles from "../styles/SignIn.module.css";
import Header from "../components/Header/Header";
export default function SignIn() {
  const emailRef = useRef();
  const passRef = useRef();

  function signInUser() {
    if (emailRef && passRef) {
      fetch("http://mearsy-backend.herokuapp.com/authApi/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailRef.current.value.toLocaleLowerCase(),
          password: passRef.current.value,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          Cookies.set("user_id", result.userId);
          localStorage.setItem("user_id", result.userId);
          localStorage.setItem("user_token", result.token);
          Router.push("/Articles");
        })
        .catch((e) => alert(e));
    }
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <input
          ref={emailRef}
          className={styles.signInput}
          placeholder="Email"
          type="email"
        />
        <input
          ref={passRef}
          className={styles.signInput}
          placeholder="Password"
          type="password"
        />
        <button
          onClick={signInUser}
          className={styles.signButton}
          type="submit"
        >
          Sign In
        </button>
      </div>
    </>
  );
}
