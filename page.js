import Image from "next/image";
import './style.css';
import './Header.css';
import './footer.css';
import './content.css';




export default function Home() {
  return (

    <main>


      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">Blog</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      <h1 class="design">My Hobbies</h1>
      <div class="hobbies">
        <ul>
          <li>• Cooking</li>
          <li>• Cleaning</li>
          <li>• Playing Frisbee</li>
          <li>• Coding</li>
          <li>• Watching Movies</li>
          <li>• Watching Series</li>
          <li>• Eating</li>

        </ul>

      </div>

      <h1 class="design">About Me</h1>
      <div class="aboutme">
        <h1>Interests:</h1>
        <p>Technology, coding, web development, and exploring the latest trends in the digital world.</p>

        <br></br>

        <h1>Life story:</h1>
        <p>I Jive John Doe, a passionate tech enthusiast from Iloilo City, have always been fascinated by the limitless possibilities
          of the digital realm. After completing my studies, I dove headfirst into the world of coding, spending countless
          hours learning various programming languages and developing my skills.</p>

        <br></br>

        <h1>skills:</h1>

        <ul>
          <li>• Python</li>
          <li>• Dart & Flutter</li>
          <li>• Godot</li>
          <li>• HTML, CSS, JS</li>
          <li>• C#</li>

        </ul>


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
