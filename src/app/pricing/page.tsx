import { Footer } from "@/components/footer";
import { Trial } from "@/components/trial";

const PricingPage = () => {
  return (
    <>
      <header className="w-[1400px] mx-auto flex justify-between py-6">
        <div className="flex gap-13.5 items-center">
          <span className="font-primary text-text font-bold text-[28px]">
            BrandName
          </span>
          <nav className="text-[18px] p-2">
            <ul className="flex gap-8 text-1rem text-second-text">
              <li>
                <a className="font-primary" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="font-primary" href="">
                  Product
                </a>
              </li>
              <li>
                <a className="font-primary" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="font-primary" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="font-primary" href="#">
                  Pages
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="py-2.5 flex ">
          <div className="flex items-center gap-11">
            <h3 className="font-primary font-bold text-sm text-primary">
              Login
            </h3>

            <button className="flex gap-3 items-center bg-primary px-6 py-4 rounded-[5px] text-light-text text-h6 leading-5 tracking-[0.2px] font-bold font-primary">
              Become a member
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36108 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* simple pricing  */}

      <div className="max-w-[870px] mx-auto text-center py-12 space-y-3.5">
        <h5 className="text-h5 leading-6 tracking-[0.2px] font-primary font-bold text-second-text">
          PRICING
        </h5>
        <h1
          className="text-h1 text-text font-primary font-bold leading-20 tracking-[0.
          2px]  "
        >
          Simple Pricing
        </h1>
        <div className="max-w-[123px] mx-auto flex items-center justify-between">
          <a
            className="text-h6 text-text font-primary font-bold leading-6 tracking-[0.2 px]"
            href="#"
          >
            Home
          </a>

          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
              fill="#BDBDBD"
            />
          </svg>

          <a
            className="text-h6 text-second-text font-primary font-bold leading-6 tracking-[0.2 px]"
            href="#"
          >
            Team
          </a>
        </div>
      </div>

      {/* pricing */}
      <div className="bg-light-gray-1">
        <div className="max-w-[1200px] mx-auto py-28">
          <div className="text-center pb-20">
            <h2 className="text-text text-h2 leading-12 tracking-[0.2px] font-bold">
              Pricing
            </h2>
            <p className="font-primary text-second-text text-h6 py-2.5 leading-5 tracking-[0.2px] font-bold">
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: Newtonian mechanics
            </p>

            <div className="max-w-[310px] mx-auto flex items-center justify-between gap-4">
              <div className="flex justify-between gap-3 items-center">
                <h5 className="text-text text-h5 font-primary font-bold leading-6 tracking-[0.1px]">
                  Monthly
                </h5>

                <svg
                  width="45"
                  height="25"
                  viewBox="0 0 45 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="44"
                    height="24"
                    rx="12"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="44"
                    height="24"
                    rx="12"
                    stroke="#23A6F0"
                  />
                  <circle
                    cx="13.5"
                    cy="12.5"
                    r="9"
                    fill="#EBEBEB"
                    stroke="#D0D0D0"
                  />
                </svg>
              </div>
              <div className="flex justify-between gap-2.5 items-center">
                <h5 className="text-text text-h5 font-primary font-bold leading-6 tracking-[0.1px]">
                  Yearly
                </h5>

                <svg
                  width="68"
                  height="24"
                  viewBox="0 0 108 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="108" height="44" rx="22" fill="#B3E3FF" />
                  <path
                    d="M24.6638 18.908C24.2998 18.908 24.0104 18.9967 23.7958 19.174C23.5904 19.342 23.4878 19.5707 23.4878 19.86C23.4878 20.14 23.6138 20.364 23.8658 20.532C24.1271 20.7 24.7198 20.9007 25.6438 21.134C26.5771 21.358 27.3004 21.6987 27.8138 22.156C28.3271 22.6133 28.5838 23.2807 28.5838 24.158C28.5838 25.0353 28.2524 25.7493 27.5898 26.3C26.9364 26.8413 26.0731 27.112 24.9998 27.112C23.4504 27.112 22.0551 26.538 20.8138 25.39L22.1158 23.794C23.1704 24.718 24.1458 25.18 25.0418 25.18C25.4431 25.18 25.7558 25.096 25.9798 24.928C26.2131 24.7507 26.3298 24.5173 26.3298 24.228C26.3298 23.9293 26.2084 23.696 25.9658 23.528C25.7231 23.3507 25.2424 23.1733 24.5238 22.996C23.3851 22.7253 22.5498 22.3753 22.0178 21.946C21.4951 21.5073 21.2338 20.826 21.2338 19.902C21.2338 18.9687 21.5651 18.25 22.2278 17.746C22.8998 17.242 23.7351 16.99 24.7338 16.99C25.3871 16.99 26.0404 17.102 26.6938 17.326C27.3471 17.55 27.9164 17.8673 28.4018 18.278L27.2958 19.874C26.4464 19.23 25.5691 18.908 24.6638 18.908ZM36.8295 27H34.8555V26.09C34.3142 26.7713 33.6422 27.112 32.8395 27.112C32.0462 27.112 31.3788 26.8833 30.8375 26.426C30.2962 25.9593 30.0255 25.3433 30.0255 24.578C30.0255 23.8033 30.3055 23.2247 30.8655 22.842C31.4255 22.4593 32.1908 22.268 33.1615 22.268H34.7295V22.226C34.7295 21.4233 34.3048 21.022 33.4555 21.022C33.0915 21.022 32.7042 21.0967 32.2935 21.246C31.8922 21.386 31.5515 21.5633 31.2715 21.778L30.3335 20.42C31.3228 19.7013 32.4522 19.342 33.7215 19.342C34.6362 19.342 35.3828 19.5707 35.9615 20.028C36.5402 20.4853 36.8295 21.2087 36.8295 22.198V27ZM34.7155 24.13V23.766H33.3995C32.5595 23.766 32.1395 24.0273 32.1395 24.55C32.1395 24.8207 32.2375 25.0307 32.4335 25.18C32.6388 25.32 32.9282 25.39 33.3015 25.39C33.6748 25.39 34.0015 25.278 34.2815 25.054C34.5708 24.8207 34.7155 24.5127 34.7155 24.13ZM40.8783 27L37.8963 19.454H40.0803L41.9563 24.2L43.8323 19.454H46.0163L43.0343 27H40.8783ZM53.7754 25.908C52.9261 26.7107 51.9274 27.112 50.7794 27.112C49.6408 27.112 48.6981 26.762 47.9514 26.062C47.2048 25.3527 46.8314 24.4053 46.8314 23.22C46.8314 22.0347 47.2094 21.092 47.9654 20.392C48.7308 19.692 49.6314 19.342 50.6674 19.342C51.7034 19.342 52.5808 19.6547 53.2994 20.28C54.0274 20.9053 54.3914 21.764 54.3914 22.856V23.976H48.9034C48.9688 24.3867 49.1834 24.7227 49.5474 24.984C49.9114 25.2453 50.3221 25.376 50.7794 25.376C51.5168 25.376 52.1234 25.1287 52.5994 24.634L53.7754 25.908ZM52.2634 22.478C52.2168 22.03 52.0488 21.6847 51.7594 21.442C51.4701 21.1993 51.1154 21.078 50.6954 21.078C50.2848 21.078 49.9068 21.204 49.5614 21.456C49.2161 21.708 49.0154 22.0487 48.9594 22.478H52.2634ZM62.6851 22.436C63.2638 21.848 63.6745 21.3813 63.9171 21.036C64.1691 20.6813 64.2951 20.3407 64.2951 20.014C64.2951 19.6873 64.1878 19.4167 63.9731 19.202C63.7585 18.978 63.4831 18.866 63.1471 18.866C62.5311 18.866 61.9478 19.3047 61.3971 20.182L59.6471 19.146C60.1045 18.4367 60.6038 17.9 61.1451 17.536C61.6958 17.172 62.3911 16.99 63.2311 16.99C64.0805 16.99 64.8225 17.2607 65.4571 17.802C66.1011 18.334 66.4231 19.062 66.4231 19.986C66.4231 20.49 66.2925 20.9753 66.0311 21.442C65.7791 21.8993 65.3078 22.4873 64.6171 23.206L62.8531 25.04H66.7171V27H59.8151V25.376L62.6851 22.436ZM74.7637 17.214V19.104H70.8997V20.742C71.189 20.658 71.5204 20.616 71.8937 20.616C72.8364 20.616 73.6484 20.9007 74.3297 21.47C75.011 22.0393 75.3517 22.8093 75.3517 23.78C75.3517 24.7413 74.997 25.5393 74.2877 26.174C73.5877 26.7993 72.7197 27.112 71.6837 27.112C70.3584 27.112 69.2524 26.622 68.3657 25.642L69.5137 24.046C69.5977 24.13 69.7097 24.2327 69.8497 24.354C69.9897 24.4753 70.2464 24.6387 70.6197 24.844C70.993 25.04 71.3664 25.138 71.7397 25.138C72.113 25.138 72.4444 25.026 72.7337 24.802C73.023 24.578 73.1677 24.2467 73.1677 23.808C73.1677 23.3693 73.009 23.0333 72.6917 22.8C72.3837 22.5573 71.9824 22.436 71.4877 22.436C70.993 22.436 70.419 22.6133 69.7657 22.968L68.8557 21.988V17.214H74.7637ZM86.6215 17.214L79.6075 27H77.1995L84.2275 17.214H86.6215ZM84.2695 25.656C84.3815 25.7773 84.5215 25.838 84.6895 25.838C84.8575 25.838 84.9975 25.7773 85.1095 25.656C85.2215 25.5253 85.2775 25.3573 85.2775 25.152C85.2775 24.9467 85.2215 24.7787 85.1095 24.648C84.9975 24.508 84.8575 24.438 84.6895 24.438C84.5309 24.438 84.3955 24.508 84.2835 24.648C84.1715 24.7787 84.1155 24.9467 84.1155 25.152C84.1155 25.3573 84.1669 25.5253 84.2695 25.656ZM86.7615 25.152C86.7615 25.7027 86.5655 26.1693 86.1735 26.552C85.7815 26.9253 85.2869 27.112 84.6895 27.112C84.1015 27.112 83.6115 26.9207 83.2195 26.538C82.8275 26.1553 82.6315 25.6933 82.6315 25.152C82.6315 24.6013 82.8275 24.1347 83.2195 23.752C83.6115 23.3693 84.1015 23.178 84.6895 23.178C85.2869 23.178 85.7815 23.3693 86.1735 23.752C86.5655 24.1347 86.7615 24.6013 86.7615 25.152ZM78.7535 19.93C78.8655 20.0513 79.0055 20.112 79.1735 20.112C79.3415 20.112 79.4815 20.0513 79.5935 19.93C79.7055 19.7993 79.7615 19.6313 79.7615 19.426C79.7615 19.2207 79.7055 19.0527 79.5935 18.922C79.4815 18.782 79.3415 18.712 79.1735 18.712C79.0149 18.712 78.8795 18.782 78.7675 18.922C78.6555 19.0527 78.5995 19.2207 78.5995 19.426C78.5995 19.6313 78.6509 19.7993 78.7535 19.93ZM81.2455 19.426C81.2455 19.9767 81.0495 20.4433 80.6575 20.826C80.2655 21.1993 79.7709 21.386 79.1735 21.386C78.5855 21.386 78.0955 21.1947 77.7035 20.812C77.3115 20.4293 77.1155 19.9673 77.1155 19.426C77.1155 18.8753 77.3115 18.4087 77.7035 18.026C78.0955 17.6433 78.5855 17.452 79.1735 17.452C79.7709 17.452 80.2655 17.6433 80.6575 18.026C81.0495 18.4087 81.2455 18.8753 81.2455 19.426Z"
                    fill="#23A6F0"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 ">
            <div className=" mt-10  border-primary border-[1px] border-solid rounded-[10px] py-16">
              <div className="text-center space-y-8 pb-4">
                <h3 className="text-h3 text-text font-primary font-bold leading-8 tracking-[0.1px]">
                  FREE
                </h3>
                <h5 className="text-second-text text-h5 font-primary font-bold leading-6 tracking-[0.1px]">
                  Organize across all <br /> apps by hand
                </h5>

                <div className="max-w-[114px] mx-auto gap-0.5 flex justify-between">
                  <div>
                    <h2 className="text-h2 text-primary leading-12 tracking-[0.2px] font-primary font-bold">
                      0
                    </h2>
                  </div>
                  <div className="text-left">
                    <h3 className="text-h3 text-primary leading-8 tracking-[0.2px] font-primary font-bold">
                      $
                    </h3>
                    <h6 className="text-h6 text-disabled-element leading-6 tracking-[0.2px] font-primary font-bold">
                      Per Month
                    </h6>
                  </div>
                </div>
              </div>
              <div className="max-w-[247px] mx-auto space-y-4">
                <div className="flex justify-between items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2DC071"
                    />
                    <g clip-path="url(#clip0_2872_10010)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10010">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h6 className="text-h6 text-text font-primary font-bold leading-6 tracking-[0.2px]">
                    Unlimited product updates
                  </h6>
                </div>
                <div className="flex justify-between items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2DC071"
                    />
                    <g clip-path="url(#clip0_2872_10010)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10010">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h6 className="text-h6 text-text font-primary font-bold leading-6 tracking-[0.2px]">
                    Unlimited product updates
                  </h6>
                </div>
                <div className="flex justify-between items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2DC071"
                    />
                    <g clip-path="url(#clip0_2872_10010)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10010">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h6 className="text-h6 text-text font-primary font-bold leading-6 tracking-[0.2px]">
                    Unlimited product updates
                  </h6>
                </div>
                <div className="flex gap-3.5 items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#BDBDBD"
                    />
                    <g clip-path="url(#clip0_2872_10025)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10025">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <h6 className="text-h6 text-text font-primary font-bold leading-6 tracking-[0.2px]">
                    1GB Cloud storage
                  </h6>
                </div>
                <div className="flex gap-3.5 items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#BDBDBD"
                    />
                    <g clip-path="url(#clip0_2872_10025)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10025">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <h6 className="text-h6 text-text font-primary font-bold leading-6 tracking-[0.2px]">
                    Email and community support
                  </h6>
                </div>
              </div>
              <div className="flex justify-center py-4">
                <button className=" py-[15px] px-[80px] text-h6 leading-7 tracking-[0.2px] bg-dark-background border-[1px] border-solid rounded-[5px] cursor-pointer focus:outline-none text-light-text font-primary font-bold ">
                  Try for free
                </button>
              </div>
            </div>

            <div className=" bg-text border-[1px] border-solid rounded-[10px] py-19 ">
              <div className="text-center space-y-8 pb-4">
                <h3 className="text-h3 text-light-text font-primary font-bold leading-8 tracking-[0.1px]">
                  STANDARD
                </h3>
                <h5 className="text-light-text text-h5 font-primary font-bold leading-6 tracking-[0.1px]">
                  Organize across all <br /> apps by hand
                </h5>

                <div className="max-w-[174px] mx-auto gap-3.5 flex justify-between">
                  <div>
                    <h2 className="text-h2 text-primary leading-12 tracking-[0.2px] font-primary font-bold">
                      9.99
                    </h2>
                  </div>
                  <div className="text-left">
                    <h3 className="text-h3 text-primary leading-8 tracking-[0.2px] font-primary font-bold">
                      $
                    </h3>
                    <h6 className="text-h6 text-disabled-element leading-6 tracking-[0.2px] font-primary font-bold">
                      Per Month
                    </h6>
                  </div>
                </div>
              </div>
              <div className="max-w-[247px] mx-auto space-y-4">
                <div className="flex justify-between items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2DC071"
                    />
                    <g clip-path="url(#clip0_2872_10010)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10010">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h6 className="text-h6 text-light-text font-primary font-bold leading-6 tracking-[0.2px]">
                    Unlimited product updates
                  </h6>
                </div>
                <div className="flex justify-between items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2DC071"
                    />
                    <g clip-path="url(#clip0_2872_10010)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10010">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h6 className="text-h6 text-light-text font-primary font-bold leading-6 tracking-[0.2px]">
                    Unlimited product updates
                  </h6>
                </div>
                <div className="flex justify-between items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2DC071"
                    />
                    <g clip-path="url(#clip0_2872_10010)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10010">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h6 className="text-h6 text-light-text font-primary font-bold leading-6 tracking-[0.2px]">
                    Unlimited product updates
                  </h6>
                </div>
                <div className="flex gap-3.5 items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#BDBDBD"
                    />
                    <g clip-path="url(#clip0_2872_10025)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10025">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <h6 className="text-h6 text-light-text font-primary font-bold leading-6 tracking-[0.2px]">
                    1GB Cloud storage
                  </h6>
                </div>
                <div className="flex gap-3.5 items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#BDBDBD"
                    />
                    <g clip-path="url(#clip0_2872_10025)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10025">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <h6 className="text-h6 text-light-text font-primary font-bold leading-6 tracking-[0.2px]">
                    Email and community support
                  </h6>
                </div>
              </div>
              <div className="flex justify-center py-4">
                <button className=" py-[15px] px-[80px] text-h6 leading-7 tracking-[0.2px] bg-primary border-primary border-[1px] border-solid rounded-[5px] cursor-pointer focus:outline-none text-light-text font-primary font-bold ">
                  Try for free
                </button>
              </div>
            </div>

            <div className=" mt-10 border-primary border-[1px] border-solid rounded-[10px] py-16">
              <div className="text-center space-y-8 pb-4">
                <h3 className="text-h3 text-text font-primary font-bold leading-8 tracking-[0.1px]">
                  FREE
                </h3>
                <h5 className="text-second-text text-h5 font-primary font-bold leading-6 tracking-[0.1px]">
                  Organize across all <br /> apps by hand
                </h5>

                <div className="max-w-[114px] mx-auto gap-0.5 flex justify-between">
                  <div>
                    <h2 className="text-h2 text-primary leading-12 tracking-[0.2px] font-primary font-bold">
                      0
                    </h2>
                  </div>
                  <div className="text-left">
                    <h3 className="text-h3 text-primary leading-8 tracking-[0.2px] font-primary font-bold">
                      $
                    </h3>
                    <h6 className="text-h6 text-disabled-element leading-6 tracking-[0.2px] font-primary font-bold">
                      Per Month
                    </h6>
                  </div>
                </div>
              </div>
              <div className="max-w-[247px] mx-auto space-y-4">
                <div className="flex justify-between items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2DC071"
                    />
                    <g clip-path="url(#clip0_2872_10010)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10010">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h6 className="text-h6 text-text font-primary font-bold leading-6 tracking-[0.2px]">
                    Unlimited product updates
                  </h6>
                </div>
                <div className="flex justify-between items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2DC071"
                    />
                    <g clip-path="url(#clip0_2872_10010)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10010">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h6 className="text-h6 text-text font-primary font-bold leading-6 tracking-[0.2px]">
                    Unlimited product updates
                  </h6>
                </div>
                <div className="flex justify-between items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#2DC071"
                    />
                    <g clip-path="url(#clip0_2872_10010)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10010">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h6 className="text-h6 text-text font-primary font-bold leading-6 tracking-[0.2px]">
                    Unlimited product updates
                  </h6>
                </div>
                <div className="flex gap-3.5 items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#BDBDBD"
                    />
                    <g clip-path="url(#clip0_2872_10025)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10025">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <h6 className="text-h6 text-text font-primary font-bold leading-6 tracking-[0.2px]">
                    1GB Cloud storage
                  </h6>
                </div>
                <div className="flex gap-3.5 items-center">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#BDBDBD"
                    />
                    <g clip-path="url(#clip0_2872_10025)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2872_10025">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(8.5 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <h6 className="text-h6 text-text font-primary font-bold leading-6 tracking-[0.2px]">
                    Email and community support
                  </h6>
                </div>
              </div>
              <div className="flex justify-center py-4">
                <button className=" py-[15px] px-[80px] text-h6 leading-7 tracking-[0.2px] bg-dark-background border-[1px] border-solid rounded-[5px] cursor-pointer focus:outline-none text-light-text font-primary font-bold ">
                  Try for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End of simple Pricing */}

      {/* companies */}
      <div className="bg-light-gray-1 py-20">
        <div className="max-w-[1200px] mx-auto text-center ">
          <h4 className="text-h4 text-text font-primary font-normal leading-8 tracking-[0.2px]">
            Trusted By Over 4000 Big Companies
          </h4>
          <div className=" py-16 max-w-[1200px] mx-auto flex justify-between items-center">
            <svg
              width="103"
              height="35"
              viewBox="0 0 103 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2865_4173)">
                <path
                  d="M23.2553 32.4249L29.4193 32.5526C27.2949 31.8183 25.2349 30.9244 23.2553 29.8709V32.4249ZM32.5414 31.5789V32.4249L29.4193 32.5526C35.2935 34.5479 40.6688 34.8193 44.66 33.7019C41.4574 33.7338 37.2891 33.2869 32.5414 31.5789ZM98.3488 13.1901C100.908 13.1901 103 11.131 103 8.577C103 6.02301 100.924 4.6662 98.3488 4.6662C95.7899 4.6662 93.6977 6.03897 93.6977 8.577C93.6977 11.115 95.7738 13.1901 98.3488 13.1901ZM93.6816 32.4249H103V14.7864H93.6816V32.4249ZM81.8205 32.4249H91.1388V1.25024L81.8205 5.60799V32.4249ZM76.8314 13.3657C73.9024 10.4606 68.7202 10.6362 68.7202 10.6362C68.7202 10.6362 63.5219 10.4606 60.6089 13.3657C57.6799 16.2709 57.9052 18.777 57.9052 21.762C57.9052 24.747 57.6799 27.2371 60.6089 30.1423C63.538 33.0474 68.7202 32.8718 68.7202 32.8718C68.7202 32.8718 73.9185 33.0474 76.8314 30.1423C79.7605 27.2371 79.5352 24.747 79.5352 21.762C79.5191 18.761 79.7444 16.2549 76.8314 13.3657ZM70.4261 24.8427C70.4261 25.4174 70.1364 26.838 68.7041 26.838C67.2718 26.838 66.9821 25.4174 66.9821 24.8427V18.3939C66.9821 17.0052 68.1569 16.654 68.7041 16.654C69.2513 16.654 70.4261 16.9892 70.4261 18.3939V24.8427ZM53.3346 13.3657C50.4055 10.4606 45.2233 10.6362 45.2233 10.6362C45.2233 10.6362 40.0411 10.4606 37.1121 13.3657C36.8063 13.669 36.5166 13.9883 36.2591 14.3235C30.1113 9.5986 24.5911 6.90094 19.8274 4.57043V1.2662L16.2063 2.95822C7.45129 -0.56948 1.88285 0.053056 0.547068 2.97418C0.547068 2.97418 -3.46027 8.20986 10.493 20.6606V32.4249H19.8113V27.8596C18.7652 27.1892 17.7191 26.4709 16.6891 25.6887C14.3072 23.9009 12.2794 22.2409 10.5091 20.6765V15.7282C12.6174 18.0747 15.4177 20.7404 19.1032 23.7573L19.8274 24.3319V19.5751C19.8274 18.4737 20.101 16.67 21.5655 16.67C23.03 16.67 23.2714 17.7714 23.2714 19.0643V26.838C26.1683 28.7855 29.2744 30.3657 32.5575 31.5629V16.5742C32.5575 13.5892 30.401 10.6042 26.0235 10.6042C23.4807 10.5883 21.1149 11.9132 19.8274 14.1V5.4324C26.5707 8.76855 33.33 12.8549 35.905 14.7385C34.2635 17.069 34.4083 19.2239 34.4083 21.7141C34.4083 24.6991 34.183 27.1892 37.1121 30.0944C40.0411 32.9995 45.2233 32.824 45.2233 32.824C45.2233 32.824 50.4216 32.9995 53.3346 30.0944C56.2636 27.1892 56.0222 24.6991 56.0222 21.7141C56.0222 18.761 56.2636 16.2549 53.3346 13.3657ZM10.493 5.60799V15.7122C2.65535 7.01268 4.23254 3.58075 4.82801 3.08592C7.00066 1.2662 10.8632 1.80893 15.1924 3.42113L10.493 5.60799ZM46.9453 24.8427C46.9453 25.4174 46.6557 26.838 45.2233 26.838C43.791 26.838 43.5013 25.4174 43.5013 24.8427V18.3939C43.5013 17.0052 44.6761 16.654 45.2233 16.654C45.7705 16.654 46.9453 16.9892 46.9453 18.3939V24.8427Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_2865_4173">
                  <rect
                    width="103"
                    height="34"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="84"
              height="59"
              viewBox="0 0 84 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2865_4176)">
                <path
                  d="M0.5 0.995234H13.1121V35.0099C13.1121 40.4046 15.5437 43.6154 17.5215 44.9519C15.4627 46.761 9.22148 48.3582 4.52031 44.4955C1.76445 42.2137 0.5 38.4162 0.5 34.8795V0.995234ZM79.2689 29.2729V25.6872H83.1272V13.1701H78.8961C77.2588 5.62396 70.5961 0.017334 62.6365 0.017334C53.4611 0.017334 45.9879 7.51457 45.9879 16.7557V45.9624C48.5816 46.3372 51.7266 45.9135 54.3689 43.6806C57.141 41.3988 58.3893 37.6176 58.3893 34.0646V32.9726H64.6791V20.4555H58.3893V16.6579C58.3893 11.0187 66.8514 11.0187 66.8514 16.6579V29.224C66.8514 38.4488 74.3084 45.9624 83.5 45.9624V33.4941C81.1494 33.4941 79.2689 31.5872 79.2689 29.2729ZM31.5602 13.1375V31.5546C31.5602 34.0646 27.702 34.0646 27.702 31.5546V13.1375H15.252V34.7654C15.252 38.6444 16.5488 43.5665 22.5469 45.18C28.5449 46.7773 31.9816 43.4524 31.9816 43.4524C31.6412 45.6364 29.6311 47.2499 26.324 47.5759C23.8113 47.8367 20.6178 46.9892 19.0291 46.3046V57.7624C23.098 58.9847 27.3777 59.3596 31.6088 58.5284C39.2441 57.0452 44.0588 50.64 44.0588 42.0996V13.056H31.5602V13.1375Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_2865_4176">
                  <rect
                    width="83"
                    height="59"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="102"
              height="75"
              viewBox="0 0 102 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2865_4179)">
                <path
                  d="M102 0.145752C89.1225 8.82826 87.7519 15.1296 86.6362 17.0572C85.5684 19.0334 84.7716 26.825 82.9228 30.5993C81.0581 34.4222 74.2847 37.4352 72.3881 38.6987C70.5234 39.9622 67.8778 44.8704 65.7103 49.0982C48.4819 48.3855 39.0309 55.3833 24.4003 64.2602C29.0859 62.6889 31.3012 61.555 31.3012 61.555C46.3144 55.7235 53.5022 50.4913 76.1016 53.5853C76.2769 53.5853 76.4044 53.6825 76.5478 53.7149C77.1694 54.0712 77.3925 54.8326 77.0419 55.4643L68.4516 70.9827C68.0531 71.744 67.2084 72.149 66.3637 71.9708C46.155 68.1155 30.2016 74.7732 15.5391 74.9838C3.84094 75.1619 0 69.5572 0 69.298C0 69.1198 0.095625 69.0226 0.270938 69.0226C0.270938 69.0226 6.375 69.0226 16.7025 66.5442C28.4325 43.8175 38.8875 35.8639 50.2669 35.8639C50.2669 35.8639 61.6941 35.8639 64.7062 45.8909C68.34 39.46 69.2166 37.9211 69.2166 37.9211C70.0612 36.3985 74.7947 25.4157 82.9866 15.0162C91.1944 4.64899 97.3941 2.0734 102 0.145752Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_2865_4179">
                  <rect width="102" height="75" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="103"
              height="43"
              viewBox="0 0 103 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2865_4182)">
                <path
                  d="M26.5554 3.79318L19.5868 5.25682L19.5547 27.9114C19.5547 32.0955 22.7412 34.8 26.9739 34.8C29.3236 34.8 31.0456 34.3705 31.9951 33.8614V28.4841C31.0778 28.85 26.5715 30.1546 26.5715 25.9864V15.9318H31.9951V9.91818H26.5715L26.5554 3.79318ZM40.895 12.0023L40.4604 9.91818H34.2804V34.2909H41.41V17.8886C43.0998 15.6932 45.9484 16.1227 46.8658 16.4091V9.91818C45.9001 9.58409 42.5687 8.96364 40.895 12.0023ZM55.7495 0.5L48.5717 2.01136V7.77045L55.7495 6.25909V0.5ZM7.22685 17.0932C7.22685 15.9955 8.16028 15.5659 9.657 15.55C11.8297 15.55 14.5978 16.2023 16.7704 17.3636V10.7136C14.4047 9.79091 12.0389 9.425 9.6731 9.425C3.87935 9.425 0.0168457 12.4159 0.0168457 17.4114C0.0168457 25.2386 10.8801 23.9659 10.8801 27.3386C10.8801 28.6432 9.73747 29.0727 8.14419 29.0727C5.77841 29.0727 2.7206 28.1023 0.322627 26.8136V33.1773C2.9781 34.3068 5.66575 34.7841 8.1281 34.7841C14.0667 34.7841 18.1545 32.2705 18.1545 27.1796C18.1545 18.7636 7.22685 20.275 7.22685 17.0932ZM103.001 22.3909C103.001 15.1523 99.4601 9.44091 92.6686 9.44091C85.877 9.44091 81.7409 15.1523 81.7409 22.3432C81.7409 30.8545 86.6173 34.7841 93.5698 34.7841C96.9817 34.7841 99.5406 34.0205 101.488 32.9545V27.6409C99.5406 28.6114 97.3036 29.2 94.4711 29.2C91.6869 29.2 89.2406 28.2295 88.9187 24.9205H102.904C102.936 24.5545 103.001 23.075 103.001 22.3909ZM88.8544 19.7182C88.8544 16.5364 90.8339 15.2 92.6203 15.2C94.3745 15.2 96.2414 16.5364 96.2414 19.7182H88.8544ZM70.6845 9.44091C67.8842 9.44091 66.0817 10.7455 65.0839 11.6523L64.7137 9.90227H58.4211V42.4841L65.5667 40.9886L65.5828 33.0023C66.6128 33.75 68.1417 34.7841 70.6362 34.7841C75.754 34.7841 80.4212 31.0932 80.4212 22.1205C80.4373 13.9114 75.7058 9.44091 70.6845 9.44091ZM68.9786 28.9296C67.3048 28.9296 66.307 28.325 65.615 27.5932L65.5667 17.0932C66.307 16.2818 67.337 15.6932 68.9786 15.6932C71.5858 15.6932 73.3883 18.5886 73.3883 22.2795C73.4044 26.0818 71.634 28.9296 68.9786 28.9296ZM48.5878 34.2909H55.7656V9.91818H48.5878V34.2909Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_2865_4182">
                  <rect
                    width="103"
                    height="42"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="105"
              height="63"
              viewBox="0 0 105 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2865_4185)">
                <path
                  d="M29.8872 22.9887C29.7706 26.6268 31.6044 28.2378 31.6497 29.261C31.6281 29.4692 31.5566 29.6693 31.441 29.8445C31.3255 30.0197 31.1693 30.165 30.9856 30.2681L28.912 31.7072C28.6437 31.8938 28.3274 32.0007 28 32.0156C27.9304 32.0124 26.6733 32.3096 24.6824 27.9021C23.4677 29.4055 21.9223 30.6133 20.1643 31.4332C18.4063 32.2531 16.4824 32.6633 14.54 32.6324C11.9027 32.7754 4.75553 31.1483 5.12326 23.6039C4.86569 17.4553 10.6408 13.6357 16.6135 13.9585C17.7636 13.9618 20.1125 14.018 24.2256 14.9656V12.4567C24.6613 8.20668 21.8443 4.90911 16.9666 5.40383C16.5778 5.40543 13.8239 5.32352 9.54083 7.02771C8.34855 7.57061 8.19628 7.48067 7.79939 7.48067C6.59902 7.48067 7.0931 4.03051 7.32313 3.59362C8.16712 2.56564 13.1322 0.646211 18.005 0.673517C21.2631 0.387814 24.5037 1.38483 27.0264 3.44906C28.0519 4.5864 28.8343 5.91801 29.3262 7.3635C29.8182 8.80898 30.0096 10.3383 29.8889 11.8592L29.8872 22.9887ZM15.8877 28.1912C21.1412 28.1157 23.3654 24.9836 23.8724 23.2971C24.2709 21.6828 24.2045 20.6613 24.2045 18.8961C22.638 18.5234 20.3831 18.117 17.796 18.1138C15.3418 17.9307 10.8595 19.0181 11.0344 23.2955C10.8335 25.9923 12.8358 28.339 15.8877 28.1912ZM43.5757 31.8936C42.3024 32.0092 41.7095 31.1129 41.5216 30.2279L33.4543 3.78155C33.2972 3.33502 33.1935 2.87403 33.1433 2.40341C33.1136 2.20939 33.1627 2.01158 33.28 1.85346C33.3972 1.69535 33.573 1.58985 33.7686 1.56015C33.8075 1.55372 33.4236 1.56015 37.373 1.56015C38.7953 1.4188 39.2586 2.5287 39.406 3.2258L45.1924 25.8462L50.5641 3.2258C50.65 2.70859 51.0404 1.44771 52.6376 1.58103H55.4175C55.769 1.55212 57.2172 1.50072 57.4715 3.24668L62.8854 26.1562L68.8581 3.24668C68.9358 2.89652 69.2987 1.42041 70.9122 1.58103H74.1067C74.2444 1.56015 75.1029 1.45093 74.9571 2.95916C74.8875 3.25631 75.5095 1.24694 66.412 30.2488C66.2257 31.1338 65.6312 32.0301 64.3579 31.9144H61.3302C59.558 32.0992 59.3037 30.3628 59.2761 30.1878L53.9044 8.1617L48.5943 30.1653C48.5684 30.3404 48.314 32.0767 46.5402 31.892H43.5757V31.8936ZM87.8778 32.7979C86.9252 32.7995 82.3829 32.7497 78.5858 30.8238C78.2076 30.665 77.8854 30.3984 77.6602 30.0579C77.4349 29.7173 77.3167 29.3181 77.3206 28.9108V27.1841C77.3206 25.8269 78.325 26.0758 78.751 26.2381C80.3775 26.8902 81.4207 27.3849 83.4181 27.78C89.3551 28.9895 91.9665 27.4106 92.6064 27.0605C94.7366 25.806 94.9051 22.9357 93.4568 21.4467C91.7591 20.0349 90.9492 19.9819 84.8501 18.0737C84.0985 17.8665 77.771 15.8876 77.7564 9.66352C77.6576 5.12756 81.8143 0.639785 89.0182 0.676728C91.0707 0.675122 96.5396 1.3401 98.0202 3.18564C98.2389 3.52134 98.3474 3.91647 98.3312 4.31642V5.9403C98.3312 6.65346 98.0688 7.01004 97.5423 7.01004C96.2933 6.87191 94.0773 5.2159 89.5787 5.28336C88.4626 5.22554 83.1168 5.42953 83.3565 9.29409C83.2869 12.3395 87.6672 13.4815 88.1677 13.6132C94.074 15.3752 96.0487 15.6676 98.3928 18.3644C101.169 21.9382 99.6725 26.1224 99.0975 27.2693C96.0066 33.291 88.0138 32.8011 87.8778 32.7979ZM94.3899 49.6407C83.0455 57.948 66.5772 62.3699 52.5162 62.3699C33.5435 62.494 15.2103 55.5768 1.12039 42.9781C0.0625718 42.032 0.995656 40.7358 2.28189 41.457C17.9118 50.322 35.6081 54.9799 53.6145 54.9685C67.0611 54.897 80.3611 52.1923 92.7505 47.0097C94.6588 46.2066 96.2771 48.2625 94.3899 49.6407ZM99.1185 44.2936C97.6671 42.4432 89.5155 43.4294 85.8658 43.8615C84.7659 43.9852 84.5796 43.0391 85.5758 42.3404C92.0669 37.8157 102.728 39.1119 103.952 40.633C105.175 42.1541 103.62 52.7455 97.5439 57.8051C96.6108 58.5873 95.7183 58.1745 96.133 57.1465C97.5002 53.7333 100.57 46.1455 99.1185 44.2936Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_2865_4185">
                  <rect
                    width="104"
                    height="62"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="77"
              height="73"
              viewBox="0 0 77 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2865_4188)">
                <path
                  d="M67.926 28.1614C65.531 28.1614 63.4234 29.1556 61.8747 30.7111C56.1747 26.7503 48.4949 24.2006 39.9848 23.928L44.4075 3.91556L58.4898 7.09061C58.4898 10.5543 61.2999 13.3766 64.7486 13.3766C68.2613 13.3766 71.0873 10.4741 71.0873 7.01043C71.0873 3.54674 68.2772 0.644287 64.7486 0.644287C62.2898 0.644287 60.1663 2.1356 59.1125 4.17213L43.5613 0.70843C42.7789 0.499966 42.0125 1.06121 41.805 1.84696L36.9512 23.912C28.505 24.2648 20.905 26.8144 15.189 30.7752C13.6403 29.1556 11.4529 28.1614 9.0579 28.1614C0.18059 28.1614 -2.72529 40.124 5.4016 44.2131C5.1142 45.4799 4.98647 46.8269 4.98647 48.1739C4.98647 61.6118 20.0587 72.5 38.5638 72.5C57.1487 72.5 72.2209 61.6118 72.2209 48.1739C72.2209 46.8269 72.0772 45.4158 71.726 44.149C79.6932 40.0438 76.7554 28.1614 67.926 28.1614ZM18.2865 45.063C18.2865 41.5351 21.0966 38.6968 24.6251 38.6968C28.0739 38.6968 30.884 41.5191 30.884 45.063C30.884 48.5267 28.0739 51.349 24.6251 51.349C21.1125 51.365 18.2865 48.5267 18.2865 45.063ZM52.5024 60.0563C46.6907 65.8933 30.2932 65.8933 24.4814 60.0563C23.8428 59.4951 23.8428 58.5008 24.4814 57.8594C25.0403 57.2982 26.0302 57.2982 26.589 57.8594C31.0276 62.4296 45.7487 62.5098 50.3789 57.8594C50.9377 57.2982 51.9276 57.2982 52.4865 57.8594C53.1411 58.5008 53.1411 59.4951 52.5024 60.0563ZM52.3747 51.365C48.926 51.365 46.1159 48.5427 46.1159 45.079C46.1159 41.5512 48.926 38.7129 52.3747 38.7129C55.8873 38.7129 58.7134 41.5351 58.7134 45.079C58.6974 48.5267 55.8873 51.365 52.3747 51.365Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_2865_4188">
                  <rect
                    width="76"
                    height="72"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      {/* End of companies */}

      {/* FAQ  */}

      <div className="max-w-[1200px] mx-auto my-20">
        <div className="text-center py-12 space-y-2.5">
          <h2 className="text-h2 font-primary font-bold text-text leading-12 tracking-[0.2px]">
            Pricing FAQs
          </h2>
          <h4 className="text-h4 text-second-text font-primary font-normal leading-7 tracking-[0.2px]">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics
          </h4>
        </div>

        <div className="grid space-y-7 grid-cols-2 ">
          <div className="w-[490px] py-6 flex gap-5">
            <div>
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#23A6F0"
                />
              </svg>
            </div>
            <div>
              <h5 className="text-h5 text-text font-primary font-bold leading-6 tracking-[0.1px]">
                the quick fox jumps over the lazy dog
              </h5>
              <p className="text-h6 font-primary font-normal text-second-text leading-5 tracking-[0.1px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.{" "}
              </p>
            </div>
          </div>

          <div className="w-[490px] py-6 flex gap-5">
            <div>
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#23A6F0"
                />
              </svg>
            </div>
            <div>
              <h5 className="text-h5 text-text font-primary font-bold leading-6 tracking-[0.1px]">
                the quick fox jumps over the lazy dog
              </h5>
              <p className="text-h6 font-primary font-normal text-second-text leading-5 tracking-[0.1px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.{" "}
              </p>
            </div>
          </div>

          <div className="w-[490px] py-6 flex gap-5">
            <div>
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#23A6F0"
                />
              </svg>
            </div>
            <div>
              <h5 className="text-h5 text-text font-primary font-bold leading-6 tracking-[0.1px]">
                the quick fox jumps over the lazy dog
              </h5>
              <p className="text-h6 font-primary font-normal text-second-text leading-5 tracking-[0.1px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.{" "}
              </p>
            </div>
          </div>

          <div className="w-[490px] py-6 flex gap-5">
            <div>
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#23A6F0"
                />
              </svg>
            </div>
            <div>
              <h5 className="text-h5 text-text font-primary font-bold leading-6 tracking-[0.1px]">
                the quick fox jumps over the lazy dog
              </h5>
              <p className="text-h6 font-primary font-normal text-second-text leading-5 tracking-[0.1px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.{" "}
              </p>
            </div>
          </div>

          <div className="w-[490px] py-6 flex gap-5">
            <div>
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#23A6F0"
                />
              </svg>
            </div>
            <div>
              <h5 className="text-h5 text-text font-primary font-bold leading-6 tracking-[0.1px]">
                the quick fox jumps over the lazy dog
              </h5>
              <p className="text-h6 font-primary font-normal text-second-text leading-5 tracking-[0.1px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.{" "}
              </p>
            </div>
          </div>

          <div className="w-[490px] py-6 flex gap-5">
            <div>
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#23A6F0"
                />
              </svg>
            </div>
            <div>
              <h5 className="text-h5 text-text font-primary font-bold leading-6 tracking-[0.1px]">
                the quick fox jumps over the lazy dog
              </h5>
              <p className="text-h6 font-primary font-normal text-second-text leading-5 tracking-[0.1px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center py-12">
          <h4 className="text-h4 text-second-text font-primary font-normal leading-7 tracking-[0.2px]">
            Haven’t got your answer? Contact our support
          </h4>
        </div>
      </div>

      {/* End of FAQ */}
      <Trial />

      <Footer />
    </>
  );
};
export default PricingPage;
