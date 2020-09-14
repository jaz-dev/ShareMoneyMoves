import Head from 'next/head'
import { useState } from 'react';
import MyVerticallyCenteredModal from '../components/verticallyCenteredModal'
import Button from 'react-bootstrap/Button'
import Post from '../components/post'
import fetch from 'isomorphic-unfetch'

export async function getServerSideProps(context) {
    // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://profilesfetch.vercel.app/api/profiles/newIndex")
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts

    }
  }
}
export default function Home({posts}) {
  const [modalShow, setModalShow] = React.useState(false);
  //<Poll heading="Who's the GOAT?" desc="who, in your opinion, is the best basketball player of all time?" choices={["MJ","Kobe","LeBron"]} />
  console.log(posts.posts)
  console.log("Hi")
  return (
    <>
      <Head>
        <title>ShareMoneyMoves</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>
      <div style={{"backgroundColor": 'silver', "minHeight": "100vh"}}>
      <section>
        <center>
          <h1>Share<span style={{"color": 'green'}}>Money</span><span style={{"color": 'red'}}>Moves</span></h1>
          <h3>Share your stock gains and losses and how you got them</h3>
          <h5>Click <a href="/guidelines">here</a> for site guidelines</h5>
        </center>
      </section>
      <br/>
      <section>
        <center>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            POST A MONEY MOVE
          </Button>
        </center>
        <br/>
        {
          posts.posts.map(
            p => (
              <div key={p.date}><Post date={p.date} percent={p.percent} amount={p.amount} title={p.title} explanation={p.explanation} type={p.type}/><br/><br/></div>
            )
          )
        }
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
      </div>
    </>
  )
}


