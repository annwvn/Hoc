import React from 'react'
import Cont from "./cont";
import Layout from "./index";

@Layout(Cont)
class Closes extends React.Component {
    render() {
        return <div className="tip">
            弹出框
            {this.props.children}
        </div>
    }
}
export default Closes;