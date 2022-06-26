import React from "react";
import Menu from "./menu";

class Sidebar extends React.Component {

    render() {
        return (
            <div className="sidebar-menu toggle-others fixed">
                <div className="sidebar-menu-inner">
                    <header className="logo-env">
                        <div className="logo">
                            <a href="index.html" className="logo-expanded">
                                <img src="../assets/images/logo@2x.png" width="100%" alt=""/>
                            </a>
                            <a href="index.html" className="logo-collapsed">
                                <img src="../assets/images/logo-collapsed@2x.png" width="40" alt=""/>
                            </a>
                        </div>
                        <div className="mobile-menu-toggle visible-xs">
                            <a href="#" data-toggle="user-info-menu">
                                <i className="linecons-cog"></i>
                            </a>
                            <a href="#" data-toggle="mobile-menu">
                                <i className="fa-bars"></i>
                            </a>
                        </div>
                    </header>
                    <Menu groups={this.props.groups}/>
                </div>
            </div>
        );
    }
}
export default Sidebar;