import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About(){
    return(
        <div className={styles.about}>
            <h1>About the project</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nam eget massa vitae enim tincidunt iaculis non et diam.
                Duis non sapien sem. Suspendisse lobortis nulla quis tortor lobortis, et varius risus fermentum. 
                Aenean sagittis quam tortor, quis aliquet leo vehicula eu. 
                Vestibulum sit amet ipsum porta, efficitur ante ac, dapibus diam.
            </p>
            <Image src="/images/charizard.png" height="300" width="300" alt="Charizard" />
        </div>
    );
}