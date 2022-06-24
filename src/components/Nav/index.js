import React from "react";

function Nav(props) {

    // const handleClick = (item) => {
    //     console.log(item);
    //     return item;
    // };

    const {
        navCategories = [],
        setCurrentCategory,
        currentCategory,
      } = props;

    return (
        <header>
            <h1>
                <a href="/mmilner29-portfolio">
                    Madi Milner
                </a>
            </h1>
        <nav>
            <ul>
            {navCategories.map((category) => (

                <li className={` ${
                        currentCategory.name === category.name && 'active'
                        }`} key={category.name}>
                    <span
                        onClick={() => {
                        setCurrentCategory(category)
                        }}
                    >
                        {category.name}
                    </span>
                </li>
            ))}
            </ul>
        </nav>
    </header>
    )
}

export default Nav;