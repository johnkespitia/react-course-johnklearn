import React from 'react';

import './styles/PageError.css';

function useIncresaseCount(max){
  const [count, setCount] = React.useState(0)
  if(count > max){
    setCount(0)
  }
  return [count,setCount]
}

function PageError(props) {
  const [count, setCount] = useIncresaseCount(5)
  return <div className="PageError">❌{props.error.message}😱 
    <button onClick={()=>{
      setCount(count+1)
}}>increase count: {count}</button>
  </div>;
}

export default PageError;