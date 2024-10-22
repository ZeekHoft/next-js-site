import Image from "next/image";
import './style.css';
import './Header.css';
import './footer.css';


export default function Home() {
  return (

    <main>


      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">Blog</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>


      <div>
        contents
      </div>


      <footer className="footer">
        <p><a href="jive@gmail.com">jive@gmail.com</a></p>
        <p><a href="Facebook">Facebook</a></p>
        <p><a href="Instagram">Instagram</a></p>
        <p>&copy; {new Date().getFullYear()} Co & Cains</p>
      </footer>
    </main>

  );
}
