import Head from 'next/head'
import Button from 'react-bootstrap/Button'

export default function GLPage() {
	return(
	<>
	  <Head>
      <title>Guidelines</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
    </Head>
		<div style={{"backgroundColor": 'silver', "height": "100vh"}}>
			<h1 style={{marginLeft: "5px"}}>Site Guidlines</h1>
			<ol>
			  <li>Be honest with your posts</li>
			  <li>Use appropriate langauge</li>
			  <li>Have fun!</li>
			</ol>
			<Button variant="info" href="/" style={{marginLeft: "5px"}}>Back</Button>
		</div>
	</>
	)
}
