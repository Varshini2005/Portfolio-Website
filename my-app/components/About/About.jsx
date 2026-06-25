import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about"  className={`flex items-center justify-between p-12 ${styles.about}`}>
      <div className={'${styles.text}'}>
        <h2 className="text-4xl font-bold">Hi, I'm Varshini Gopi</h2>

        <p className="p-4">
          Computer Science student passionate about AI, Machine Learning,
          Federated Learning, and Privacy-Preserving Technologies.
        </p>
      
        <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ">
      View Projects

        </button>
      </div>

      <Image
        className="rounded-full shadow-xl"
        src="/Varshini.JPG"
        alt="Varshini Gopi"
        width={300}
        height={300}
      />
    </section>
  );
}