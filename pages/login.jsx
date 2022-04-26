// import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/User.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <Layout
        title="Login | DigitalCur"
        desc="DigitalCur"
        icon1="/icons/gamesphysical.svg"
        icon2="/icons/gamesdigital.svg"
        icon3="/icons/games.svg"
        icon4="/icons/gamesstreaming.svg"
        class1="item"
        class2="item"
        class3="item"
        class4="item"
      >
      <div className={styles.containerLogin}>
        <div className={styles.login}>
          <h2>LOGIN</h2>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <div className={styles.info}>
            <Link href="/register">
              <a>CREATE ACCOUNT</a>
            </Link>
            <a href="#">I FORGOT THE PASSWORD</a>
          </div>
          <button onClick={() => router.push("/user")} className={styles.submit} type="submit">
            Log in
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
