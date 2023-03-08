import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    let navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const PostData = async (e) => {
        e.preventDefault()

        let name = document.getElementById('uname').value;
        let pwd = document.getElementById('pwd').value;

        if (name != null && pwd != null) {
            if (name == 'admin') {
                if (pwd == 'admin@123') {
                    navigate('/test');
                }
                else {
                    alert("Invalid Password");
                }
            }
            else {
                alert("Invalid Username");
            }
        }
        else {
            alert("Enter username and password");
        }

    }

    return (
        <section class="header" width="auto">
            <nav>
                <a href="index.html">Edu <span>Com</span></a>
                <div class="nav-links" id="navlinks">
                    <i class="fa-solid fa-xmark"></i>
                    <ul>
                        <li onClick={goToHome}><a>HOME</a></li>
                    </ul>
                </div>
            </nav>
            <div class="center">
                <h1>Login</h1>
                <form method="post">
                    <div class="txt_field">
                        <label>Username   </label>
                        <input type="text" id='uname' required />
                        <span></span>

                    </div>
                    <div class="txt_field">
                        <label>Password   </label>
                        <input type="password" id='pwd' required />
                        <span></span>

                    </div>
                    <div class="pass"><a>Forgot Password?</a></div>
                    <button onClick={PostData}>Submit</button>
                </form>
            </div>
        </section>
    )
}
export default Login