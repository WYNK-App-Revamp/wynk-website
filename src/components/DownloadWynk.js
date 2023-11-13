function DownloadWynk() {
  return (
    <>
    <section className="main-section section-inner-padding sm:px-32 bg-wynkOffWhite">
      <section className="download-wynk-card">
      <div className="w-3/5">
          <h2 className="font w-full text-4xl sm:text-5xl mb-5">Download<span className="text-orange-500"> Wynk </span>today</h2>
          <p className=" text-sm sm:text-xl mb-5 w-full pr-8">To download the Wynk super app, use the camera on your phone to scan the QR code. Accessible on iOS and Android platforms.</p>
          <p className="mb-6">Download now at</p>
          <div className="call-to-actions flex gap-4">
            <img src="/images/AppStore.png" alt="apple app store button"/>
            <img src="/images/GooglePlay.png" alt="apple app store button"/>
          </div>
        </div>
        <div>
          <img src="/images/wynk-dashboard.png" alt="wynk dashboard" className="min-h-full min-w-full"/>
        </div>
      </section> 
    </section>
    
    </>
  );
}

export default DownloadWynk;
