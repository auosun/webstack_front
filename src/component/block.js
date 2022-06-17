import FetchBase from "./base/fetch";
import React from "react";

class iTag extends React.Component {
    render() {
        return (
            <i className="linecons-tag" style="margin-right: 7px;" id={this.props.value}>

            </i>
        )
    }
}

class MenuTag extends FetchBase {
    BACKEND_URL_KEY = 'menu'

    render() {
        const {error, isLoaded, items} = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading</div>
        } else {
            return (
                <div>
                    {items.map(item => (
                        <h4 className="text-gray">
                            <iTag value={item.name}/>
                            {item.name}
                        </h4>
                    ))}
                </div>
            )
        }
    }

}


// function Block() {
//     return (
//         <div>
//             {Tag}
//             <div className="row">
//                 <div className="col-sm-3">
//                     <div className="xe-widget xe-conversations box2 label-info"
//                          onClick="window.open('{{ website.url }}', '_blank')"
//                          data-toggle="tooltip" data-placement="bottom" title=""
//                          data-original-title="{{ website.title }}">
//                         <div className="xe-comment-entry">
//                             <a className="xe-user-img"><img data-src="{{ website.icon }}" className="lozad img-circle"
//                                                             width="40"/></a>
//                             <div className="xe-comment">
//                                 <a href="#" className="xe-user-name overflowClip_1">
//                                     <strong>name</strong>
//                                 </a>
//                                 <p className="overflowClip_2">description</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default MenuTag;