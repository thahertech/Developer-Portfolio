import React from "react"
import { BadgeCheckIcon,IdentificationIcon } from "@heroicons/react/solid";
import { certificates } from "../data"

export default function Certificates(){ 

return(
<section id="certificates">
<div className="container px-5 py-10 mx-auto">
<div className="text-center mb-5 mx-auto">
<IdentificationIcon className="w-10 incline-block mb-4 mx-auto"/> 

<h1 className=" sm:text-4xl text-3xl font-medium title-font text-white mb-10">
    Certificates
</h1>
</div>
<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
  {certificates.map((certificates) => (
    <div key={certificates} className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-800 rounded flex p-4 h-full items-center">
        <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
        <span className="title-font font-medium text-white">
          {certificates}
        </span>
      </div>
    </div>
  ))}
</div>
</div>
    </section>
  );
}
