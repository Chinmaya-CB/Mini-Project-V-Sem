import React from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate } from "react-router-dom";

function Result() {
 
    
    const PostData = async (e) => {
        
        let usn=document.getElementById('usn').value;
        
        const dbRef = ref(getDatabase());
        
        get(child(dbRef, `marks/${usn}`)).then((snapshot) => {
            if (snapshot.exists()) {
                var cie1= snapshot.val().cie1;
                var cie2= snapshot.val().cie2;
                var cie3= snapshot.val().cie3;
                alert("Scores of USN: "+usn+" \nCIE 1 = "+cie1+"\nCIE 2 = "+cie2+"\nCIE 3 = "+cie3);
                //console.log(snapshot.val());
                
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
    
    const gotoviewAtt = () => {
        navigate("/view");
    };
    
    const goToResource = () =>{
        navigate('/res_view');
    };
    
    return (
        <section class="header">
            <nav>
                <a href="index.html">Edu <span>Com</span></a>
                <div class="nav-links" id="navlinks">
                    <i class="fa-solid fa-xmark"></i>
                    <ul>
                        <li onClick={goToHome}><a href="">HOME</a></li>
                        <li onClick={goToResource}><a href="">NOTES</a></li>
                        <li onClick={gotoviewAtt}><a href="">VIEW ATTENDANCE</a></li>
                    </ul>
                </div>
                <i class="fa-solid fa-bars" onclick="showMenu()"></i>
            </nav>
            <div class="container">
                <div class="title">View Results</div>
                <div class="content">
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">Enter Students's USN</span>
                            <input type="text" name="tUSN" id="usn" placeholder="Enter USN"></input>
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
export default Result