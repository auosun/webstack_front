import FetchBase from "../base/fetch";
import React from "react";


class Site extends React.Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="xe-widget xe-conversations box2 label-info"
                     onClick={() => window.open(this.props.value.url, '_blank')}
                     data-toggle="tooltip" data-placement="bottom" title=""
                     data-original-title={this.props.value.title}>
                    <div className="xe-comment-entry">
                        <a className="xe-user-img">
                            <img src={this.props.value.icon} className="lozad img-circle" width="40" alt=""/>
                        </a>
                        <div className="xe-comment">
                            <a className="xe-user-name overflowClip_1">
                                <strong>{this.props.value.name}</strong>
                            </a>
                            <p className="overflowClip_2">{this.props.value.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class SiteList extends React.Component {

    constructor(props) {
        super(props);
    }

    sliceToLists(value) {
        const items = []
        value.forEach(function (item, index) {
            if (items.length === (Math.floor(index/4))){
                items.push([])
            }

            items[Math.floor(index/4)].push(item)
        })

        return items
    }

    render() {
        return (
            <>
                {this.sliceToLists(this.props.value).map(sites => (
                    <div className="row">
                        {sites.map(site => (
                            <Site value={site}/>
                        ))}
                    </div>
                ))}
            </>
        )
    }
}


class Block extends FetchBase {
    BACKEND_URL_KEY = 'sites'

    constructor(props) {
        super(props);
        this.getUrl = this.getUrl.bind(this)
    }

    getUrl() {
        if (this.props.params["env"] !== 'default') {
            return super.getUrl() + '?' + new URLSearchParams(this.props.params).toString()
        }

        return super.getUrl();
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.params !== prevProps.params) {
            this.fetchRest()
        }
    }

    render() {

        const {error, isLoaded, items} = this.state
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