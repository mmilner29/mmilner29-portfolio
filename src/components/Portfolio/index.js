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
                    <div class="modal-div">
                    <a href="https://scenic-great-basin-78312.herokuapp.com/" target="_blank" rel="noreferrer">View Deployed Project</a>
                        <a href="https://github.com/mmilner29/Lucky-Duck" target="_blank" rel="noreferrer">View Github</a>
                    </div>
                        <p>
                            An app designed to help pet-owners find their pet. Built with Performant JavaScript, NoSQL databases, React 
                            single-page application, GraphQL APIs, Concurrent servers with a MERN app, and JWT Authentication. 
                        </p>
                    </Modal>
                </article>
            </div>
            <div className="project">
                <article className="proj">
                <div id="img1" class="toggle-button"
                        onClick={e => {
                        this.showModal();
                    }}><img src={require("../../assets/web-dev-social.png")} alt="Web-Dev Social Home Page" ></img></div>
                    <button class="toggle-button"
                        id="centered-toggle-button"
                        onClick={e => {
                        this.showModal();
                    }}
                    > <h3 className="proj-centered">Web-Dev Social</h3></button>
                    <Modal onClose={this.showModal} show={this.state.show}>
                        <div class="modal-div">
                            <a href="https://guarded-atoll-65920.herokuapp.com/" target="_blank" rel="noreferrer">View Deployed Project</a>
                            <a href="https://github.com/Boris-Veselov/web-dev-social" target="_blank" rel="noreferrer">View Github</a>
                        </div>
                        <p>
                        A social networking platform that helps prospective web development bootcamp participants to connect with current 
                        and past bootcamp survivors. Built with JavaScript, HTML, CSS, Node.js and Express.js for a REST API, Handlebars.js,
                        MySQL, and Sequelize.
                        </p>
                    </Modal>
                </article>
            </div>
            <div className="project">
                <article className="proj">
                    
                    <div id="img1" class="toggle-button"
                        onClick={e => {
                        this.showModal();
                    }}><img src={require("../../assets/taskmaster-pro.png")} alt="Taskmaster Pro Home Page" ></img></div>
                    <button class="toggle-button"
                        id="centered-toggle-button"
                        onClick={e => {
                        this.showModal();
                    }}
                    > <h3 className="proj-centered" id="white">Taskmaster Pro</h3></button>
                    <Modal onClose={this.showModal} show={this.state.show}>
                        <div class="modal-div">
                            <a href="https://mmilner29.github.io/taskmaster-pro/" target="_blank" rel="noreferrer">Deployed Project</a>
                            <a href="https://github.com/mmilner29/taskmaster-pro" target="_blank" rel="noreferrer">Github</a>
                        </div>
        
                        <p>
                            Taskmaster Pro is a task management application that allows users to create tasks with descriptions and due dates, 
                            move tasks to categories such as To Do, In Progress, In Review, and Done, edit tasks, delete tasks, 
                            and delete all tasks. Built with Javascript, jQuery, Bootstrap, CSS, HTML.
                        </p>
                    </Modal>
                </article>
            </div>
            {/* <div className="project">
                <article className="proj">
                <div id="img1" class="toggle-button"
                        onClick={e => {
                        this.showModal();
                    }}><img src={require("../../assets/run-buddy.png")} alt="Run Buddy Home Page" ></img></div>
                    <button class="toggle-button"
                        id="centered-toggle-button"
                        onClick={e => {
                        this.showModal();
                    }}
                    > <h3 className="proj-centered">Run Buddy</h3></button>
                    <Modal onClose={this.showModal} show={this.state.show}>
                    <a href="https://github.com/mmilner29/run-buddy" target="_blank" rel="noreferrer">View Github</a>
                    <a href="https://mmilner29.github.io/run-buddy/" target="_blank" rel="noreferrer">View Deployed Project</a>
                    </Modal>
                </article>
            </div> */}
            <div className="project">
                <article className="proj">
                <div id="img1" class="toggle-button"
                        onClick={e => {
                        this.showModal();
                    }}><img src={require("../../assets/recipe-hub.png")} alt="Recipe Hub Home Page" ></img></div>
                    <button class="toggle-button"
                        id="centered-toggle-button"
                        onClick={e => {
                        this.showModal();
                    }}
                    > <h3 className="proj-centered">Recipe Hub</h3></button>
                    <Modal onClose={this.showModal} show={this.state.show}>
                        <div class="modal-div">
                            <a href="https://mmilner29.github.io/the-recipe-hub/" target="_blank" rel="noreferrer">View Deployed Project</a>
                            <a href="https://github.com/mmilner29/the-recipe-hub" target="_blank" rel="noreferrer">View Github</a>
                        </div>

                        <p>
                            A random food and cocktail recipe generator to spice up your routine. Built with HTML, CSS, 
                            JavaScript, and Skeleton.
                        </p>
                    </Modal>
                </article>
            </div>
            
        </section>

    )
}
}

export default Portfolio;