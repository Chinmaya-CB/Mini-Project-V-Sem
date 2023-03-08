import React from 'react';
import { useNavigate } from "react-router-dom";

function Home() {

  let navigate = useNavigate();

  const goToTeacher = () => {
    navigate("/login");
  };
  const goToStudent = () => {
    navigate("/student");
  };


  return (
    <section class="header">
      <nav>
        <a href="index.html">Edu <span>Com</span></a>
      
      <div class="nav-links" id="navlinks">
        <i class="fa-solid_fa-xmark"></i>
        <ul>
          <li onClick={goToTeacher}><a>Login as Teacher</a></li>
          <li onClick={goToStudent}><a>Login as Student</a></li>
        </ul>
      </div>
    </nav>
    </section>
  )
}
export default Home