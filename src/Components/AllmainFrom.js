import React, { useState } from "react";
import From1 from "./From1";
import From2 from "./From2";
import From3 from "./From3";
import CloseIcon from '@mui/icons-material/Close';

import './AllMainFrom.css'
import From4 from "./From4";

const AllmainFrom = ({open,setOpen,cart,counterss,deccounters,setCart}) => {
  const [step, setStep] = useState(0);
  

  const handleStep = () => {
    if (step === 0) {
      return <From1 ></From1>;
    } else if (step === 1) {
      return <From2 ></From2>;
    } 
    else if(step === 2){
            return <From4 cart={cart} counterss={counterss} deccounters={deccounters} setCart={setCart}></From4>
    }else {
      return <From3 setOpen={setOpen} ></From3>;
    }
  };

  function hadleCose(){
    if(open === true){
        setOpen(false)
        setStep(0)
    }
  }
  return (
    <>
    {open ? 
    <div 
    // onBlur={()=> setOpen(false)}
     className="MainFrom"> 
    <div className="Fromheading">
        <h1>Your Order</h1>
        <CloseIcon style={{cursor:'pointer'}} onClick={hadleCose}></CloseIcon></div>
        <div className="MainFromTitel">
            <h3 style={{borderBottomColor: `${step ===0 ? '#3E84F8' : 'rgb(197, 197, 197)'}`}}>BASIC</h3>
            <h3 style={{borderBottomColor: `${step ===1 ? '#3E84F8' : 'rgb(197, 197, 197)'}`}}>DELIVERY ADDRESS</h3>
            <h3 style={{borderBottomColor: `${step ===2 ? '#3E84F8' : 'rgb(197, 197, 197)'}`}}>ORDER SUMMARY</h3>
            <h3 style={{borderBottomColor: `${step ===3 ? '#3E84F8' : 'rgb(197, 197, 197)'}`}}>PAYMENT</h3>
        </div>
      <div>{handleStep()}</div>
      <div className="fromBtn"> 
        {step < 3 ? (
          <button
          className="nextBtn"
            onClick={() => {
              setStep((step) => step + 1);
            }}
          >
            Next
          </button>
        ) : null}

        {step > 0 ? (
          <button className="backBtn"
            onClick={() => {
              setStep((step) => step - 1);
            }}
          >
            Back
          </button>
        ) : null}
      </div>
    </div>
     : null}
    </>
  );
};

export default AllmainFrom;
