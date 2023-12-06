import classes from "./hero.module.css";
import Image from "next/image";
export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/Harsh.jpg" alt="An Image showing Harsh." height={300} width={300}/>
            </div>
            <h1>Hi! I am Harsh</h1>
            <p>I blog about web development.</p>
        </section>
    )
}