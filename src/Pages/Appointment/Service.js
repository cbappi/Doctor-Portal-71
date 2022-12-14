import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                <p>{
                    slots.length > 0
                        ? <span className='text-green-500'>Make Booking Soon.</span>
                        : <span className='text-red-500'>Try another date.</span>
                }</p>

                <p>{slots.length}{slots.length>1?' spaces ':' space '}available</p>
                <div className="card-actions justify-end">
                

                <label htmlFor="booking-modal"
                className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                onClick={()=>setTreatment(service)}>Book Appoinment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;















// import React from 'react';

// const Service = ({ service}) => {
//     const { name, slots } = service;
//     return (
//         <div class="card lg:max-w-lg bg-base-100 shadow-xl">
//             <div class="card-body text-center">
//                 <h2 class="text-xl font-bold text-secondary">{name} ppmm</h2>
//                 {/* <p>{
//                     slots.length > 0
//                         ? <span>{slots[0]}</span>
//                         : <span className='text-red-500'>Try another date.</span>
//                 }</p> */}
//                 <p>{slots[0]} space available</p>
//                 {/* <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p> */}
//                 <div class="card-actions justify-center">

//                     <button className="btn btn-success justify-end">Get Now</button>
                  
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Service;