import React from 'react'
import { useReducer , useState } from 'react'
import axios from 'axios'
import { factReducer, initialState } from './factReducer'
import { ACTION_TYPES } from './factAction'

const Fact = () => {
    // const [loading , setLoading] = useState(false)
    // const [fact , setFact] = useState('')
    // const [error , setError] = useState(false)

    

    // Fetch-start      : loading : true
    // Fetch-success    : loading : false
    //                  : fact : red.data.fact
    //
    // Fetch-error      : loading : false
    //                  : error   : true

    const [state , dispatch] = useReducer(factReducer , initialState)

    const handleFetch = ()=> {
        dispatch({type : ACTION_TYPES.Fetch_start})
        axios.get('https://catfact.ninja/fact')
        .then((res)=>{
            dispatch({type : ACTION_TYPES.Fetch_success , data : res.data.fact})
            console.log(res)
        })
        .catch((error)=>{
            dispatch({type : ACTION_TYPES.Fetch_error})
            console.log(error)
        })
    }


  return (
    <div>
      <button onClick={handleFetch}>
            {state.loading ? "is loading..." : "Fetch Cat Fact"}</button>
        {state.error && (<p>Error, some thing is wrong</p>)} 

        <h1>{state.fact}</h1>
    </div>
  )
}

export default Fact
