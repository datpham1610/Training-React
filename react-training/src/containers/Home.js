import React,{useState,lazy, Suspense} from 'react'

const RandomText = lazy(()=>import('../components/RandomText'))

export default function Home(){
  const [isRdandomtext, setIsRandomText] = useState(false)
  const TooggleRandomText = () =>{
    setIsRandomText(!isRdandomtext)
  }
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div>Hello World!</div>
        <button onClick={TooggleRandomText}>Toggle Random Text</button>
        {isRdandomtext ? <RandomText/> : ''}
      </div>
    </Suspense>
  )
}
