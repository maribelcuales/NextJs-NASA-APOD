import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function PhotoCard(props) {
  return (
    <div>
      <img
        className="nasa-photo-of-the-day"
        src={props.nasaPhoto.url}
        alt="Nasa Photo of the Day"
      />
      <h2>{props.nasaPhoto.title}</h2>
      <p>Image Credit and Copyright: {props.nasaPhoto.copyright}</p>
      <p>{props.nasaPhoto.explanation}</p>
      <p>Date: {props.nasaPhoto.date}</p>
      <p>Content and Image Credit: NASA</p>
    </div>
  );
}
