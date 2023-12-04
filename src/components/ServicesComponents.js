export function PaymentsServiceComponent () {
  return (
    <div className="flex flex-col items-center sm:items-start gap-6">
      <div>
        <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-[16px] text-center font-bold p-2 md:p-4 rounded-full">Our services</h3>
      </div>
      <div className=" flex flex-col sm:flex-row items-center gap-8 sm:gap-6">
        <div className="sm:w-3/5 flex flex-col items-center sm:items-start gap-8 sm:gap-16">
          <h1 className="text-[25px] sm:text-[38px] text-[rgb(47,49,63)] text-center sm:text-start font-bold">Valuable services you can use and earn from</h1>
          <div className="flex items-center sm:items-start gap-2 sm:gap-6">
            <h3 className="flex py-2 p-3 sm:px-6 items-center bg-[#1B2124] text-white text-sm sm:text-lg text-center font-bold rounded-full">Payments</h3>
            <h3 className="flex py-2 p-3 sm:px-6 items-center bg-white border-[1px] border-gray-400 text-[#9A9A9A] text-sm sm:text-lg text-center font-bold rounded-full">Rides</h3>
            <h3 className="flex py-2 p-3 sm:px-6 items-center bg-white border-[1px] border-gray-400 text-[#9A9A9A] text-sm sm:text-lg text-center font-bold rounded-full">Lifestyle</h3>
          </div>
          <div className="flex flex-col  gap-6 sm:gap-12">
            <div className="flex gap-2 sm:gap-8 items-center">
              <img src="/images/paper-plane-icon.svg" alt="paper plane icon"/>
              <div>
                <p className=" text-[16px] sm:text-[20px] font-medium">Send and receive payments</p>
                <p className="text-[14px] sm:text-[18px] text-[#383E43]">Move money around at your convenience</p>
              </div>
            </div>
            <hr style={{borderTop: '2px solid #E5E9F0'}}></hr>
            <div className="flex gap-2 sm:gap-8 items-center">
              <img src="/images/payments-icon.png" alt="wallet icon"/>
              <div>
                <p className="text-[16px] sm:text-[20px] font-medium">Pay your bills</p>
                <p className="text-[14px] sm:text-[18px] text-[#383E43]">Airtime, Data, Electricity, Cable TV and more.</p>
              </div>
            </div>
            <hr style={{borderTop: '2px solid #E5E9F0'}}></hr>
            <div className="flex gap-2 sm:gap-8 items-center">
              <img src="/images/debit-card-icon.svg" alt="debit card icon"/>
              <div>
                <p className="text-[16px] sm:text-[20px] font-medium">Shop freely online</p>
                <p className="text-[14px] sm:text-[18px] text-[#383E43]">Pay for goods and services with your virtual card.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/phone-transfer-screen.png" alt="service representation on phone screen"/>
        </div>
      </div>
    </div>
  );
}

export function RidesServiceComponent () {
  return (
    <div className="flex flex-col items-center sm:items-start gap-6">
      <div>
        <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-[16px] text-center font-bold p-2 md:p-4 rounded-full">Our services</h3>
      </div>
      <div className=" flex flex-col sm:flex-row items-center gap-8 sm:gap-6">
        <div className="sm:w-3/5 flex flex-col items-center sm:items-start gap-8 sm:gap-16">
          <h1 className="text-[25px] sm:text-[38px] text-[rgb(47,49,63)] text-center sm:text-start font-bold">Valuable services you can use and earn from</h1>
          <div className="flex items-center sm:items-start gap-2 sm:gap-6">
            <h3 className="flex py-2 p-3 sm:px-6 items-center bg-white border-[1px] border-gray-400 text-[#9A9A9A] text-sm sm:text-lg text-center font-bold rounded-full">Payments</h3>
            <h3 className="flex py-2 p-3 sm:px-6 items-center bg-[#1B2124] text-white text-sm sm:text-lg text-center font-bold rounded-full">Rides</h3>
            <h3 className="flex py-2 p-3 sm:px-6 items-center bg-white border-[1px] border-gray-400 text-[#9A9A9A] text-sm sm:text-lg text-center font-bold rounded-full">Lifestyle</h3>
          </div>
          <div className="flex flex-col  gap-6 sm:gap-12">
            <div className="flex gap-2 sm:gap-8 items-center">
              <img src="/images/rides-icon.png" alt="rides icon"/>
              <div>
                <p className=" text-[16px] sm:text-[20px] font-medium">Go wherever you want</p>
                <p className="text-[14px] sm:text-[18px] text-[#383E43]">Get a ride to your destination anytime</p>
              </div>
            </div>
            <hr style={{borderTop: '2px solid #E5E9F0'}}></hr>
            <div className="flex gap-2 sm:gap-8 items-center">
              <img src="/images/calendar-icon.png" alt="calendar icon"/>
              <div>
                <p className="text-[16px] sm:text-[20px] font-medium">Schedule rides for later</p>
                <p className="text-[14px] sm:text-[18px] text-[#383E43]">Plan rides for the future on Wynk</p>
              </div>
            </div>
            <hr style={{borderTop: '2px solid #E5E9F0'}}></hr>
            <div className="flex gap-2 sm:gap-8 items-center">
              <img src="/images/users-icon.svg" alt="users icon"/>
              <div>
                <p className="text-[16px] sm:text-[20px] font-medium">Share rides with others</p>
                <p className="text-[14px] sm:text-[18px] text-[#383E43]">You can share rides with others going your way</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/phone-transfer-screen.png" alt="service representation on phone screen"/>
        </div>
      </div>
    </div>
  );
}

export function LifestyleServiceComponent () {
  return (
    <div className="flex flex-col items-center sm:items-start gap-6">
      <div>
        <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-[16px] text-center font-bold p-2 md:p-4 rounded-full">Our services</h3>
      </div>
      <div className=" flex flex-col sm:flex-row items-center gap-8 sm:gap-6">
        <div className="sm:w-3/5 flex flex-col items-center sm:items-start gap-8 sm:gap-16">
          <h1 className="text-[25px] sm:text-[38px] text-[rgb(47,49,63)] text-center sm:text-start font-bold">Valuable services you can use and earn from</h1>
          <div className="flex items-center sm:items-start gap-2 sm:gap-6">
            <h3 className="flex py-2 p-3 sm:px-6 items-center bg-white border-[1px] border-gray-400 text-[#9A9A9A] text-sm sm:text-lg text-center font-bold rounded-full">Payments</h3>
            <h3 className="flex py-2 p-3 sm:px-6 items-center bg-white border-[1px] border-gray-400 text-[#9A9A9A] text-sm sm:text-lg text-center font-bold rounded-full">Rides</h3>
            <h3 className="flex py-2 p-3 sm:px-6 items-center bg-[#1B2124] text-white text-sm sm:text-lg text-center font-bold rounded-full">Lifestyle</h3>
          </div>
          <div className="flex flex-col  gap-6 sm:gap-12">
            <div className="flex gap-2 sm:gap-8 items-center">
              <img src="/images/lifestyle-icon.png" alt="shopping bag icon"/>
              <div>
                <p className=" text-[16px] sm:text-[20px] font-medium">Buy items on the marketplace</p>
                <p className="text-[14px] sm:text-[18px] text-[#383E43]">Purchase items on the Wynk marketplace</p>
              </div>
            </div>
            <hr style={{borderTop: '2px solid #E5E9F0'}}></hr>
            <div className="flex gap-2 sm:gap-8 items-center">
              <img src="/images/order-food-drinks-icon.svg" alt="order food and drinks icon"/>
              <div>
                <p className="text-[16px] sm:text-[20px] font-medium">Order food and drinks</p>
                <p className="text-[14px] sm:text-[18px] text-[#383E43]">Get food and drinks anytime you want</p>
              </div>
            </div>
            <hr style={{borderTop: '2px solid #E5E9F0'}}></hr>
            <div className="flex gap-2 sm:gap-8 items-center">
              <img src="/images/for-merchants-icon.png" alt="price tag icon"/>
              <div>
                <p className="text-[16px] sm:text-[20px] font-medium">Lots of lifestyle services for you</p>
                <p className="text-[14px] sm:text-[18px] text-[#383E43]">Travels, music, movies, hotels, food and more</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/phone-transfer-screen.png" alt="service representation on phone screen"/>
        </div>
      </div>
    </div>
  );
}