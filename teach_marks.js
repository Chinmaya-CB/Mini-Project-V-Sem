import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {db} from './firebasecon';
import { getDatabase, ref, set } from "firebase/database";

function Marks() {
   
    const [details, setDetails] = useState({
        usn: '',
        cie1: '',
        cie2: '',
        cie3: '',

    })

    const PostData = async (e) => {
        
        e.preventDefault()
        var usn = document.getElementById('usn').value;
        var cie1 = document.getElementById('cie1').value;
        var cie2 = document.getElementById('cie2').value;
        var cie3 = document.getElementById('cie3').value;


        if (usn != null && cie1 != null && cie2 != null && cie3 != null) {
            console.log("rtshr");
            
            set(ref(db, 'marks/' + usn), {
                cie1:cie1,
                cie2:cie2,
                cie3:cie3,
            }).then(alert("Marks Successfully Entered"));
            
            
        }
    }

    let navigate = useNavigate();
    
    const goToHome = () => {
        navigate("/");
    };

    const goToSignup = () => {
        navigate("/test");
    };
    
    const goToView = () =>{
        navigate("/view");
    };
    
    const goToviewRes = () =>{
        navigate("/results");
    };
    
    const goToResource = () => {
        navigate("/res_upload");
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
                        <li onClick={goToResource}><a href="">NOTES</a></li>
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
                                <span class="details">Enter Students's USN</span>
                                <input type="text" name="USNt" id="usn" placeholder="Enter USN" required onChange={(e) => setDetails({ ...details, USN: e.target.value })} />
                            </div>
                            <br />
                            <div class="input-box">
                                <span class="details">Enter CIE 1 Marks</span>
                                <input type="text" name="tCIE1" id="cie1" placeholder="Enter (marks scored/total marks)" onChange={(e) => setDetails({ ...details, CIE1: e.target.value })} />
                            </div>
                            <br />
                            <div class="input-box">
                                <span class="details">Enter CIE 2 Marks</span>
                                <input type="text" name="tCIE2" id="cie2" placeholder="Enter (marks scored/total marks)" onChange={(e) => setDetails({ ...details, CIE2: e.target.value })} />
                            </div>
                            <br />
                            <div class="input-box">
                                <span class="details">Enter CIE 3 Marks</span>
                                <input type="text" name="tCIE3" id="cie3" placeholder="Enter (marks scored/total marks)" onChange={(e) => setDetails({ ...details, CIE3: e.target.value })} />
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

export default Marks
