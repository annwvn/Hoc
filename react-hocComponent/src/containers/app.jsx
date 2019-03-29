import React from "react";
import Closes from "comp/layout/cloase";
import Load from "comp/route/router/index";

import "common/css/bootstrap.min.css";
import "common/css/reset.css";
import "common/css/common.css";
import "common/css/style.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return <div className="wraper">
            <Closes/>
            <Load/>
        </div>
    }
}
export default App;