import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const SecondInfo = () => {
    return (
        
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 '>

                <div className="card lg:card-side bg-error shadow-xl">
                <figure className='pl-5'><img src={clock} alt="Album"/></figure>
                <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
                </div>
                </div>
                </div>

                
                <div className="card lg:card-side bg-base-300 shadow-xl">
                <figure className='pl-5'><img src={marker} alt="Album"/></figure>
                <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
                </div>
                </div>
                </div>

                
                <div className="card lg:card-side bg-error shadow-xl">
                <figure className='pl-5'><img src={phone} alt="Album"/></figure>
                <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
                </div>
                </div>
                </div>
         
            </div>
       
        
            
       
    );
};

export default SecondInfo;