import { IconTexts2 } from "./IconTexts";

export function SignUpAsAWynkCaptainCard () {
  return (
    <div className="bg-white flex sm:flex-col">
      <IconTexts2
      icon='orange-captain-icon.svg'
      header='Sign up as a Wynk captain'
      paragraph='Once registered as wynk captain, you get a customised in-app dashboard experience which enables you manage ride requests.'
      />
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
    <div className="bg-white flex flex-col">
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
    <div className="bg-white flex flex-col sm:flex-col-reverse">
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