import React, { useEffect, useState } from 'react'

function Counter({label,target,number}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = target;
      const duration = 0.5; // Duration of the animation in milliseconds
      const incrementTime = Math.ceil(duration / end); // Time per increment
  
      const timer = setInterval(() => {
        if (start < end) {
          start += 1; // Increment the count
          setCount(start); // Update the state
        } else {
          clearInterval(timer); // Clear the interval when the target is reached
        }
      }, incrementTime);
  
      return () => clearInterval(timer); // Cleanup on unmount
    }, [target]); // Dependencies
    // const formatNumber = (num) => {
    //     if (num >= 1000) {
    //       const formatted = (num / 1000).toFixed(1).replace(/\.0$/, ''); // Divide by 1000 and format
    //       return `${formatted}k`; // Append 'k'
    //     }
    //     return num.toString(); // Return as string for numbers less than 10,000
    //   };
  return (
    <div className="col-md-6">
    <div className="d-flex justify-between items-center f20 text_body mb-[20px]">
      <div>{label}</div>
      <div>0{number}</div>
    </div>
    <div className="f52 text_red fw_700">
        {/* {formatNumber(count)}+ */}
        {target}+
    </div>
  </div>
  )
}

export default Counter