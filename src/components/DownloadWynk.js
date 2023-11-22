function DownloadWynk() {
  return (
    <>
    <section className="download-wynk-card">
      <div className="w-3/5 items-start">
        <h2 className="font w-full text-3xl sm:text-5xl mb-5">Download<span className="text-orange-500"> Wynk </span>today</h2>
        <p className=" text-sm sm:text-xl mb-5 w-full pr-8">To download the Wynk super app, use the camera on your phone to scan the QR code. Accessible on iOS and Android platforms.</p>
        <p className="mb-6">Download now at</p>
        <div className="call-to-actions flex gap-4">
          <a href="https://apps.apple.com/us/app/wynk-super-app/id1668382143" target="_blank" rel="noreferrer">
          <img src="/images/AppStore.png" alt="apple app store button"/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=ng.wynk.wynksupappsupapp&pli=1" target="_blank" rel="noreferrer">
          <img className="hover:cursor-pointer" src="/images/GooglePlay.png" alt="google play store button"/>
          </a>
        </div>
      </div>
        <div>
          <img src="/images/wynk-dashboard.png" alt="wynk dashboard" className="min-h-full min-w-full"/>
        </div>
      </section> 
    </>
  );
}

export default DownloadWynk;
