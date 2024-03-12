// import React, { useEffect, useState } from "react";

// const BharatClockText = () => {

//     const [currentTime, setCurrentTime] = useState(new Date());

//     useEffect(()=>{
//         const intervalID = setInterval(() => {
//             setCurrentTime(new Date())
//         }, 1000);

//         return () => clearInterval(intervalID);
//     }, []);

//   const d = new Date();

//   const hours = currentTime.getHours().toString().padStart(2, '0');
//   const minutes = currentTime.getMinutes().toString().padStart(2, '0');
//   const seconds = currentTime.getSeconds().toString().padStart(2, '0');

//   const date = currentTime.getDate().toString().padStart(2, '0');
//   const month = currentTime.getMonth().toString().padStart(2, '0');
//   const year = currentTime.getFullYear().toString().padStart(2, '0');

//   return (
//     <div>
//       <p className="line-1">
//         This is the clock that shows the time in Bharat at all times.
//       </p>
//       <p className="line-2">Today's date is: {date}/{month}/{year} and Current time is: {hours}:{minutes}:{seconds}</p>
//     </div>
//   );
// };

// export default BharatClockText;
