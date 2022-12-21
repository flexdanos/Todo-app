import React,{useState, useEffect, useRef} from 'react'

let data;
function TodoForm (props){
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        data={input}
         console.log(data);
        setInput("")

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
  return (
    
      <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
         <>   
     <input 
      type="text" 
      placeholder='update your item'
       value={input} 
      name ="text"
       className='todo-input'
       onChange={(event)=>setInput(event.target.value)}
       ref ={inputRef}
        />
        <button className="btn btn-outline">update</button>
        </>
        ):(
         <>  
        <input 
        type="text" 
        placeholder='Add a todo'
         value={input} 
        name ="text"
         className='todo-input'
         onChange={(event)=>setInput(event.target.value)}
         ref ={inputRef}
          />
          <button className="btn btn-outline">Add Tod</button>
          </>
        )}
     
      </form>
   
  )
}

export default TodoForm
