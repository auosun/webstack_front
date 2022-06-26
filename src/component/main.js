import React from "react";
import Sidebar from "./sidebar/sidebar";
import MainContent from "./content/mainContent";
import FetchBase from "./base/fetch";

class Main extends FetchBase {
    BACKEND_URL_KEY = 'group'

    render() {
        const {error, isLoaded, items} = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded){
            return <div>Loading</div>
        } else {
            return (
                <>
                    <Sidebar groups={items}/>
                    <MainContent groups={items}/>
                </>
            );
        }
    }

}

export default Main;
