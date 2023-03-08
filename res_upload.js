import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { db } from './firebasecon';
import { getDatabase, ref, set } from "firebase/database";

function Resources() {
    
    const [details, setDetails] = useState({
        sub:'',
        link:'',

    })

    const PostData = async (e) => {
        e.preventDefault()
        var sub = document.getElementById('sub').value;
        var link = document.getElementById('link').value;

        //const res = await fetch("https://mini-project-356e2-default-rtdb.firebaseio.com/resources.json");
        if (sub != null && link != null) {
            console.log("rtshr");
            set(ref(db, 'resources/' + sub), {
                link: link,
            }).then(alert("Resource Link Successfully Entered"));


        }
    }
    
    let navigate = useNavigate();
    
    const goToHome = () => {
        navigate("/");
    };
    
    const goToSignup = () => {
        navigate("/test");
    };
    
    const goToView = () => {
        navigate("/view");
    };
    
    const goToviewRes = () => {
        navigate("/results");
    };
    
    const goToResults = () => {
        navigate("/teach_marks");
    };

    return (
        <section class="header">
            <nav>
                <a href="index.html">Edu <span>Com</span></a>
                <div class="nav-links" id="navlinks">
                    <i class="fa-solid fa-xmark"></i>
                    <ul>
                        <li onClick={goToHome}><a href="">HOME</a></li>
                        <li onClick={goToSignup}><a href="">ATTENDANCE</a></li>
                        <li onClick={goToResults}><a href="">RESULTS</a></li>
                        <li onClick={goToView}><a href="">VIEW ATTENDANCE</a></li>
                        <li onClick={goToviewRes}><a href="">VIEW RESULTS</a></li>

                    </ul>
                </div>
                <i class="fa-solid fa-bars"></i>
            </nav>
            <div class="container">
                <div class="title">Upload Marks</div>
                <div class="content">
                    <form action="">
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Enter Subject Name</span>
                                <input type="text" name="USNt" id="sub" placeholder="Enter Subject" required onChange={(e) => setDetails({ ...details, sub: e.target.value })} />
                            </div>
                            <br />
                            <div class="input-box">
                                <span class="details">Enter Link</span>
                                <input type="text" name="tCIE1" id="link" placeholder="Enter Link" onChange={(e) => setDetails({ ...details, link: e.target.value })} />
                            </div>
                            <br />

                        </div>
                    </form>
                </div>
                <div class="button">
                    <button onClick={PostData}>Submit</button>
                </div>
            </div>
        </section >
    )
}

export default Resources
