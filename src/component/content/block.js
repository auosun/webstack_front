import FetchBase from "../base/fetch";
import React from "react";
import {BACKEND_URL} from "../../constant";


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
                                    <a className="xe-user-name overflowClip_1">
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


class Block extends FetchBase {
    BACKEND_URL_KEY = 'sites'

    getUrl() {
        if (this.props.hasOwnProperty("params")){
            return super.getUrl() + '?' + new URLSearchParams(this.props.params).toString()
        }

        return super.getUrl();
    }

    componentDidMount() {
        super.componentDidMount();
    }

    exec_result(result) {
        const site_map = new Map()
        result.forEach(function (element) {
            if (!site_map.has(element['group'])) {
                site_map.set(element['group'], []);
            }

            site_map.get(element['group']).push(element);
        })
        return site_map
    }

    render() {
        const {error, isLoaded, items } = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading</div>
        } else {
            return (
                <>
                    {this.props.groups.map(item => (
                        <>
                            <h4 className="text-gray">
                                <i className="linecons-tag" style={{"margin-right": "7px"}} id={item.name}/>
                                {item.name}
                            </h4>
                            <SiteList value={items.get(item.id) ? items.get(item.id) : []}/>
                            <br/>
                        </>
                    ))}
                </>
            )
        }
    }
}

export default Block;