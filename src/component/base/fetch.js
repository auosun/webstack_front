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
    }

    componentDidMount() {
        fetch(BACKEND_URL(this.BACKEND_URL_KEY))
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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
}

export default FetchBase;