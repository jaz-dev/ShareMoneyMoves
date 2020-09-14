import React, { Component } from "react"
import Head from 'next/head'
import pncStyles from '../styles/proNcon.module.css'
import Button from 'react-bootstrap/Button';
import AddCommentBox from '../components/addCommentBox'

class PNCColumns extends Component{
  constructor(props){
    super(props)
    this.state = {pros:[],cons:[],topic:props.topic,topicDesc:props.topicDesc}
  }

  componentDidMount(){
  	let proArr = ["hello youngin","wassup yessirski","yurrburr polar bear playa","b","b","b","b","b","b","b","b","b","b","b","b"]
  	//let proArr = ["hello youngin","wassup yessirski"]
    let conArr =["np that was bad","lol you not the best","not worth your time","b","b","b","b","b","b","b","b","b","b","b","b"]
    proArr=proArr.map((pro,ind)=><p className={pncStyles.proComment} key={ind}>{pro}</p>);
    conArr=conArr.map((con,ind)=><p className={pncStyles.conComment} key={ind}>{con}</p>);
    this.setState({
    	pros:proArr,
    	cons:conArr
    })
  }
  render(){
  	return(
  		<>
		  	<Head>
		  		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		  		</link>
		  	</Head>

		    <div className={pncStyles.container}>
		    	<div className={pncStyles.header}>
		    		<center>
			    		<h1>{this.state.topic}</h1>
			    		<p>{this.state.topicDesc}</p>
		    		</center>
		    	</div>

		    	
			    <label className={pncStyles.proHeader} for="pro"><input id="pro" type="radio" name="pro-con"/>Pro</label>
			    <label className={pncStyles.conHeader} for="con"><input id="con" type="radio" name="pro-con"/>Con</label>
			    <button className={pncStyles.submitVote} type="submit">Submit</button>

				  <AddCommentBox className={pncStyles.proAddButton} typist="pro"/>
			    <AddCommentBox className={pncStyles.conAddButton} typist="con"/>

		    	<div className={pncStyles.prosColumn}>{this.state.pros}</div>
		    	<div className={pncStyles.consColumn}>{this.state.cons}</div>

		    </div>
	    </>
	  )
  }
}

export default PNCColumns;