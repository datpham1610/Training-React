import React,{Component} from 'react';
import fetch from 'isomorphic-unfetch'
import Layout from '../componens/MyLayout'
import Link from 'next/link'


export default class App extends Component {
  constructor(props){
    super(props)
  }

  static async getInitialProps(){
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    return {shows:data.map(value => value.show)}
  }

  render() {
    return (
      <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
          {this.props.shows.map(show =>(
            <li key={show.id}>
              <Link href={`/show?id=${show.id}`} as={`/show/${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}
