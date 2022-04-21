import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "../../styles/User.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
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
    <Layout title="Register | DigitalCur" desc="DigitalCur">
      <div className={styles.containerRegister}>
        <div className={styles.register1Container}>
          <div className={styles.register1}>
            <h2>Register</h2>
            <h3>Step One</h3>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Lastname" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Repeat Password" />
            <button onClick={handleClick} className={styles.submit} type="submit">
              Next Step
            </button>
          </div>
        </div>
        <div className={styles.register2Container}>
          <div id="finish" className={styles.register2}>
            <h2 >Step 2</h2>
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Direction" />
            <input type="text" placeholder="Height" />
            <input type="text" placeholder="Postal Code" />
            <button className={styles.submit} onClick={handleClick2} type="submit">
              Finish
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
