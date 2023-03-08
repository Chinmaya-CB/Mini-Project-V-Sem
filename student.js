import React from 'react';
import { useNavigate } from "react-router-dom";
function Student(){
        let navigate = useNavigate();

        const goToView = () => {
            navigate("/view");
        };
        const goToviewRes = () => {
            navigate("/results");
        };
        const goToResource = () => {
            navigate("/res_view");
        };

    return(
        <section class="header">
            <nav>
                <a href="index.html">Edu <span>Com</span></a>
            
            <div class="nav-links" id="navlinks">
                    <i class="fa-solid fa-xmark"></i>
                    <ul>
                        <li onClick={goToView}><a>VIEW ATTENDANCE</a></li>
                        <li onClick={goToviewRes}><a>VIEW RESULTS</a></li>
                        <li onClick={goToResource}><a>NOTES</a></li>
                    </ul>
            </div>
            </nav>
        </section>
    )
}
export default Student