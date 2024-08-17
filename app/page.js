import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homepage}>
      {/* <h3>Sticla</h3> */}
      <h1 className={styles.title}><span>Sticla</span>.me</h1>
      <p className={styles.description}>Don't Bottle Up, Recycle Smart</p>
      <button className={styles.joinWaitlistButton}>Join Waitlist</button>
    </div>
  );
}
