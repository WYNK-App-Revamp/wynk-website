function DownloadWynk() {
  return (
    <>
    <section className="download-wynk-card">
      <div className="w-full md:w-3/5 items-start">
        <h2 className="font w-full text-3xl sm:text-5xl mb-5 font-bold">Download<span className="text-orange-500"> Wynk </span>today</h2>
        <p className=" text-sm sm:text-xl mb-5 w-full sm:pr-8 font-medium">To download the app, click on the app store button below. The Wynk Lifestyle Super App is accessible on iOS and Android platforms.</p>
        <p className="mb-6 font-medium">Download now at</p>
        <div className="call-to-actions flex gap-4">
          <a href="https://apps.apple.com/us/app/wynk-super-app/id1668382143" target="_blank" rel="noreferrer">
          <img src="/images/AppStore.png" alt="apple app store button"/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=ng.wynk.wynksupappsupapp&pli=1" target="_blank" rel="noreferrer">
          <img className="hover:cursor-pointer" src="/images/GooglePlay.png" alt="google play store button"/>
          </a>
        </div>
      </div>
      <div className="hidden md:flex">
        <img src="/images/wynk-dashboard.png" alt="wynk dashboard" className="" />
      </div>
      </section> 
    </>
  );
}

export default DownloadWynk;
