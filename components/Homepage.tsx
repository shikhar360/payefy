import React from "react";

export default function Homepage() {

  function handleContact(e: string) {
    window.open(e);
  }
  return (
    <section className="   ">
      <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen w-full bg-[url('/img/slide.png')]  bg-cover bg-no-repeat  text-white relative overflow-hidden">
        <div className="flex flex-col items-start justify-start md:justify-center p-8  gap-4 bg-black/50  backdrop-blur-sm md:backdrop-blur-none md:bg-transparent w-11/12 mx-auto  mt-16 z-20 pt-16">
          <p className="text-5xl md:text-6xl px-3  font-bold font-mynerve">
            THE ONLY WIDGET SOLUTION FOR SUPERFLUID PAYMENTS
          </p>
          <p className=" text-2xl font-jose  leading-6 mt-4 md:mt-0 text-center sm:text-start">
            Payefy is a easy , one line integration widget solution for making
            superfluid payments . Just connect your wallet and you are good to
            go
          </p>
        </div>
        <img
          src="img/bg.png"
          alt="bluff"
          className=" my-auto  absolute sm:right-0 top-3/4 sm:top-0"
        />
      </div>
    

        <div className="bg-[#05020d] min-h-screen text-white pb-28 ">
        <p className="text-4xl font-jose w-full text-center pt-10"> Built using </p>
        <img src="img/sf.png" alt="bluff"  className="w-56 mx-auto mt-8 rounded-md "/>
      <div className="  flex  md:flex-row items-center md: justify-end pt-20 gap-8 flex-col-reverse w-full  text-white  overflow-hidden">

        <img
          src="img/com.png"
          alt="bluff"
          className=" h-48 rounded-md md:my-auto mt-16 mb-0 px-8"
          />
        <p className=" text-4xl font-mynerve  leading-6  text-center md:my-auto px-4 ">
          Just one command for setting up everythig
        </p>
      </div>
      <div className="  flex  md:flex-row items-center md: justify-end pt-20 gap-8 flex-col w-full  text-white  overflow-hidden">

        <p className=" text-4xl font-mynerve  leading-6  text-center md:my-auto px-4 ">
         Also with customizable themes
        </p>
        <img
          src="img/com.png"
          alt="bluff"
          className=" h-48 rounded-md md:my-auto mt-16 mb-0 px-8"
          />
      </div>
          </div>


      <footer>
        <div className="bg-[#04040f] text-white grid grid-cols-2 w-full">
          <div className="flex flex-col items-start p-4 justify-start">
            <p className="text-xl">Payefy</p>
            <p className="text-sm">
             Widget solution for superfluid payments
            </p>
            <div className="flex   gap-8 mt-2">
              <div
                onClick={() => handleContact("https://twitter.com/shikkhar_")}
              >
                <img
                  className="cursor-pointer"
                  src="/img/twitter.png"
                  alt="bg"
                  width={40}
                />
              </div>
              <div
                onClick={() => handleContact("https://github.com/shikhar360")}
              >
                <img
                  className="cursor-pointer"
                  src="/img/github.png"
                  alt="bg"
                  width={40}
                />
              </div>
              <div
                onClick={() =>
                  handleContact("https://linkedin.com/in/shikhar360")
                }
              >
                <img
                  className="cursor-pointer"
                  src="/img/linkin.png"
                  alt="bg"
                  height={40}
                  width={40}
                />
              </div>
            </div>
          </div>
          <span className=" py-2 my-auto  text-[#c7c7c7] text-xs">
            ©2023 PAYEFY. ALL COPYRIGHTS RESERVED
          </span>
        </div>
      </footer>
    </section>
  );
}
