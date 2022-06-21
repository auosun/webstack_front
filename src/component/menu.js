import React from "react";
import FetchBase from "./base/fetch";


class Menu extends FetchBase {
    BACKEND_URL_KEY = 'group'

    render() {
        const {error, isLoaded, items} = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading</div>
        } else {
            return (
                <ul id="main-menu" className="main-menu">
                    {items.map(item => (
                        <li key={item.id}>
                            <a href={"#" + item.name} className="smooth">
                                <i className={item.icon}></i>
                                <span className="title">{item.name}</span>
                            </a>
                        </li>
                    ))}

                    <li>
                        <a href="">
                            <i className="linecons-heart"></i>
                            <span className="tooltip-blue">关于本站</span>
                            <span className="label label-Primary pull-right hidden-collapsed">♥︎</span>
                        </a>
                    </li>
                </ul>
            )
        }
    }

}

export default Menu;
