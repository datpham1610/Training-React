import React,{Component} from 'react';
import 'isomorphic-fetch'
import Link from 'next/link'


export default class App extends Component {
  constructor(props){
    super(props)
  }
  static async getInitialProps(){
    const res = await fetch('https://api.pokemontcg.io/v1/cards?pages=1&pageSize=12')
    const data = res.json()
    return data
  }
  //Lúc này hàm getInitialProps sẽ chạy trước để lấy dữ liệu từ API 
  render() {
    return (
      <div>
        {this.props.cards.map((card,i)=>(
          <div key = {i} style={{width:200, float:'left'}}>
            <h4 >{card.name}</h4>
            <Link href={`/cards?id=${card.id}`}>
              <img src={card.imageUrl} style={{width:150}} />
            </Link>
          </div>
        ))
        }
      </div>
    )
  }
}
