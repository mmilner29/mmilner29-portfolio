import React from "react";
import Modal from "../Modal";

class Portfolio extends React.Component {
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
      
    render() {
        
    return (
        <section className="project-section">
            <div className="project">
                <article className="proj">
                    
                    <div id="img1" class="toggle-button"
                        onClick={e => {
                        this.showModal();
                    }}><img src={require("../../assets/lucky-duck.png")} alt="Lucky-Duck Home Page" ></img></div>
                    <button class="toggle-button"
                        id="centered-toggle-button"
                        onClick={e => {
                        this.showModal();
                    }}
                    > <h3 className="proj-centered" id="white">Lucky-Duck</h3></button>
                    <Modal onClose={this.showModal} show={this.state.show}>
                    <a href="https://github.com/mmilner29/Lucky-Duck" target="_blank" rel="noreferrer">View Github</a>
                    <a href="https://scenic-great-basin-78312.herokuapp.com/" target="_blank" rel="noreferrer">View Deployed Project</a>
                    </Modal>
                </article>
            </div>
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
}

export default Portfolio;