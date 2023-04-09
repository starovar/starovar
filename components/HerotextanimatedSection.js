import React from "react";

const HerotextanimatedSection = () => {
    return (
<div className="flex max-w-screen-xl md:w-screen items-center justify-center bg-black font-bold text-white">
  <div className="text-center space-y-12">
      <div className="text-center text-4xl font-bold">
        Services offered
        <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
        <span className="animate-word col-span-full row-span-full">Flutter</span>
        <span className="animate-word-delay-1 col-span-full row-span-full">Django</span>
        <span className="animate-word-delay-2 col-span-full row-span-full">Website</span>
        <span className="animate-word-delay-3 col-span-full row-span-full">VueJS</span>
        <span className="animate-word-delay-4 col-span-full row-span-full">NuxtJS</span>
        </div>
    </div>
  </div>
</div>
    )
}

export default HerotextanimatedSection;