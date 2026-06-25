import styles from "./Navbar.module.css"
export default function Navbar(){
return(
     <nav className={styles.navbar}>
      <h2>Varshini Gopi</h2>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#Expeience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
);
}