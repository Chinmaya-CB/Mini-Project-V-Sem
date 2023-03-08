import React from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate } from "react-router-dom";

function ResView() {
 
    const PostData = async (e) => {
        
        let sub=document.getElementById('sub').value;
        
        const dbRef = ref(getDatabase());
        
        get(child(dbRef, `resources/${sub}`)).then((snapshot) => {
        
            if (snapshot.exists()) {
                var a = snapshot.val().link;
                alert("The link for your subject '"+sub+"' is here: " +a);
                
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
    
    const goToAtt = () =>{
        navigate("/view");
    };
    
    return (
        <section class="header">
            <nav>
                <a href="index.html">Edu <span>Com</span></a>
                <div class="nav-links" id="navlinks">
                    <i class="fa-solid fa-xmark"></i>
                    <ul>
                        <li onClick={goToHome}><a href="">HOME</a></li>
                        <li onClick={goToAtt}><a href="">ATTENDANCE</a></li>
                        <li onClick={goToviewRes}><a href="">VIEW RESULTS</a></li>
                    </ul>
                </div>
                <i class="fa-solid fa-bars" onclick="showMenu()"></i>
            </nav>
            <div class="container">
                <div class="title">View Resources</div>
                <div class="content">
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">Enter Subject Name</span>
                            <input type="text" name="tUSN" id="sub" placeholder="Enter Sub"></input>
                            
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
export default ResView