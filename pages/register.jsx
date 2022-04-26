// import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/User.module.scss";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("#finish");
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <Layout
      title="Register | DigitalCur"
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
      <div className={styles.containerRegister}>
        <div className={styles.register1Container}>
          <div className={styles.register1}>
            <h2>REGISTER</h2>
            {/* <h3>Step One</h3> */}
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Lastname" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Repeat Password" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Direction" />
            <input type="text" placeholder="Height" />
            <input type="text" placeholder="Postal Code" />
            <button
              className={styles.submit}
              onClick={handleClick2}
              type="submit"
            >
              Finish
            </button>
            {/* <button
              onClick={handleClick}
              className={styles.submit}
              type="submit"
            >
              Next Step
            </button> */}
          </div>
        </div>
        {/* <div className={styles.register2Container}> */}
        {/* <div id="finish" className={styles.register2}> */}
        {/* <h2>Step 2</h2> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </Layout>
  );
};

export default Register;
