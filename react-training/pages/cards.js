import React,{Component} from 'react';
import 'isomorphic-fetch'

export default class Cards extends Component {
    static async getInitialProps ({query}){
        const res = await fetch('https://api.pokemontcg.io/v1/cards/' + query.id)
        const data = res.json()
        return data
    } 
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h2>{this.props.card.name}</h2>
                <img src={this.props.card.imageUrl} />
            </div>
        )
    }
}
