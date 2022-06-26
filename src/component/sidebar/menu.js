import React from "react";


class Menu extends React.Component {

    render() {
        return (
            <ul id="main-menu" className="main-menu">
                {this.props.groups.map(item => (
                    <li key={item.id}>
                        <a href={"#" + item.name} className="smooth">
                            <i className={item.icon}></i>
                            <span className="title">{item.name}</span>
                        </a>
                    </li>
                ))}

                <li>
                    <a>
                        <i className="linecons-heart"></i>
                        <span className="tooltip-blue">关于本站</span>
                        <span className="label label-Primary pull-right hidden-collapsed">♥︎</span>
                    </a>
                </li>
            </ul>
        )
    }

}

export default Menu;
