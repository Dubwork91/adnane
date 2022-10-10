import { useEffect } from 'react';
import "./scro.css";

export default function Scroll() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <div  />

      {/* 👇️ scroll to top on button click */}
      <button id='btn'
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        // style={
        //   {
        //   position: 'fixed',
        //   padding: '1rem 1rem',
        //   fontSize: '40px',
        //   bottom: '0px',
        //   right: '0px',
        //   backgroundColor: 'transparent',
        //   color: 'black',
        //   border: 'none',
        // }}
     


      >
          <i class="bi bi-arrow-up-circle"></i>



      </button>
    </div>
  );
}