import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
             Welcome to zeecare. 
             We are a leading private physiotherapy clinic based in Dill and 
             serving patients from Thyme, Parsley, Chive and beyond. We offer expert treatment
              for a range of musculoskeletal problems including back pain, arthritis, and sports 
              injuries.
             At Phyllis we strive to maintain the highest standards of clinical care 
             through the latest evidence-based physical therapies. We pride ourselves 
             on our person-centred approach. At the heart of this is our commitment to treat 
             the individual behind the problem, always giving you the information 
             and the answers you need to be fully involved in your recovery.</p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;