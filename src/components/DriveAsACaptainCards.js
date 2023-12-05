import { IconTexts2, IconTexts3 } from "./IconTexts";

export function SignUpAsAWynkCaptainCard () {
  return (
    <div className="bg-white flex flex-col sm:flex-row items-center rounded-xl md:px-20">
      <div className="md:w-3/5">
        <IconTexts3
        icon='orange-captain-icon.svg'
        header='Sign up as a Wynk captain'
        paragraph='Once registered as wynk captain, you get a customised in-app dashboard experience which enables you manage ride requests.'
        />
      </div>
      <div>
        <img
        src="/images/sign-up-as-a-captain-phone-image.svg"
        alt=""
        />
      </div>
    </div>
  );
}

export function EarnAsYouDriveCard () {
  return (
    <div className="bg-white flex flex-col items-center justify-between rounded-2xl">
      <IconTexts2
      icon='orange-money-icon.svg'
      header='Earn as you drive'
      paragraph='There is no limit to how much you can earn. Drive as long as you wish and in your own terms.'
      />
      <div>
        <img
        src="/images/earn-as-you-drive-phone-image.svg"
        alt=""
        />
      </div>
    </div>
  );
}

export function CarpoolMultiplePassengersCard () {
  return (
    <div className="bg-white flex flex-col sm:flex-col-reverse items-center rounded-xl">
      <IconTexts2
      icon='orange-users-icon.svg'
      header='Car pool multiple passengers'
      paragraph='Earn more by setting your preferred location to pickup and drop off multiple passengers at a time!'
      />
      <div>
        <img
        src="/images/carpool-phone-image.svg"
        alt=""
        />
      </div>
    </div>
  );
}