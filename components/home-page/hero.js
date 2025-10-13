import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/acris-blanchardi.jpeg"
          alt="An image showing the author."
          width={300}
          height={300}
        />
      </div>
      <h1>Acris Blanchardi</h1>
      <p>
        {"A small (1.6-3.8 cm), moist-skinned hylid frog. He's also "}
        an <b> assiduous software developer</b>
      </p>
    </section>
  );
}
