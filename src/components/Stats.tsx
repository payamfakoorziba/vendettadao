export function Stats() {
  return (
    <div className="pt-12 bg-neutral-900 sm:pt-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Lorem ipsum dolor sit amet.
          </h2> */}
          {/* <p className="mt-3 text-xl text-gray-300 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
          </p> */}
        </div>
      </div>
      <div className="pb-12 mt-10 bg-neutral-900 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-neutral-900" />
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="border rounded-lg shadow-lg bg-neutral-800 border-neutral-600 sm:grid sm:grid-cols-3">
                <div className="flex flex-col items-center justify-center p-6 text-center border-b border-neutral-500/50 sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-300">Games</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-white">7</dd>
                </div>
                <div className="flex flex-col items-center justify-center p-6 text-center border-t border-b border-neutral-500/50 sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-300">Members</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-white">10,000 +</dd>
                </div>
                <div className="flex flex-col items-center justify-center p-6 text-center border-t border-neutral-500/50 sm:border-0 ">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-300">Token Supply</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-white">100 million</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}