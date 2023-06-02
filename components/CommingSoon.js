// import Content from "./Content";

export default function ComingSoon() {
  return (
    <>
      <div className="container m-auto pt-32">
        <div className="flex flex-col gap-y-0 text-center">
          <h1 className="text-2xl font-bold font-inter">We are Coming Soon</h1>
          <h1 className="text-5xl lg:tracking-tight font-bold pb-5 lg:font-extrabold lg:text-7xl font-inter">
          The <span className="bg-gradient-to-bl from-blue-500 via-sky-400 to-white text-transparent bg-clip-text">hassle-free</span>  JSON host</h1>
          <p className="text-1xl lg:text-2xl text-gray-400">Store, Access, and Share Your JSON Files with Ease on JSONsilo.</p>
        </div>
        <div className="flex flex-col gap-y-2 m-10 lg:m-20 lg:flex-row lg:gap-x-2 justify-center">
          <input type="email" placeholder="john.doe@example.com" className="input input-bordered" />
          <button className="btn">Join Waitlist</button>
        </div>
        {/* <div className="bg-indigo-300">
          <img className="relative mx-auto rounded-lg overflow-hidden" src="./assets/images/main-app.png"/>
        </div> */}
        <div className="flex items-center justify-center">
  <div className="relative">
    <div className="absolute bg-slate-200 -inset-0.5 mx-auto blur"></div>
    
      <img className="relative mx-auto rounded-lg overflow-hidden" src="./assets/images/main-app.png" alt="" />
    
  </div>
</div>
      </div>
      {/* <Content /> */}
    </>
  );
}