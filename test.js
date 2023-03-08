import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import { db } from './firebasecon';

function FirebaseDemo() {

    const [details, setDetails] = useState({
        usn: '',
        month: '',
        attend: '',

    })

    const PostData = async (e) => {

        e.preventDefault()
        var usn = document.getElementById('usn').value;
        var month = document.getElementById('month').value;
        var attend = document.getElementById('attend').value;
        if (usn != null && month != null && attend != null) {
            console.log("rtshr");

            set(ref(db, 'attendance/' + usn + "/" + month), {
                attend: attend,
                month: month,
            }).then(alert("Attendance Successfully Entered"));


        }
    }

    let navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const goToSignup = () => {
        navigate("/teach_marks");
    };

    const goToView = () => {
        navigate("/view");
    };

    const goToviewRes = () => {
        navigate("/results");
    };

    const gotoResource = () => {
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
                        <li onClick={gotoResource}><a href="">NOTES</a></li>
                        <li onClick={goToSignup}><a href="">RESULTS</a></li>
                        <li onClick={goToView}><a href="">VIEW ATTENDANCE</a></li>
                        <li onClick={goToviewRes}><a href="">VIEW RESULTS</a></li>
                    </ul>
                </div>
                <i class="fa-solid fa-bars" onclick="showMenu()"></i>
            </nav>
            <div class="container">
                <div class="title">Update Attendance</div>
                <div class="content">
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">Enter Students's USN</span>
                            <input type="text" name="tUSN" id="usn" placeholder="Enter USN" required onChange={(e) =>
                                setDetails({ ...details, USN: e.target.value })} />
                        </div>
                        <br />
                        <div class="input-box">
                            <span class="details">Enter Month</span>
                            <input type="text" name="tMonth" id="month" placeholder="Enter 3 letters like 'Jan' " required onChange={(e) =>
                                setDetails({ ...details, Month: e.target.value })} />
                        </div>
                        <br />
                        <div class="input-box">
                            <span class="details">Enter Attendance</span>
                            <input type="text" name="tAttend" id="attend" placeholder="(classes attended/total classes)" onChange={(e) =>
                                setDetails({ ...details, Attend: e.target.value })} />
                        </div>
                        <br />
                    </div>
                </div>
                <button onClick={PostData}>Submit</button>

            </div>
        </section>
    )
}

export default FirebaseDemo