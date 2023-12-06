import { useNavigate } from "react-router-dom";

export default function DownloadWynkModal() {
  const navigate = useNavigate();


  return (
    <div className="fixed w-screen h-screen bg-[rgba(52,64,84,0.6)] backdrop-blur-[4px] top-0 left-0  z-10 grid place-items-center">
      <article className="flex flex-col items-start rounded-2xl pt-6 px-3 w-[80%] bg-white">
        <section className="px-6 sm:px-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="top-0 left-[50px] cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <path
              d="M16.7168 14.9495C16.2287 14.4613 15.4372 14.4613 14.9491 14.9495C14.4609 15.4376 14.4609 16.2291 14.9491 16.7172L18.2319 20L14.9491 23.2828C14.461 23.771 14.461 24.5624 14.9491 25.0506C15.4373 25.5387 16.2287 25.5387 16.7169 25.0506L19.9996 21.7678L23.2824 25.0505C23.7705 25.5387 24.562 25.5387 25.0501 25.0505C25.5383 24.5624 25.5383 23.7709 25.0501 23.2828L21.7674 20L25.0502 16.7173C25.5383 16.2291 25.5383 15.4377 25.0502 14.9495C24.562 14.4613 23.7706 14.4613 23.2824 14.9495L19.9996 18.2323L16.7168 14.9495Z"
              fill="#211E8A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.9997 2.08337C10.1046 2.08337 2.08301 10.1049 2.08301 20C2.08301 29.8951 10.1046 37.9167 19.9997 37.9167C29.8948 37.9167 37.9163 29.8951 37.9163 20C37.9163 10.1049 29.8948 2.08337 19.9997 2.08337ZM4.58301 20C4.58301 11.4857 11.4853 4.58337 19.9997 4.58337C28.5141 4.58337 35.4163 11.4857 35.4163 20C35.4163 28.5144 28.5141 35.4167 19.9997 35.4167C11.4853 35.4167 4.58301 28.5144 4.58301 20Z"
              fill="#211E8A"
            />
          </svg>
        </section>
        <section className="download-wynk-modal">
          <div className="w-full lg:w-3/5 items-start">
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
          <div className="hidden lg:flex">
            <img src="/images/wynk-dashboard.png" alt="wynk dashboard" className="" />
          </div>
        </section>
        
      </article>
    </div>
  );
}