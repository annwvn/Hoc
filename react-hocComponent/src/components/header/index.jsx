import React from "react";
class Header extends React.Component {
    render() {
		return <header>
				<Repe1/>
				<Repe3/>
				<Repe4/>
    		</header>
    }
}
class Repe2 extends React.Component{
	static defaultProps = {
		title:"弹出框",
		tit:'我是默认值'
	}
	constructor(){
		super()
		this.state={
			flag:false,
		}
	}
	render() {
		const { flag } = this.state;
		const { title ,tit} = this.props;
		console.log(this.props,'5');
		return <div className="tip">
			{
			flag?<div className="header">
					{
						this.props.name === 'R2'?<div className="mack"><p className="con">{this.props.tip?this.props.tip:title}</p>
						<p className="con">{this.props.tit?this.props.tit:tit}</p>
						{this.props.children}</div>:<div className="mack">{this.props.children}</div>
					}
					
					
				</div>:null
			}
			<button className="btn" type="button" onClick={()=>{
				this.setState({flag:!flag})
			}}>弹出</button>
		</div>
    }
}
const RepeHeader3 =(Component)=>{
	return class extends React.Component{
		constructor(){
			super()
			this.state={
				tip:"提示框",
				tit:'孩子，你太美了！'
			}
		}
		render(){			
			return <div>
				<Component name="R2" {...this.state}>
					<div className="divbtn"><button className="confim">确定</button></div>
				</Component>
			</div>
		}
	}

}

const RepeHeader2 =(Component)=>{
	return class extends React.Component{
		constructor(){
			super()
			this.state={
				tip:"弹出框",
				tit:'可以啊，可以'
			}
		}
		render(){
			return <div>
				<Repe2 name="R2" {...this.state}></Repe2>
			</div>
		}
	}

}

const RepeHeader1 =(Component)=>{
	return class extends React.Component{
		render(){
			return <div>
				<Component name="confi">
					<p className="inp"><input type="text" placeholder="输入你所想的"/></p>
					<div className="divbtn"><button className="confim">确定</button><button className="del">取消</button></div>
				</Component> 
			</div>
		}
	}
}
// 把函数作为参数传入，这样的函数称为高阶函数，函数式编程就是指这种高度抽象的编程范式
const Repe1 = RepeHeader1(Repe2)
const Repe3 = RepeHeader3(Repe2)
const Repe4 = RepeHeader2(Repe2)
export default Header;
