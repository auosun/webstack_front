import FetchBase from "./base/fetch";
import React from "react";
import {BACKEND_URL} from "../constant";


class SiteList extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.value.map(item => (
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={() => window.open(item.url, '_blank')}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title={item.title}>
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img src={item.icon} className="lozad img-circle" width="40" alt=""/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>{item.name}</strong>
                                    </a>
                                    <p className="overflowClip_2">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}


class MenuTag extends FetchBase {
    BACKEND_URL_KEY = 'group'

    constructor(props) {
        super(props);
        this.state = {
            site_state: {
                isLoaded: false,
                item_map: {},
                error: null
            }
        }
    }

    fetch_sites(params) {
        fetch(BACKEND_URL('sites') + '?' + new URLSearchParams(params).toString())
            .then(res => res.json())
            .then(data => {
                const site_map = new Map()
                data.forEach(function (element) {
                    if (!site_map.has(element['group'])) {
                        site_map.set(element['group'], []);
                    }

                    site_map.get(element['group']).push(element);
                })

                this.setState({
                    site_state: {
                        isLoaded: true,
                        item_map: site_map
                    }
                })
            })
            .catch((error) => {
                this.setState({
                    site_state: {
                        isLoaded: true,
                        error: error
                    }
                })
            })
    }

    componentDidMount() {
        super.componentDidMount();
        this.fetch_sites({})
    }

    render() {
        const {error, isLoaded, items, site_state} = this.state
        if (error || site_state.error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded || !site_state.isLoaded) {
            return <div>Loading</div>
        } else {
            return (
                <>
                    {items.map(item => (
                        <>
                            <h4 className="text-gray">
                                <i className="linecons-tag" style={{"margin-right": "7px"}} id={item.name}/>
                                {item.name}
                            </h4>
                            <SiteList value={site_state.item_map.get(item.id) ? site_state.item_map.get(item.id) : []}/>
                            <br/>
                        </>
                    ))}
                </>
            )
        }
    }
}


function Block() {
    return (
        <div>
            <MenuTag/>
        </div>
    );
}

export default Block;