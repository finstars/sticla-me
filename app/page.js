import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Don't Bottle Up, Recycle Smart</h1>
      <p className={styles.description}>
        Recycling is essential for the environment. Proper recycling reduces
        waste, saves energy, and keeps our planet clean. Join us in making a
        difference by recycling smart!
      </p>
      <button className={styles.joinWaitlistButton}>Join Waitlist</button>
    </div>
  );
}
