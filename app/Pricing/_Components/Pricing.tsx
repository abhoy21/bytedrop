import React from "react";

const Pricing = () => {
  return (
    <div>
      <>
        {/* component */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mt-2 text-4xl font-bold tracking-tight text-purple-500 sm:text-5xl">
                Pricing plans for teams of all sizes
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-cyan-600">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
              quasi iusto modi velit ut non voluptas in. Explicabo id ut
              laborum.
            </p>

            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-yellow-400">
                <h3
                  id="tier-freelancer"
                  className="text-lg font-semibold leading-8 text-orange-600"
                >
                  KiloByte
                </h3>
                <p className="mt-4 text-sm leading-6 text-green-600">
                  To Get Started With
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  {/* Price, update based on frequency toggle state */}
                  <span className="text-4xl font-bold tracking-tight text-pink-900">
                    Free
                  </span>
                </p>
                <a
                  href="#"
                  aria-describedby="tier-freelancer"
                  className="mt-6 block rounded-md py-2 px-3 text-center text-md font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-500 text-white shadow-sm hover:bg-blue-700 focus-visible:outline-purple-600"
                >
                  Grab plan
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-400"
                >
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-yellow-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Limited storage space upto 1 GB
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Basic file sharing capabilities
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    No advanced features like password protection or expiration
                    dates for shared files
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-teal-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Ad-supported interface
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-gray-700">
                <h3
                  id="tier-startup"
                  className="text-lg font-semibold leading-8 text-gray-900"
                >
                  MegaByte
                </h3>
                <p className="mt-4 text-sm leading-6 text-cyan-600">
                  A plan that scales with your rapidly growing Demands.
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  {/* Price, update based on frequency toggle state */}
                  <span className="text-4xl font-bold tracking-tight text-yellow-700">
                    $5
                  </span>
                  {/* Payment frequency, update based on frequency toggle state */}
                  <span className="text-sm font-semibold leading-6 text-teal-600">
                    /month
                  </span>
                </p>
                <a
                  href="#"
                  aria-describedby="tier-startup"
                  className="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white shadow-sm hover:bg-green-800 focus-visible:outline-red-600"
                >
                  Grab plan
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-pink-600"
                >
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-purple-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Increased storage space upto 5 GB
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-yellow-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Enhanced security features (e.g., end-to-end encryption)
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-red-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Custom branding options for shared links and interface
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    24-hour support response time
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-purple-500">
                <h3
                  id="tier-freelancer"
                  className="text-lg font-semibold leading-8 text-orange-600"
                >
                  GigaByte
                </h3>
                <p className="mt-4 text-sm leading-6 text-green-600">
                  To have the Best and Fastes Experience
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  {/* Price, update based on frequency toggle state */}
                  <span className="text-4xl font-bold tracking-tight text-yellow-700">
                    $15
                  </span>
                  {/* Payment frequency, update based on frequency toggle state */}
                  <span className="text-sm font-semibold leading-6 text-teal-600">
                    /month
                  </span>
                </p>
                <a
                  href="#"
                  aria-describedby="tier-freelancer"
                  className="mt-6 block rounded-md py-2 px-3 text-center text-md font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-purple-500 text-white hover:text-white shadow-sm hover:bg-purple-700 focus-visible:outline-purple-600"
                >
                  Grab plan
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-400"
                >
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-yellow-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Limited storage space upto 15 GB
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Faster upload and download speeds
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Priority customer support
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-teal-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Option to set expiration dates for shared links
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Pricing;
