import React from "react";
import FetchBase from "../base/fetch";


function IterToJson(items, key) {
    var item_map = new Map();
    items.map(item => (
        item_map.set(item[key], item)
    ))
    return item_map
}


class EnvNavItems extends FetchBase {
    BACKEND_URL_KEY = 'env'

    render() {
        const {error, isLoaded, items} = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading</div>
        } else {

            const environmentDict = IterToJson(items, "id")
            const now_env = environmentDict.get(this.props.environment)

            return (
                <li className="dropdown hover-line language-switcher">
                    <a className="dropdown-toggle" data-toggle="dropdown">
                        {/*<img src={process.env.PUBLIC_URL+'/assets/images/flags/flag-cn.png'} alt="flag-cn"/> */}
                        {now_env ? now_env.name : "默认环境"}
                    </a>
                    <ul className="dropdown-menu languages">
                        <li className={this.props.environment === 'default' ? "active" : "deactive"} onClick={() => {
                            this.props.setEnvironment('default')
                        }}>
                            <a>
                                {/*<img src={process.env.PUBLIC_URL+'/assets/images/flags/flag-cn.png'} alt="flag-cn"/> */}
                                默认环境
                            </a>
                        </li>
                        {items.map(item => (
                            <li className={this.props.environment === item.id ? "active" : "deactive"} onClick={() => {
                                this.props.setEnvironment(item.id)
                            }}>
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
                    <EnvNavItems environment={this.props.environment} setEnvironment={this.props.setEnvironment}/>
                </ul>
                <ul className="user-info-menu left-links list-inline list-unstyled" style={{float: "right"}}>
                    <li>
                        <a href="/api/admin">后台管理</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;
