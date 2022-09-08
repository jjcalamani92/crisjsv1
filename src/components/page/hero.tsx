/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import { FC, Fragment } from 'react'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

interface Props {
  title: string
}



export const Hero1 = () => {
  return(
    <section className="px-4 py-32 mx-auto max-w-7xl">
  <div className="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
    <h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold">A secure, faster way to transfer.</h1>
    <p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
      Were on a mission to bring transparency to finance. We charge as little as possible, and we always show you upfront. No hidden fees. No bad exchange rates. No surprises.
    </p>
    <form className="grid w-full grid-cols-1 gap-3 pt-1 mx-auto mb-8 lg:grid-cols-7 md:w-7/12">
      <label className="col-auto lg:col-span-4">
        <span className="sr-only">Your Email</span>
        <input className="mt-0 form-input form-input-lg" type="email" placeholder="Enter your email..."  />
      </label>
      <button className="w-full col-auto btn btn-primary btn-lg lg:col-span-3" type="submit">Get Started</button>
    </form>
    <div className="flex flex-col justify-start mb-3 space-x-0 space-y-2 text-xs text-gray-600 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
      <div className="flex items-center">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 text-green-600">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
        No credit card required
      </div>
      <div className="flex items-center">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 text-green-600">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
        14 days free
      </div>
      <div className="flex items-center">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 text-green-600">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
        Cancel anytime
      </div>
    </div>
  </div>
</section>

  )
}
export const Hero2 = () => {
  return(
    <section>
	<div className="bg-violet-600">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">Provident blanditiis cum exercitationem</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
			<div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900">Get started</button>
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50">Learn more</button>
			</div>
		</div>
	</div>
	<img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
</section>

  )
}
export const Hero3 = () => {
  return(
    <section className="p-6 bg-gray-100 text-gray-800">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-50">
			<span className="block mb-2 text-violet-600">Mamba design system</span>
			<h1 className="text-5xl font-extrabold text-gray-900">Build it with Mamba</h1>
			<p className="my-8">
				<span className="font-medium text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
			</p>
			<form className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
				<div>
					<label className="text-sm sr-only">Your name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-violet-600 border-gray-300" />
				</div>
				<div>
					<label  className="text-sm sr-only">Email address</label>
					<input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-violet-600 border-gray-300" />
				</div>
				<button type="button" className="w-full py-2 font-semibold rounded bg-violet-600 text-gray-50">Join the waitlist</button>
			</form>
		</div>
		<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />
	</div>
</section>

  )
}
export const Hero4 = () => {
  return(
<section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
				<span className="text-violet-600">senectus</span>erat pharetra
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				{/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem */}
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Malesuada</a>
			</div>
		</div>
	</div>
</section>
  )
}
export const Hero5 = () => {
  return(
<section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
				<span className="text-violet-600">senectus</span>erat pharetra
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				{/* <br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem */}
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Malesuada</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>

  )
}
export const Hero6 = () => {
  return(
<div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

  )
}
