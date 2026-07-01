import styles from "./Navbar.module.css"
export default function Navbar(){
return(
     <nav className={styles.navbar}>
      <h2>Varshini Gopi</h2>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Blogs">Blogs</a></li>
   
      </ul>
    </nav>
);
}