import { Footer } from "@/components/footer";

const ContactPage = () => {
  return (
    <>
      <div>
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
        {/* contact section */}
        <div>
          <div
            className="h-[100%] max-w-full object-fill flex justify-center items-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(/images/contact/background/contact-bg.jpg)`,
            }}
          >
            <div className="max-w-[1200px] space-y-9 w-full mx-auto text-second-text-2">
              <div className="py-[245px] space-y-[25px]">
                <h5 className="text-h5 py-8 uppercase font-primary font-bold leading-6 tracking-[0.1px] text-text ">
                  contact us
                </h5>
                <h1 className="text-text font-primary font-bold text-h1 leading-12 tracking-[0.2px]">
                  Get in touch today!
                </h1>
                <h4 className="font-primary py-8 text-h4 leading-7 tracking-[0.2px] font-normal text-second-text">
                  We know how large objects will act,
                  <br /> but things on a small scale
                </h4>

                <h3 className="text-text font-primary font-bold text-h3 leading-12 tracking-[0.2px]">
                  Phone ; +451 215 215
                </h3>
                <h3 className="text-text font-primary font-bold text-h3 leading-12 tracking-[0.2px]">
                  Fax : +451 215 215
                </h3>

                <div className="w-[242px] flex justify-between">
                  <svg
                    width="30"
                    height="25"
                    viewBox="0 0 30 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 2.98241C28.8766 3.48007 27.685 3.80674 26.4649 3.95155C27.7358 3.18983 28.7116 1.98362 29.1711 0.546431C27.963 1.26337 26.6412 1.76849 25.2628 2.03998C24.14 0.843852 22.5405 0.0963135 20.7702 0.0963135C17.3711 0.0963135 14.6152 2.85209 14.6152 6.251C14.6152 6.73346 14.6696 7.20315 14.7745 7.65373C9.6593 7.39698 5.12414 4.9467 2.0884 1.22295C1.55871 2.13198 1.2552 3.18936 1.2552 4.31717C1.2552 6.45256 2.34188 8.33635 3.99328 9.44014C3.01588 9.40953 2.05998 9.14554 1.20539 8.67022C1.20504 8.696 1.20504 8.72178 1.20504 8.74768C1.20504 11.7297 3.3266 14.2174 6.14215 14.7828C5.2358 15.0293 4.28511 15.0654 3.3627 14.8883C4.14586 17.3335 6.41895 19.1129 9.11215 19.1627C7.0057 20.8134 4.35176 21.7974 1.46824 21.7974C0.971367 21.7974 0.481523 21.7683 0 21.7114C2.72379 23.4578 5.95898 24.4767 9.43477 24.4767C20.7559 24.4767 26.9466 15.0981 26.9466 6.96479C26.9466 6.69784 26.9407 6.43241 26.9288 6.1685C28.1337 5.29743 29.1737 4.21852 30 2.98241Z"
                      fill="#252B42"
                    />
                  </svg>

                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2879_7980)">
                      <path
                        d="M28.3443 30.0001C29.2586 30.0001 30 29.2588 30 28.3444V1.65574C30 0.741211 29.2586 0 28.3443 0H1.65574C0.741094 0 0 0.741211 0 1.65574V28.3444C0 29.2588 0.741094 30.0001 1.65574 30.0001H28.3443Z"
                        fill="#252B42"
                      />
                      <path
                        d="M20.6993 30.0001V18.3825H24.5989L25.1828 13.855H20.6993V10.9642C20.6993 9.65333 21.0634 8.76001 22.9432 8.76001L25.3407 8.75896V4.70954C24.9259 4.65435 23.5028 4.53107 21.8471 4.53107C18.3903 4.53107 16.0239 6.64103 16.0239 10.5159V13.855H12.1143V18.3825H16.0239V30.0001H20.6993Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2879_7980">
                        <rect width="30" height="30.0001" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9998 7.30875C10.7435 7.30875 7.30854 10.7437 7.30854 15C7.30854 19.2563 10.7435 22.6912 14.9998 22.6912C19.2561 22.6912 22.6911 19.2563 22.6911 15C22.6911 10.7437 19.2561 7.30875 14.9998 7.30875ZM14.9998 19.9987C12.2473 19.9987 10.001 17.7525 10.001 15C10.001 12.2475 12.2473 10.0012 14.9998 10.0012C17.7523 10.0012 19.9986 12.2475 19.9986 15C19.9986 17.7525 17.7523 19.9987 14.9998 19.9987ZM23.0061 5.20125C22.0123 5.20125 21.2098 6.00375 21.2098 6.9975C21.2098 7.99125 22.0123 8.79375 23.0061 8.79375C23.9998 8.79375 24.8023 7.995 24.8023 6.9975C24.8026 6.76153 24.7563 6.52782 24.6662 6.30975C24.576 6.09169 24.4437 5.89355 24.2769 5.7267C24.11 5.55984 23.9119 5.42754 23.6938 5.33738C23.4757 5.24721 23.242 5.20095 23.0061 5.20125ZM29.9923 15C29.9923 12.93 30.0111 10.8787 29.8948 8.8125C29.7786 6.4125 29.2311 4.2825 27.4761 2.5275C25.7173 0.768747 23.5911 0.224997 21.1911 0.108747C19.1211 -0.00750281 17.0698 0.0112473 15.0035 0.0112473C12.9335 0.0112473 10.8823 -0.00750281 8.81604 0.108747C6.41604 0.224997 4.28604 0.772497 2.53104 2.5275C0.772288 4.28625 0.228537 6.4125 0.112287 8.8125C-0.00396278 10.8825 0.0147873 12.9337 0.0147873 15C0.0147873 17.0662 -0.00396278 19.1213 0.112287 21.1875C0.228537 23.5875 0.776038 25.7175 2.53104 27.4725C4.28979 29.2313 6.41604 29.775 8.81604 29.8913C10.886 30.0075 12.9373 29.9888 15.0035 29.9888C17.0735 29.9888 19.1248 30.0075 21.1911 29.8913C23.5911 29.775 25.7211 29.2275 27.4761 27.4725C29.2348 25.7137 29.7786 23.5875 29.8948 21.1875C30.0148 19.1213 29.9923 17.07 29.9923 15ZM26.6923 23.8425C26.4186 24.525 26.0886 25.035 25.5598 25.56C25.0311 26.0887 24.5248 26.4188 23.8423 26.6925C21.8698 27.4762 17.1861 27.3 14.9998 27.3C12.8135 27.3 8.12604 27.4763 6.15354 26.6963C5.47104 26.4225 4.96104 26.0925 4.43604 25.5638C3.90729 25.035 3.57729 24.5288 3.30354 23.8463C2.52354 21.87 2.69979 17.1862 2.69979 15C2.69979 12.8137 2.52354 8.12625 3.30354 6.15375C3.57729 5.47125 3.90729 4.96125 4.43604 4.43625C4.96479 3.91125 5.47104 3.5775 6.15354 3.30375C8.12604 2.52375 12.8135 2.7 14.9998 2.7C17.1861 2.7 21.8736 2.52375 23.8461 3.30375C24.5286 3.5775 25.0386 3.9075 25.5636 4.43625C26.0923 4.965 26.4223 5.47125 26.6961 6.15375C27.4761 8.12625 27.2998 12.8137 27.2998 15C27.2998 17.1862 27.4761 21.87 26.6923 23.8425Z"
                      fill="#252B42"
                    />
                  </svg>

                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5782 25.4624H21.1504V18.5282C21.1504 16.8747 21.1209 14.7461 18.8475 14.7461C16.5414 14.7461 16.1885 16.5477 16.1885 18.4078V25.4619H11.7609V11.2024H16.0114V13.1512H16.071C16.4963 12.4238 17.111 11.8254 17.8496 11.4198C18.5881 11.0142 19.4229 10.8165 20.2649 10.8477C24.7526 10.8477 25.58 13.7996 25.58 17.6398L25.5782 25.4624ZM6.76477 9.25338C5.34567 9.25361 4.19504 8.10334 4.19481 6.68423C4.19458 5.26513 5.34473 4.11451 6.76384 4.11427C8.18294 4.11392 9.33356 5.26419 9.3338 6.6833C9.33392 7.36478 9.06333 8.0184 8.58155 8.50038C8.09977 8.98236 7.44625 9.25322 6.76477 9.25338ZM8.9787 25.4625H4.54629V11.2024H8.97858V25.4624L8.9787 25.4625ZM27.7856 0.00217493H2.32139C1.11788 -0.0113659 0.130919 0.952719 0.116211 2.15622V27.7266C0.130452 28.9307 1.1173 29.8957 2.32127 29.8831H27.7856C28.9921 29.898 29.9828 28.933 29.9995 27.7266V2.15424C29.9823 0.9484 28.9915 -0.0155683 27.7856 0.000190493"
                      fill="#252B42"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of contact section */}

        {/* Office */}

        <div className="max-w-[1200px] mx-auto py-28">
          <div className="text-center pb-20">
            <h6 className="text-primary text-h6 leading-6 tracking-[0.2px] font-bold">
              VISIT OUR OFFICE
            </h6>
            <h2 className="font-primary text-h2 py-2.5 leading-12 tracking-[0.2px] font-bold">
              We help small businesses <br />
              with big ideas
            </h2>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="py-20">
              <div className="flex justify-center pb-4">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55.929 38.9947C55.5775 38.6426 55.16 38.3632 54.7004 38.1726C54.2408 37.982 53.7482 37.8839 53.2506 37.8839C52.7531 37.8839 52.2604 37.982 51.8008 38.1726C51.3413 38.3632 50.9238 38.6426 50.5722 38.9947L44.5335 45.0334C41.7339 44.1999 36.5097 42.3057 33.1987 38.9947C29.8876 35.6836 27.9934 30.4594 27.16 27.6598L33.1987 21.6211C33.5508 21.2696 33.8301 20.8521 34.0207 20.3925C34.2113 19.9329 34.3094 19.4403 34.3094 18.9427C34.3094 18.4452 34.2113 17.9525 34.0207 17.4929C33.8301 17.0333 33.5508 16.6159 33.1987 16.2643L18.0451 1.11076C17.6936 0.758646 17.2761 0.479298 16.8165 0.288701C16.3569 0.0981045 15.8642 0 15.3667 0C14.8692 0 14.3765 0.0981045 13.9169 0.288701C13.4573 0.479298 13.0398 0.758646 12.6883 1.11076L2.41418 11.3849C0.97459 12.8245 0.163873 14.802 0.19418 16.8212C0.281313 22.2159 1.70954 40.9533 16.4767 55.7204C31.2439 70.4876 49.9813 71.912 55.3797 72.003H55.4858C57.4861 72.003 59.3765 71.215 60.8085 69.783L71.0826 59.5088C71.4347 59.1573 71.7141 58.7398 71.9047 58.2802C72.0953 57.8207 72.1934 57.328 72.1934 56.8304C72.1934 56.3329 72.0953 55.8402 71.9047 55.3807C71.7141 54.9211 71.4347 54.5036 71.0826 54.1521L55.929 38.9947ZM55.4479 64.4224C50.72 64.3428 34.5435 63.0737 21.8335 50.3599C9.08175 37.6081 7.84673 21.3749 7.77097 16.7417L15.3667 9.14594L25.1635 18.9427L20.2651 23.8411C19.8198 24.2861 19.4924 24.835 19.3125 25.4382C19.1326 26.0414 19.1058 26.68 19.2346 27.2961C19.3256 27.7318 21.5494 38.0627 27.8381 44.3515C34.1268 50.6402 44.4578 52.864 44.8934 52.9549C45.5092 53.0874 46.1484 53.0627 46.7522 52.8833C47.356 52.7039 47.9049 52.3755 48.3485 51.9283L53.2506 47.0299L63.0474 56.8267L55.4479 64.4224Z"
                    fill="#23A6F0"
                  />
                </svg>
              </div>
              <div className="text-center space-y-4">
                <h6 className="text-h6 font-primary font-bold leading-6 tracking-[0.2px] text-text">
                  georgia.young@example.com
                </h6>
                <h6 className="text-h6 font-primary font-bold leading-6 tracking-[0.2px] text-text">
                  georgia.young@ple.com
                </h6>
                <h5 className="text-h5 text-text leading-6 tracking-[0.2px] font-primary font-bold">
                  Get Support
                </h5>
              </div>
              <div className="flex justify-center py-4">
                <button className=" py-4 px-8 leading-7 tracking-[0.2px] border-[#23A6F0] border-[1px] border-solid rounded-[37px] cursor-pointer focus:outline-none text-primary font-primary font-bold ">
                  Submit Request
                </button>
              </div>
            </div>

            <div className=" min-h-[403px] py-20 bg-dark-background">
              <div className="flex justify-center pb-4">
                <svg
                  width="51"
                  height="67"
                  viewBox="0 0 51 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5 0C11.4168 0 0 11.3074 0 25.2559C0 29.9206 0.921868 34.7384 3.56734 38.2109L25.5 67L47.4327 38.2109C49.8356 35.0569 51 29.4811 51 25.2559C51.0001 11.3074 39.5833 0 25.5 0ZM25.5 14.6276C31.4257 14.6276 36.231 19.3869 36.231 25.2558C36.231 31.1248 31.4257 35.8841 25.5 35.8841C19.5743 35.8841 14.7691 31.1248 14.7691 25.2559C14.7691 19.3869 19.5743 14.6276 25.5 14.6276Z"
                    fill="#23A6F0"
                  />
                </svg>
              </div>
              <div className="text-center space-y-4">
                <h6 className="text-h6 font-primary font-bold leading-6 tracking-[0.2px] text-light-text">
                  georgia.young@example.com
                </h6>
                <h6 className="text-h6 font-primary font-bold leading-6 tracking-[0.2px] text-light-text">
                  georgia.young@ple.com
                </h6>
                <h5 className="text-h5 text-light-text leading-6 tracking-[0.2px] font-primary font-bold">
                  Get Support
                </h5>
              </div>
              <div className="flex justify-center py-4">
                <button className=" py-4 px-8 leading-7 tracking-[0.2px] border-[#23A6F0] border-[1px] border-solid rounded-[37px] cursor-pointer focus:outline-none text-primary font-primary font-bold ">
                  Submit Request
                </button>
              </div>
            </div>

            <div className="py-20">
              <div className="flex justify-center pb-4">
                <svg
                  width="72"
                  height="55"
                  viewBox="0 0 72 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.225 7.12708C0.678682 5.10236 1.79395 3.29456 3.38815 1.99975C4.98235 0.704934 6.96098 -0.000139766 9 2.07815e-08H63C65.039 -0.000139766 67.0177 0.704934 68.6118 1.99975C70.206 3.29456 71.3213 5.10236 71.775 7.12708L36 29.3975L0.225 7.12708ZM0 12.3612V44.9212L26.1135 28.6137L0 12.3612ZM30.4245 31.3042L0.8595 49.7612C1.58997 51.3301 2.74287 52.6553 4.18402 53.5827C5.62516 54.5102 7.29529 55.0017 9 55H63C64.7044 55.0004 66.3739 54.5078 67.8143 53.5796C69.2546 52.6513 70.4065 51.3256 71.136 49.7567L41.571 31.2996L36 34.7692L30.4245 31.2996V31.3042ZM45.8865 28.6183L72 44.9212V12.3612L45.8865 28.6137V28.6183Z"
                    fill="#23A6F0"
                  />
                </svg>
              </div>
              <div className="text-center space-y-4">
                <h6 className="text-h6 font-primary font-bold leading-6 tracking-[0.2px] text-text">
                  georgia.young@example.com
                </h6>
                <h6 className="text-h6 font-primary font-bold leading-6 tracking-[0.2px] text-text">
                  georgia.young@ple.com
                </h6>
                <h5 className="text-h5 text-text leading-6 tracking-[0.2px] font-primary font-bold">
                  Get Support
                </h5>
              </div>
              <div className="flex justify-center py-4">
                <button className=" py-4 px-8 leading-7 tracking-[0.2px] border-[#23A6F0] border-[1px] border-solid rounded-[37px] cursor-pointer focus:outline-none text-primary font-primary font-bold ">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* End of office */}

        <div className="max-w-[1200px] mx-auto text-center pb-20 space-y-8">
          <h5 className="text-text text-h5 leading-12 tracking-[0.1px] font-primary font-bold ">
            WE Can't WAIT TO MEET YOU
          </h5>
          <h1 className="text-text text-h1 font-primary font-bold leading-5 tracking-[0.2px]">
            Let’s Talk
          </h1>
          <button className="my-1.5 bg-primary px-8 py-4 rounded-[5px] text-light-text text-h5 leading-5 tracking-[0.2px] font-bold font-primary">
            Try it free now
          </button>
        </div>
        {/* let's talk */}

        {/* End of let's talk */}

        <Footer />
      </div>
    </>
  );
};
export default ContactPage;
