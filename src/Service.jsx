import React from 'react';
import Card from './Card';
import Serdata from './Serdata';



const Service = () => {
    return(
    <>
            <div className="container-fluid nav_bg mb-5">
            <h2 className="text-center m-5">Our Services</h2>
                <div className="row">
                <div className="col-10 mx-auto">
                <div className="row gy-4"> 
        {
            Serdata.map((val,ind) =>{
                return(
                    <>
                    <Card 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title} />
                </>
                );
            })
        }
        </div>
        </div>
        </div>
        </div>

        </>
    );
};


export default Service;