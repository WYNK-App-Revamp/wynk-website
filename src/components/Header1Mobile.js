import { useNavigate } from "react-router-dom";
export default function Header1Mobile () {
  const navigate = useNavigate();
  function navigateToHome () {
    navigate('/');
  }
  return (
    <header className="sm:hidden flex h-8">
      <div className="cursor-pointer mr-auto" onClick={navigateToHome}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="32" viewBox="0 0 50 32" fill="none">
          <path d="M10.8478 24.6281L8.38841 17.1104H6.69488L4.21472 24.6281L2.15734 17.1104H0L3.12536 27.79H4.9601L7.50138 20.0626L10.0621 27.79H11.8968L15.0028 17.1104H12.9259L10.8478 24.6281Z" fill="#211E8A"/>
          <path d="M20.4246 25.0259L17.2997 17.1104H15.1016L19.2558 27.2852L19.3761 27.5814L17.6826 32H19.7718L25.5668 17.1106H23.4496L20.4246 25.0259Z" fill="#211E8A"/>
          <path d="M31.5162 16.8795C30.9438 16.8697 30.3763 16.9904 29.8536 17.2329C29.3309 17.4755 28.8657 17.8341 28.4909 18.2835V17.1107H26.4551V27.7903H28.4906V21.4452C28.4906 19.8537 29.5383 18.7858 31.0114 18.7858C32.4633 18.7858 33.4313 19.8326 33.4313 21.3826V27.7903H35.4684V20.9639C35.4686 18.6811 33.8759 16.8795 31.5162 16.8795Z" fill="#211E8A"/>
          <path d="M41.3763 22.2618L46.0546 17.1106H43.6356L39.4824 21.8214V13.1309H37.4453V27.79H39.4824V22.8893L43.7371 27.7891L47.457 31.979H50.0013L46.2975 27.79L41.3763 22.2618Z" fill="#211E8A"/>
          <path d="M29.3216 0C26.854 0.00312773 24.4717 0.938213 22.619 2.63089C20.7663 4.32356 19.5696 6.65826 19.2521 9.19964C17.4178 8.91626 15.7424 7.95862 14.5306 6.50088C13.3187 5.04314 12.6508 3.18211 12.6484 1.25624V0.977426H10.2285V1.25692C10.2286 3.93655 11.2112 6.51561 12.9765 8.46988C14.7419 10.4242 17.1575 11.607 19.7325 11.778C22.3074 11.949 24.8485 11.0953 26.8391 9.39047C28.8298 7.68562 30.1206 5.25754 30.4494 2.59975C32.2836 2.88308 33.959 3.84071 35.1709 5.29846C36.3828 6.75621 37.0507 8.61726 37.053 10.5431V10.8224H39.4729V10.5429C39.47 7.74776 38.3996 5.06794 36.4965 3.09142C34.5934 1.11491 32.013 0.00312006 29.3216 0ZM21.7058 9.16451C21.9814 7.53674 22.7328 6.03656 23.8581 4.86787C24.9833 3.69917 26.4278 2.91865 27.9952 2.63239C27.7196 4.26015 26.9682 5.76033 25.8429 6.92903C24.7177 8.09772 23.2732 8.87824 21.7058 9.16451Z" fill="#F98611"/>
        </svg>
      </div>
      <div className="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z" fill="black"/>
        </svg>
      </div>
    </header>
  );
}