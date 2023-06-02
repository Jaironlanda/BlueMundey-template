export default function Content() {
  return (
    // <div className="bg-slate-200 rounded-xl ring-1 ring-slate-900/5 overflow-hidden shadow-md shadow-slate-700/5 bg-gradient-to-b from-orange-500 via-white to-white">
    <div className="container text-center mx-auto pb-28">
      <div className="grid gap-8 md:grid-cols-3 lg:gap-x-12 pt-10">
          <div className="card bg-base-100 hover:shadow-2xl shadow-lg mx-8">
            <div className="card-body">
            <div className="mb-12 md:mb-0">
              <div className="p-4 text-white bg-gradient-to-bl from-blue-500 via-sky-400 to-white rounded-lg shadow-lg inline-block mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
              </svg>

              </div>
              <h5 className="text-lg text-black font-bold mb-1">
                Unlimited Request
              </h5>
              <p className="text-gray-500 font-light">
                Access your JSON files without any caps or limits on the number of requests.
              </p>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 hover:shadow-2xl shadow-xl mx-8">
            <div className="card-body">
              <div className="mb-12 md:mb-0">
                <div className="p-4 text-white bg-gradient-to-bl from-blue-500 via-sky-400 to-white rounded-lg shadow-lg inline-block mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>

                </div>
                <h5 className="text-lg font-bold mb-4">Access Protection</h5>
                <p className="text-gray-500 font-light">
                Choose to keep your JSON files private or share them publicly with our Access Protection feature.
                </p>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 hover:shadow-2xl shadow-xl mx-8">
            <div className="card-body">
              <div className="mb-12 md:mb-0">
                <div className="p-4 text-white bg-gradient-to-bl from-blue-500 via-sky-400 to-white rounded-lg shadow-lg inline-block mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>

                </div>
                <h5 className="text-lg font-bold mb-4">Up to 5 MB of Storage</h5>
                <p className="text-gray-500 font-light">
                  Store JSON files up to 5 MB in size on our platform.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
    // </div>
  );
}