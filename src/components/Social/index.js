import React from "react";

function Social () {
    return (
        <section className="social">
            <div>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/mmilner29/" target="_blank" rel="noreferrer"><img src={require("../../assets/linkedin-6-32.png")} alt="LinkedIn icon"></img></a>
                    </li>
                    <li>
                        <a href="https://github.com/mmilner29" target="_blank" rel="noreferrer"><img src={require("../../assets/GitHub-Mark-Light-32px.png")} alt="LinkedIn icon"></img></a>
                    </li>

                </ul>
            </div>
        </section>
    )
}

export default Social;