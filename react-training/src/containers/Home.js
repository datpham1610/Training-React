import React,{useState} from 'react'
import Loadable from 'react-loadable'


const LoadableRandomText = Loadable({
  loader(){
    return import('../components/RandomText');
  },
  loading(){
    return <div>Loading...</div>
  }
})

export default function Home(){
  const [isRdandomtext, setIsRandomText] = useState(false)
  const TooggleRandomText = () =>{
    setIsRandomText(!isRdandomtext)
  }
  return(
    <div>
      <div>Hello World!</div>
      <button onClick={TooggleRandomText}>Toggle Random Text</button>
      {isRdandomtext ? <LoadableRandomText/> : ''}
    </div>
  )
}
