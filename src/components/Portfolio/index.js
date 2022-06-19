import React from "react";

function Portfolio () {
    return (
        <section className="project-section">
            <div className="project">
                <article className="proj">
                    <h3 className="proj-centered">Web-Dev-Social</h3>
                    
                    <a href="https://github.com/Boris-Veselov/web-dev-social" target="_blank" id="img1" rel="noreferrer"><img src={require("../../assets/web-dev-social.png")} alt="Web-Dev-Social Home Page" ></img></a>
                </article>
            </div>
            <div className="project">
             <article className="proj">
                    <h3 className="proj-centered">Run Buddy</h3>
                
                    <a href="https://github.com/mmilner29/run-buddy" target="_blank" rel="noreferrer"><img src={require("../../assets/run-buddy.png")} alt="Run-Buddy Website Preview"></img></a>
                </article>
            </div>
            <div className="project">
                <article className="proj">
                    <h3 className="proj-centered">Recipe Hub</h3>
                    
                    <a href="https://github.com/mmilner29/the-recipe-hub" target="_blank" id="img1" rel="noreferrer"><img src={require("../../assets/recipe-hub.png")} alt="Recipe Hub Home Page" ></img></a>
                </article>
            </div>
            <div className="project">
                <article className="proj">
                    <h3 className="proj-centered" id="white">Taskmaster Pro</h3>
                    
                    <a href="https://github.com/mmilner29/taskmaster-pro" target="_blank" id="img1" rel="noreferrer"><img src={require("../../assets/taskmaster-pro.png")} alt="Taskmaster Pro Home Page" ></img></a>
                </article>
            </div>
        </section>

    )
}

export default Portfolio;