import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function PhotoCard(props) {
  return (
    <main className={styles.main}>
      <div className={styles.photoContainer}>
        <Image
          className="nasa-photo"
          src={props.nasaPhoto.url}
          alt="Nasa Photo of the Day"
          height={600}
          width={800}
        />
      </div>
      <div className={styles.photoDetails}>
        <h2 className={styles.photoTitle}>{props.nasaPhoto.title}</h2>
        <p className={styles.copyright}>
          Image Credit and Copyright: {props.nasaPhoto.copyright}
        </p>
        <p className={styles.photoDesc}>{props.nasaPhoto.explanation}</p>
        <div>
          <p className={styles.date}>Date: {props.nasaPhoto.date}</p>
          <p>Content and Image Credit: NASA</p>
        </div>
      </div>
    </main>
  );
}
