import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/background.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}> Mini site pour test de competence</h1>
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt="" />
      </div>
    </div>
  );
}
