import React from "react";
import Image from "next/image";

const FeaturesCards = () => {
    return (
<div className="featuresCard grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
	    <Image src="https://source.unsplash.com/random/300x300/?2" alt="" width={300} height={300} className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	    <div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl font-semibold tracking-tight">Веб-дизайн</h2>
			<p className="text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className="transition rounded-md border border-transparent bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Детальніше
        </button>
	  </div>
    </div>

    <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
	    <Image src="https://source.unsplash.com/random/300x300/?2" alt="" width={300} height={300} className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	    <div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl font-semibold tracking-tight">Маркетинг</h2>
			<p className="text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className="transition rounded-md border border-transparent bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Детальніше
        </button>
	  </div>
    </div>

    <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
	    <Image src="https://source.unsplash.com/random/300x300/?2" alt="" width={300} height={300} className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	    <div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl font-semibold tracking-tight">Реклама</h2>
			<p className="text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className="transition rounded-md border border-transparent bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Детальніше
        </button>
	  </div>
    </div>

    <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
	    <Image src="https://source.unsplash.com/random/300x300/?2" alt="" width={300} height={300} className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	    <div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl font-semibold tracking-tight">E-Commerce</h2>
			<p className="text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className="transition rounded-md border border-transparent bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Детальніше
        </button>
	  </div>
    </div>

</div>
    )
}

export default FeaturesCards;