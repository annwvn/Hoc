import React,{Component} from "react";

const Layout = (Comnent)=>{
    return function(Target){
        return class extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    flag:false
                }
            }
            clickBind(val){
                this.setState({flag:val})
                
            }
            render() {
                return <Target>
                {
                    this.state.flag?<Comnent glag={()=>this.clickBind()}/>:null
                }
                    <button className="btn" type="button" onClick={()=>{
                        this.setState({flag:!this.state.flag})
                    }}>弹出</button>
                </Target>
            }
        }
    }   
}

export default Layout;