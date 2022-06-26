import React from "react";
import FetchBase from "../base/fetch";


class EnvNavItems extends FetchBase {
    BACKEND_URL_KEY = 'env'

    render() {
        const {error, isLoaded, items} = this.state
        if (error ) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded){
            return <div>Loading</div>
        } else {
            return (
                <li className="dropdown hover-line language-switcher">
                    <a className="dropdown-toggle" data-toggle="dropdown">
                        {/*<img src={process.env.PUBLIC_URL+'/assets/images/flags/flag-cn.png'} alt="flag-cn"/> */}
                        默认环境
                    </a>
                    <ul className="dropdown-menu languages">
                        <li className="active">
                            <a>
                                {/*<img src={process.env.PUBLIC_URL+'/assets/images/flags/flag-cn.png'} alt="flag-cn"/> */}
                                默认环境
                            </a>
                        </li>
                        {items.map(item => (
                            <li className="active">
                                <a>
                                    {/*<img src={process.env.PUBLIC_URL+'/assets/images/flags/flag-cn.png'} alt="flag-cn"/> */}
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
            )
        }
    }
}


class Nav extends React.Component {

    render() {
        return (
            <nav className="navbar user-info-navbar" role="navigation">
                <ul className="user-info-menu left-links list-inline list-unstyled">
                    <li className="hidden-sm hidden-xs">
                        <a data-toggle="sidebar">
                            <i className="fa-bars"></i>
                        </a>
                    </li>
                    <EnvNavItems />
                </ul>
            </nav>
        )
    }
}

export default Nav;
