import React, { useContext } from 'react'
import { context } from '../Context';

const UserDetiles = () => {
    const data = useContext(context);
    const {  userDatas } =data;

  
  return (
    <>
           {userDatas.map((item) => {
        return(
            
          <div
            className=" m-2 shadow-lg m-1 "
            style={{ alignItems: "center", borderBottom: "2px brown solid" }}
          >
            <div>
              <h6 className="mt-3 fst-italic fw-bolder fs-3 ms-5">
                Name:{item.name}&nbsp;{item.lastname}
              </h6>
            </div>

            <div>
              <h6 className="mt-3 fst-italic fw-bolder fs-3 ms-5">
                Email:{item.email}
              </h6>
            </div>
          </div>
        );
      })}
    

    </>
  )
}

export default UserDetiles
