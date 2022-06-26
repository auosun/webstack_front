import React from "react";
import {BACKEND_URL} from "../../constant"

class FetchBase extends React.Component {
    BACKEND_URL_KEY = 'group'

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.fetchRest = this.fetchRest.bind(this)
    }

    getUrl() {
        return BACKEND_URL(this.BACKEND_URL_KEY)
    }

    exec_result(result) {
        return result
    }

    fetchRest() {
        fetch(this.getUrl())
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: this.exec_result(result)
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    componentDidMount() {
        this.fetchRest()
    }


    componentWillUnmount() {
        this.setState(
            {
                error: null,
                isLoaded: false,
                items: []
            }
        )
    }
}

export default FetchBase;