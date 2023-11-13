function DownloadWynk() {
  return (
    <>
    <section className="main-section bg-wynkOffWhite">
      <section className="download-wynk-card flex">
      <div className="w-3/4">
          <h2 className="font  text-4xl sm:text-5xl mb-5">Download<span className="text-orange-500"> Wynk </span>today</h2>
          <p className=" text-sm sm:text-xl mb-5 max-w-xl">To download the Wynk super app, use the camera on your phone to scan the QR code. Accessible on iOS and Android platforms.</p>
          <p className="mb-6">Download now at</p>
          <div className="call-to-actions flex gap-4">
            <button className="bg-wynkPurple-200 rounded-md h-12 py-3 px-6 flex items-center text-xl text-white">Download the app</button>
            <button className="border-wynkPurple-200 border rounded-md h-12 py-3 px-6 flex items-center text-xl text-wynkPurple-200">Log in</button>
          </div>
        </div>
        <div>
          <img src="/images/unsplash_ELJM628U4Jk.png" alt="smiling wynk captain" className="rounded-xl min-h-full min-w-full"/>
        </div>
      </section> 
    </section>
    
    </>
  );
}

export default DownloadWynk;
