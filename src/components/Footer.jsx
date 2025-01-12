import React from "react";

const Footer = () => {
  return (
   <div className="grid grid-cols-3 mt-6 text-xs text-gray-500 mb-6">
   
   <ul className="list-disc pl-5  space-y-2">
  <li>About</li>
  <li>Careers</li>
  <li>Press</li>
</ul>
<ul className="list-disc pl-5  space-y-2">
  <li>Advertise</li>
  <li>Help</li>
  <li>Blog</li>
</ul>
<ul className="list-disc pl-5 space-y-2">
  <li>Reddit App</li>
  <li>Reddit Gold</li>
  <li>Reddit Hits</li>
</ul>
   </div>
  );
};

export default Footer;
