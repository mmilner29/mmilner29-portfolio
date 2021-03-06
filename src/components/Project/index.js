import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Project( { currentCategory }) {

    if (currentCategory.name === `About`) {
        return(
            <section>
                <About></About>
            </section>
        )
    } else if (currentCategory.name === 'Portfolio') {
        return (
            <section>
                <Portfolio></Portfolio>
            </section>
        )
    } else if (currentCategory.name === 'Contact') {
        return (
            <section>
                <Contact></Contact>
            </section>
        )
    } else if (currentCategory.name === 'Resume') {
        return(
            <section>
                <Resume></Resume>
            </section>
        )
    } else {
        return(
            <section>
                <About></About>
            </section>
        )
    }
}

export default Project;