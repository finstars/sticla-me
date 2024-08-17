import Image from "next/image";
import styles from "./page.module.css";
import AutoPlayAudio from "./AutoPlayAudio";

export default function Home() {
  return (
    <div className={styles.homepage}>
      {/* <h3>Sticla</h3> */}
      <h1 className={styles.title}><span>sticla</span>.me</h1>
      <p className={styles.description}>Recicleazǎ-mǎ</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhQuQBESXXreeSkUnwmTRTdWyVk78GiOP17pL72_ID9kiqDQ/viewform?usp=sf_link" target="_blank" className={styles.joinWaitlistButton}>Ține-mǎ la curent</a>
      <AutoPlayAudio />
    </div>
  );
}
