import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginModal() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password, `+234${phone}`);
  };

  /** To route to this page with the previous page as background;
   * when the user clicks log in, do navigate('/share-ownership?login=true')
   * in share ownership this is done:
   * const [searchParams]= useSearchParams()
   * const login = searchParams.get('login') === 'true'? true : false;
   * 
   * and finally rendered like this:
   *  {login? <LoginModal/> : null}
   */

  return (
    <div className="fixed w-screen h-screen bg-[rgba(52,64,84,0.6)] backdrop-blur-[4px] top-0 left-0  z-10 grid place-items-center">
      <article className="w-[90%] md:w-[60%] bg-white rounded-[20px] flex items-center min-h-[80vh] [&>*]:w-[50%] overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="relative grid place-items-center  min-h-[80vh] px-[60px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="absolute top-0 left-[50px] cursor-pointer"
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
          <div className="formgroup w-full flex flex-col gap-y-[24px] ">
            <h1 className="text-[24px] font-bold">Captain Sign In</h1>
            <div className="">
              <label className="text-[#1B2124] text-[14px] font-medium">
                Phone Number
              </label>
              <article className=" flex items-center justify-between mt-4">
                <div className="bg-[#EFEFEF] border border-[#CCCCCC] flex items-center justify-between rounded-[8px] p-5 w-[20%] h-[48px]">
                  <img
                    src="https://flagcdn.com/w320/ng.png"
                    alt=""
                    className="w-[22px] h-[16px]"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.95339 5.67461C3.1331 5.46495 3.44875 5.44067 3.65841 5.62038L7.99968 9.34147L12.341 5.62038C12.5506 5.44067 12.8663 5.46495 13.046 5.67461C13.2257 5.88428 13.2014 6.19993 12.9917 6.37964L8.32508 10.3796C8.13783 10.5401 7.86153 10.5401 7.67429 10.3796L3.00762 6.37964C2.79796 6.19993 2.77368 5.88428 2.95339 5.67461Z"
                      fill="#241CB7"
                    />
                  </svg>
                </div>
                <div className="h-[48px] w-[78%] overflow-hidden border border-[#ccc]  text-[16px] text-[#8D9091] flex items-center rounded-[8px] px-4">
                  <p className="h-full  w-[4rem] grid place-items-center">
                    +234
                  </p>
                  <input
                    type="text"
                    className=" h-full border-none outline-none "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>
            </div>
            <div className="w-full">
              <label className="text-[#1B2124] text-[14px] font-medium">
                Password
              </label>
              <input
                type="password"
                className=" h-[48px] w-full border border-[#ccc] outline-none block mt-4 rounded-[8px] text-[16px] text-[#8D9091]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="px-[20px] py-[10px] bg-[#211E8A] text-[18px] text-white rounded-[8px] self-end">
              {" "}
              Sign In
            </button>
          </div>
        </form>
        <div className="bg-cover bg-center h-full ">
          <img src="/images/captain-login-image.png" className="w-full h-full" alt="" />
        </div>
      </article>
    </div>
  );
}