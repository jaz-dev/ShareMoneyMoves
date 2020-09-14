import React, { Component } from "react"
import postStyles from '../styles/postStyles.module.css'



class Post extends Component{
  constructor(props){
    super(props)
  }

	render(){
 		return(
 			<>
	 			<div className={postStyles.container}>
	 				<div className={postStyles.percentBox}>
		 				{this.props.type=="gain"
					        ? <h2 style={{color: "green"}}>+ {this.props.percent}%</h2>
					        : <h2 style={{color: "red"}}>- {this.props.percent}%</h2>
	      				}
	 				</div>

	 				<div className={postStyles.numberBox}>
		 				{this.props.type=="gain"
					        ? <h2 style={{color: "green"}}>+ ${this.props.amount}</h2>
					        : <h2 style={{color: "red"}}>- ${this.props.amount}</h2>
	      				}
	 				</div>

	 				<div className={postStyles.dateBox}>
	 				  <h8>{this.props.date}</h8>
	 				</div>
	 				<div className={postStyles.infoBox}>
	 					<h3 style={{marginLeft: "5px",marginTop: "5px"}}>{this.props.title}</h3>
	 					<p style={{marginLeft: "5px"}}>{this.props.explanation}</p>
	 				</div>
	 			</div>
 			</>
		)
	}

}




export default Post;