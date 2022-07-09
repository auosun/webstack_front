import React from "react";
import Nav from "./nav";
import Block from "./block";
import cookie from "react-cookies";


class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="main-footer sticky footer-type-1">
                <div className="footer-inner">
                    <div className="footer-text">
                        &copy; 2017-2022
                        <a href="../cn/about.html"><strong>WebStack</strong></a> design by <a
                        href="https://www.viggoz.com" target="_blank" rel="noreferrer"><strong>Viggo</strong></a>
                    </div>
                    <div className="go-up">
                        <a href="#" rel="go-top">
                            <i className="fa-angle-up"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

class MainContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            environment: parseInt(cookie.load('web_env')) ? parseInt(cookie.load('web_env')) : 'default'
        }
        console.log(this.state)
        this.setEnvironment = this.setEnvironment.bind(this)
    }

    setEnvironment(env) {
        cookie.save('web_env', env)
        this.setState({environment: env})
    }

    render() {
        return (
            <div className="main-content">
                <Nav environment={this.state.environment} setEnvironment={this.setEnvironment}/>
                <Block groups={this.props.groups} params={{env: this.state.environment}}/>
                <Footer/>
            </div>
        );
    }
}

export default MainContent;