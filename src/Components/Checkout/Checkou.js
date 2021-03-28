import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Checkou = () => {
    const date = new Date ()
    console.log(date);
    return (
        <div className='text-center'>
            <h4 className='text-info'>Select Your Tour Information Here</h4>
            <form>
                <div className='row container mt-1'>
                <div className='col-md-6'>
                <p className="mt-3 text-left">From</p>
                <select name="" className='form-control w-100' id="">
                <option>Select</option>
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Sylhet</option>
                    <option>Rajshahi</option>
                    <option>Barisal</option>
                    <option>Khulna</option>
                    <option>Rangpur</option>
                </select>
                </div>
               <div className='col-md-6'>
               <p className="mt-3 text-left">To</p>
                <select name="" className='form-control w-100' id="">
                    <option>Select</option>
                    <option>Sajek Valley</option>
                    <option>Sundarban</option>
                    <option>Saint Martin</option>
                    
                    
                    
                </select>
               </div>
                </div>
            {/* <input type="text" name="form" id="" className="mt-3 ml-5 mr-4 w-25" placeholder='Form'/>
                <input type="text" name="to" id="" className="mt-3 ml-1 w-25" placeholder='To'/><br/> */}
              
           <div className="row container ">
          <div className="col-md-6">
          <p className="mt-3 text-success text-left">Tour Start</p>
          <input type="date"   id="" className=" form-control mt-3 w-100"  placeholder='pic a date'/>
          </div>
            <div className="col-md-6">
            <p className="mt-3 text-danger text-left">Tour End</p>
            <input type="date"   id="" className=" form-control mt-3 w-100" placeholder='pic a date'/>
            </div>
           </div>

           
       
        
            
                <Link to="/confirm"><button type="submit" className="mt-3 btn btn-danger mb-3">Confirm</button></Link>
            

            </form>
        </div>
    );
};

export default Checkou;