import React from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate } from "react-router-dom";

function View() {
 
    const PostData = async (e) => {
        
        let usn=document.getElementById('usn').value;
        let month=document.getElementById('month').value;
        
        const dbRef = ref(getDatabase());
        
        get(child(dbRef, `attendance/${usn}/${month}`)).then((snapshot) => {
            if (snapshot.exists()) {
                var a = snapshot.val().attend;
                alert("USN "+usn+" has attended "+a+" classes in the month of "+month);
                //console.log(snapshot.val().attend);
                
            } else {
                alert("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    
    let navigate = useNavigate();
    
    const goToHome = () => {
        navigate("/");
      };
    
      const goToviewRes = () =>{
        navigate("/results");
    };
    
    return (
        <section class="header">
            <nav>
                <a href="index.html">Edu <span>Com</span></a>
                <div class="nav-links" id="navlinks">
                    <i class="fa-solid fa-xmark"></i>
                    <ul>
                        <li onClick={goToHome}><a href="">HOME</a></li>
                        <li><a href="">NOTES</a></li>
                        <li onClick={goToviewRes}><a href="">VIEW RESULTS</a></li>
                    </ul>
                </div>
                <i class="fa-solid fa-bars" onclick="showMenu()"></i>
            </nav>
            <div class="container">
                <div class="title">View Attendance</div>
                <div class="content">
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">Enter Students's USN</span>
                            <input type="text" name="tUSN" id="usn" placeholder="Enter USN"></input>
                            <span class="details">Enter Month</span>
                            <input type="text" name="month" id="month" placeholder="Enter Month"></input>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={PostData}>Submit</button>
                </div>
            </div>
        </section>
    )
}
export default View