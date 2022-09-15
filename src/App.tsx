import { useState, useEffect } from 'react'
import  Table  from './components/table/Table'
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_COUNTRIES, SEARCH_COUNTRY } from "./utils/Queries";

function App() {

  const [loadGreeting, { loading, error, data }] = useLazyQuery(SEARCH_COUNTRY);
  const countries = useQuery(GET_COUNTRIES);

  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(false);
  const [shwonData , setshownData]=useState([]);

  const handleChange = (e: any) => {
    let input = e.target.value.toUpperCase();
    setInput(input);

  }


  useEffect(()=>{
    if(input.length!==0){
      loadGreeting({variables: { eq: `${input}` }})
    }

     if(countries.data !== undefined){
      setshownData(countries.data.countries);
    
     }
    if(data !== undefined && data.countries.length !== 0 ){
      setshownData(data.countries)
    }

  },[data ,countries.data,input ])

 
  const checkInput = () => {
     if(error){
      return (  <div className="alert-wrapper" >
      <div className=" alert-icon">
        
        </div>
        <div className="alert-text">
          {error.message}
        there ia issue with internet 
      </div>
  </div>)
    }
    if(countries.error){
      return (  <div className="alert-wrapper" >
      <div className=" alert-icon">
        
        </div>
        <div className="alert-text">
        there ia issue with internet for all 
      </div>
  </div>)
    }
    
    if (data !== undefined && input.length !== 0 && data.countries.length === 0) {
      return (  <div className="alert-wrapper" >
      <div className=" alert-icon">
        
        </div>
        <div className="alert-text">
        This Country Code is not in our list , 
        Please type a new one.
        you can use table below
      </div>
  </div>
      )
    }
  }
  return (
    <div  className="container">
      <div>
        <h2 role="title" >App powered by React and Graph ql Searching Countries By code</h2>
        <div className='table-container' >
          <div className='input-wrapper'>
            <label className={focused ? 'input-label-focus' : 'input-label'}> Search Countries By Code </label>
            <div className='input-inner' >
              <input data-testid="search-bar"  onFocus={() => setFocused(true)} onBlur={() => { if(input.length == 0){ setFocused(false)} }} id='input' className='input' type='text' onChange={(e) => { handleChange(e) }} value={input} />
              <fieldset className='input-feild' >
                <legend className='input-icon'>
                  <span className='input-placeholer'>Search Countries By Code</span>
                </legend>
              </fieldset>
            </div>
          </div>

          <div className='table-wrapper ' >
            {checkInput()}
              <Table data={shwonData} loading={loading} loadingAll={countries?.loading} />
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}
export default App




