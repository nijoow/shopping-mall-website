import React from "react";

function Footer() {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-indigo-500 text-white py-5 ">
      <div className="flex items-center w-4/5 justify-center  text-center  m-auto">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
