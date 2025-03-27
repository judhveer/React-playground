import React from 'react'

export default function ChangeValue() {

    const [count, setCount] = useState(0);

  function handleAdd(){
    setCount(count+1);
    
  }

  function handleSub(){
    setCount(count-1);
  }

  function handleAddBy2(){
    setCount((count) => count+1);
    setCount((count) => count+1);
  }

  function handleReset(){
    setCount(0);
  }

  return (

    <>
        <div className="App">
            <div className="box">
              <p>{count}</p>
              <button 
              onClick={handleAdd}
              className='add'>ADD</button>
              <br /> <br />

              <button 
              onClick={handleAddBy2}
              className='addBy2'>Add by 2</button>

              <br /> <br />

              <button 
              onClick={handleSub}
              className='sub'>SUB</button>
            </div>

            <br /> <br />

            <button
            onClick={handleReset} 
            className='reset'>Reset</button>
        </div>
    </>
    
  )
};
