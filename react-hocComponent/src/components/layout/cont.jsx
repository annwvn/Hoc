import React from "react";


class Cont extends React.Component {
    static defaultProps = {
		title:"弹出框",
		tit:'我是默认值'
    }
    onclicH(){
        this.props.glag("false")
        
    }
    render() {
        return  <div className="header">
                    <div className="mack">
                        <p className="con">{this.props.title}</p>
                        <p className="con">{this.props.tit}</p>
                    <div className="divbtn"><button className="confim">确定</button><button className="del" onClick={()=>this.onclicH()}>取消</button></div>
                </div>
        </div>
    }    
}

export default Cont;