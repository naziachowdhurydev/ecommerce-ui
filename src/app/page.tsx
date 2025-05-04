export default function Home() {
  return (
    <>
      {/* header */}
      <header className="w-[1400px] h-[136px] mx-auto flex justify-between">
        <div className="flex gap-13.5 items-center">
          <span className="font-primary font-bold text-[28px]">BrandName</span>
          <nav className="text-[18px] p-2">
            <ul className="flex gap-8 text-1rem text-[#727272]">
              <li>
                <a className="font-primary" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="font-primary" href="#">
                  Shop
                </a>
              </li>
              <li>
                <a className="font-primary" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="font-primary" href="#">
                  Blog
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
        <div className="py-2.5 flex">
          <div className="flex gap-4 items-center ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6C6.79565 6 7.55871 5.68393 8.12132 5.12132C8.68393 4.55871 9 3.79565 9 3C9 2.20435 8.68393 1.44129 8.12132 0.87868C7.55871 0.316071 6.79565 0 6 0C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3C3 3.79565 3.31607 4.55871 3.87868 5.12132C4.44129 5.68393 5.20435 6 6 6ZM8 3C8 3.53043 7.78929 4.03914 7.41421 4.41421C7.03914 4.78929 6.53043 5 6 5C5.46957 5 4.96086 4.78929 4.58579 4.41421C4.21071 4.03914 4 3.53043 4 3C4 2.46957 4.21071 1.96086 4.58579 1.58579C4.96086 1.21071 5.46957 1 6 1C6.53043 1 7.03914 1.21071 7.41421 1.58579C7.78929 1.96086 8 2.46957 8 3ZM12 11C12 12 11 12 11 12H1C1 12 0 12 0 11C0 10 1 7 6 7C11 7 12 10 12 11ZM11 10.996C10.999 10.75 10.846 10.01 10.168 9.332C9.516 8.68 8.289 8 6 8C3.71 8 2.484 8.68 1.832 9.332C1.154 10.01 1.002 10.75 1 10.996H11Z"
                fill="#23A6F0"
              />
            </svg>

            <h3 className="font-primary font-bold text-sm text-[#737373]">
              Login / Register
            </h3>

            <div className="flex gap-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2984_6803)">
                  <path
                    d="M11.7426 10.344C12.7109 9.02267 13.1446 7.38447 12.9569 5.75713C12.7692 4.12979 11.974 2.63332 10.7304 1.56711C9.48671 0.500899 7.88634 -0.056418 6.24943 0.00665514C4.61252 0.0697283 3.05978 0.748541 1.90186 1.90729C0.743944 3.06603 0.0662432 4.61926 0.00434136 6.25621C-0.0575605 7.89317 0.500902 9.49314 1.568 10.736C2.6351 11.9789 4.13214 12.773 5.75961 12.9596C7.38709 13.1461 9.02497 12.7112 10.3456 11.742H10.3446C10.3746 11.782 10.4066 11.82 10.4426 11.857L14.2926 15.707C14.4801 15.8946 14.7345 16.0001 14.9997 16.0002C15.265 16.0003 15.5195 15.895 15.7071 15.7075C15.8947 15.52 16.0002 15.2656 16.0003 15.0003C16.0004 14.7351 15.8951 14.4806 15.7076 14.293L11.8576 10.443C11.8218 10.4068 11.7834 10.3734 11.7426 10.343V10.344ZM12.0006 6.49998C12.0006 7.22225 11.8583 7.93745 11.5819 8.60474C11.3055 9.27203 10.9004 9.87834 10.3897 10.3891C9.87896 10.8998 9.27264 11.3049 8.60535 11.5813C7.93806 11.8577 7.22286 12 6.50059 12C5.77832 12 5.06312 11.8577 4.39583 11.5813C3.72854 11.3049 3.12223 10.8998 2.61151 10.3891C2.10078 9.87834 1.69566 9.27203 1.41926 8.60474C1.14285 7.93745 1.00059 7.22225 1.00059 6.49998C1.00059 5.04129 1.58006 3.64234 2.61151 2.61089C3.64296 1.57944 5.0419 0.999979 6.50059 0.999979C7.95928 0.999979 9.35823 1.57944 10.3897 2.61089C11.4211 3.64234 12.0006 5.04129 12.0006 6.49998Z"
                    fill="#23A6F0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2984_6803">
                    <rect
                      width="16.0006"
                      height="16.0003"
                      fill="white"
                      transform="translate(-0.000305176 -0.00012207)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.000305176 0.5C0.000305176 0.367392 0.0529836 0.240215 0.146752 0.146447C0.24052 0.0526784 0.367697 0 0.500305 0H2.00031C2.11184 3.08115e-05 2.22016 0.0373507 2.30804 0.106025C2.39592 0.174699 2.45831 0.270784 2.48531 0.379L2.89031 2H14.5003C14.5737 2.00007 14.6462 2.0163 14.7127 2.04755C14.7791 2.0788 14.8378 2.12429 14.8847 2.1808C14.9316 2.23731 14.9654 2.30345 14.9838 2.37452C15.0023 2.44558 15.0048 2.51984 14.9913 2.592L13.4913 10.592C13.4699 10.7066 13.409 10.8101 13.3194 10.8846C13.2297 10.9591 13.1169 10.9999 13.0003 11H4.00031C3.88374 10.9999 3.77087 10.9591 3.68122 10.8846C3.59156 10.8101 3.53075 10.7066 3.50931 10.592L2.01031 2.607L1.61031 1H0.500305C0.367697 1 0.24052 0.947322 0.146752 0.853553C0.0529836 0.759785 0.000305176 0.632608 0.000305176 0.5ZM3.10231 3L4.41531 10H12.5853L13.8983 3H3.10231ZM5.00031 11C4.46987 11 3.96116 11.2107 3.58609 11.5858C3.21102 11.9609 3.00031 12.4696 3.00031 13C3.00031 13.5304 3.21102 14.0391 3.58609 14.4142C3.96116 14.7893 4.46987 15 5.00031 15C5.53074 15 6.03945 14.7893 6.41452 14.4142C6.78959 14.0391 7.00031 13.5304 7.00031 13C7.00031 12.4696 6.78959 11.9609 6.41452 11.5858C6.03945 11.2107 5.53074 11 5.00031 11ZM12.0003 11C11.4699 11 10.9612 11.2107 10.5861 11.5858C10.211 11.9609 10.0003 12.4696 10.0003 13C10.0003 13.5304 10.211 14.0391 10.5861 14.4142C10.9612 14.7893 11.4699 15 12.0003 15C12.5307 15 13.0394 14.7893 13.4145 14.4142C13.7896 14.0391 14.0003 13.5304 14.0003 13C14.0003 12.4696 13.7896 11.9609 13.4145 11.5858C13.0394 11.2107 12.5307 11 12.0003 11ZM5.00031 12C5.26552 12 5.51988 12.1054 5.70741 12.2929C5.89495 12.4804 6.00031 12.7348 6.00031 13C6.00031 13.2652 5.89495 13.5196 5.70741 13.7071C5.51988 13.8946 5.26552 14 5.00031 14C4.73509 14 4.48073 13.8946 4.2932 13.7071C4.10566 13.5196 4.00031 13.2652 4.00031 13C4.00031 12.7348 4.10566 12.4804 4.2932 12.2929C4.48073 12.1054 4.73509 12 5.00031 12ZM12.0003 12C12.2655 12 12.5199 12.1054 12.7074 12.2929C12.8949 12.4804 13.0003 12.7348 13.0003 13C13.0003 13.2652 12.8949 13.5196 12.7074 13.7071C12.5199 13.8946 12.2655 14 12.0003 14C11.7351 14 11.4807 13.8946 11.2932 13.7071C11.1057 13.5196 11.0003 13.2652 11.0003 13C11.0003 12.7348 11.1057 12.4804 11.2932 12.2929C11.4807 12.1054 11.7351 12 12.0003 12Z"
                  fill="#23A6F0"
                />
              </svg>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2984_6814)">
                  <path
                    d="M8.00014 2.74805L7.28314 2.01105C5.60014 0.281049 2.51414 0.878049 1.40014 3.05305C0.877139 4.07605 0.759139 5.55305 1.71414 7.43805C2.63414 9.25305 4.54814 11.427 8.00014 13.795C11.4521 11.427 13.3651 9.25305 14.2861 7.43805C15.2411 5.55205 15.1241 4.07605 14.6001 3.05305C13.4861 0.878049 10.4001 0.280049 8.71714 2.01005L8.00014 2.74805ZM8.00014 15C-7.33286 4.86805 3.27914 -3.03995 7.82414 1.14305C7.88414 1.19805 7.94314 1.25505 8.00014 1.31405C8.05656 1.2551 8.11527 1.19839 8.17614 1.14405C12.7201 -3.04195 23.3331 4.86705 8.00014 15Z"
                    fill="#23A6F0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2984_6814">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.000244141)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </header>
      {/* editors pick */}
      <div className="bg-[#FAFAFA] py-20">
        <div className="max-w-[1050px] mx-auto space-y-12">
          <div className="space-y-2.5">
            <h2 className="font-primary mb-2.5 font-bold text-2xl leading-8 tracking-[0.1px] text-center text-[#252B42]">
              EDITOR'S PICK
            </h2>
            <p className="font-primary font-normal text-sm leading-6 tracking-[0.2px] text-center text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <div className="grid grid-cols-4 gap-x-7 gap-y-4 gird-row-2">
            <div className=" col-span-2 row-span-2 relative">
              <img
                src="/images/pick-editors/pick-1.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
              <div className="bg-white absolute bottom-5 left-5 py-3 px-10">
                <span className="text-[#252B42] font-primary font-bold text-base leading-6 tracking-[0.1px]">
                  MEN
                </span>
              </div>
            </div>
            <div className=" row-span-2 relative">
              <img
                src="/images/pick-editors/pick-2.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
              <div className="bg-white absolute bottom-5 left-5 py-3 px-10">
                <span className="text-[#252B42] font-primary font-bold text-base leading-6 tracking-[0.1px]">
                  WOMEN
                </span>
              </div>
            </div>
            <div className=" relative">
              <img
                src="/images/pick-editors/pick-3.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
              <div className="bg-white absolute bottom-5 left-5 py-3 px-10 ">
                <span className="text-[#252B42] font-primary font-bold text-base leading-6 tracking-[0.1px]">
                  ACCESSORIES
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/pick-editors/pick-4.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
              <div className="bg-white absolute bottom-5 left-5 py-3 px-10 ">
                <span className="text-[#252B42] font-primary font-bold text-base leading-6 tracking-[0.1px]">
                  KIDS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*product card */}
      <div className="max-w-[1050px] mx-auto">
        <div className="text-center font-primary py-20 ">
          <h4 className="text-[#727272] text-sm leading-5 tracking-[0.2px] font-normal">
            Featured Products
          </h4>
          <h3 className="text-2xl font-primary leading-8 tracking-[0.2px] font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <h4 className="text-sm font-primary font-bold leading-5 tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the confilct between
          </h4>
        </div>
        <div className="grid grid-cols-4 gap-8 max-w-[1050px] font-primary mx-auto">
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/fixed-height.jpg"
              alt=""
            />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-[#252B42] text-[16px] font-primary pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-[14px] font-primary leading-6 tracking-[0.2px] py-2.5 px-3.5 text-[#737373] font-bold text-center">
                English Department
              </h4>
              <h4 className="text-[16px] font-primary leading-6 tracking-[0.2px] text-center font-bold text-[#BDBDBD]">
                $16.48
                <span className="text-[16px] ml-0.5 font-bold text-[#23856D]">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picTwo.jpg"
              alt=""
            />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-[#252B42] text-[16px] pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-[14px] leading-6 tracking-[0.2px] py-2.5 px-3.5 text-[#737373] font-bold text-center">
                English Department
              </h4>
              <h4 className="text-[16px] leading-6 tracking-[0.2px] text-center font-bold text-[#BDBDBD]">
                $16.48
                <span className="text-[16px] ml-0.5 font-bold text-[#23856D]">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className="w-[238px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picThree.jpg"
              alt=""
            />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-[#252B42] text-[16px] pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-[14px] leading-6 tracking-[0.2px] py-2.5 px-3.5 text-[#737373] font-bold text-center">
                English Department
              </h4>
              <h4 className="text-[16px] leading-6 tracking-[0.2px] text-center font-bold text-[#BDBDBD]">
                $16.48
                <span className="text-[16px] ml-0.5 font-bold text-[#23856D]">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picFour.jpg"
              alt=""
            />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-[#252B42] text-[16px] pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-[14px] leading-6 tracking-[0.2px] py-2.5 px-3.5 text-[#737373] font-bold text-center">
                English Department
              </h4>
              <h4 className="text-[16px] leading-6 tracking-[0.2px] text-center font-bold text-[#BDBDBD]">
                $16.48
                <span className="text-[16px] ml-0.5 font-bold text-[#23856D]">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picFive.jpg"
              alt=""
            />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-[#252B42] text-[16px] pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-[14px] leading-6 tracking-[0.2px] py-2.5 px-3.5 text-[#737373] font-bold text-center">
                English Department
              </h4>
              <h4 className="text-[16px] leading-6 tracking-[0.2px] text-center font-bold text-[#BDBDBD]">
                $16.48
                <span className="text-[16px] ml-0.5 font-bold text-[#23856D]">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picSix.jpg"
              alt=""
            />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-[#252B42] text-[16px] pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-[14px] leading-6 tracking-[0.2px] py-2.5 px-3.5 text-[#737373] font-bold text-center">
                English Department
              </h4>
              <h4 className="text-[16px] leading-6 tracking-[0.2px] text-center font-bold text-[#BDBDBD]">
                $16.48
                <span className="text-[16px] ml-0.5 font-bold text-[#23856D]">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picSeven.jpg"
              alt=""
            />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-[#252B42] text-[16px] pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-[14px] leading-6 tracking-[0.2px] py-2.5 px-3.5 text-[#737373] font-bold text-center">
                English Department
              </h4>
              <h4 className="text-[16px] leading-6 tracking-[0.2px] text-center font-bold text-[#BDBDBD]">
                $16.48
                <span className="text-[16px] ml-0.5 font-bold text-[#23856D]">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picEight.jpg"
              alt=""
            />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-[#252B42] text-[16px] pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-[14px] leading-6 tracking-[0.2px] py-2.5 px-3.5 text-[#737373] font-bold text-center">
                English Department
              </h4>
              <h4 className="text-[16px] leading-6 tracking-[0.2px] text-center font-bold text-[#BDBDBD]">
                $16.48
                <span className="text-[16px] ml-0.5 font-bold text-[#23856D]">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Neural Universe */}
      <div className="w-[1050px] h-[682px] mx-auto flex justify-around">
        <div className="w-[735px] h-[645px]">
          <img
            className="bg-cover"
            src="/images/neural/neural-pic-1.png"
            alt=""
          />
        </div>

        <div className="py-[100px] pl-8">
          <h5 className="text-[16px] py-8 font-primary font-bold leading-6 tracking-[0.1px] text-[#BDBDBD] ">
            SUMMER 2020
          </h5>
          <h2 className="text-[#252B42] font-primary font-bold text-[40px] leading-12 tracking-[0.2px]">
            Part of the Neural <br /> Universe
          </h2>
          <h4 className="font-primary py-8 text-[20px] leading-7 tracking-[0.2px] font-normal text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="w-[332px] flex justify-between">
            <button className="py-5 px-[40px] border-[1px] bg-[#2DC071] rounded-sm text-sm leading-5 tracking-[0.2px] text-white cursor-pointer focus:outline-none ">
              BUY NOW
            </button>
            <button className="py-5 px-[40px] border-[1px] bg-white rounded-sm text-sm leading-5 tracking-[0.2px] text-[#2DC071] cursor-pointer focus:outline-none ">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      {/* featured post */}
      <div className="max-w-[1050px] mx-auto py-28">
        <div className=" mx-auto text-center pb-20">
          <h6 className="text-primary text-sm leading-6 tracking-[0.2px] font-bold">
            Practice Advice
          </h6>
          <h2 className="font-primary text-[40px] py-2.5leading-12 tracking-[0.2px] font-bold">
            Featured Posts
          </h2>
          <p className="font-primary font-normal text-[#737373] text-sm leading-5 tracking-[0.2px]">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex gap-8 ">
          <div className="w-[328px] h-[606px] border-[1px] bg-[#FFFFFF] shadow-md border-[#f5f5f5] border-solid">
            <img
              className="w-full h-[300px]"
              src="/images/featured/featured-pic-1.jpg"
              alt=""
            />

            <div className="p-6">
              <div className="flex w-159px ">
                <span className="font-primary text-[#8EC2F2] text-[12px] leading-4 tracking-[0.2px] font-normal">
                  Google
                </span>
                <span className="font-primary text-[#737373] px-3 text-[12px] leading-4 tracking-[0.2px] font-normal">
                  Trending
                </span>
                <span className="font-primary text-[#737373] text-[12px] leading-4 tracking-[0.2px] font-normal">
                  New
                </span>
              </div>
              <h5 className="font-primary text-[20px] py-2.5 leading-8 tracking-[0.2px] font-normal text-[#252B42]">
                Loudest à la Madison #1 (L'integral)
              </h5>
              <p className="font-primary text-sm text-[#737373] leading-5 tracking-[0.2px] font-normal">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between py-2.5">
                <span className="font-primary text-[12px] text-[#737373] leading-4 tracking-[0.2px]">
                  22 April 2021
                </span>
                <span className="font-primary text-[12px] text-[#737373] leading-4 tracking-[0.2px]">
                  10 Comments
                </span>
              </div>
              <a
                className="font-primary text-sm text-[#737373] font-bold leading-6 tracking-[0.2px]"
                href=""
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="w-[328px] h-[606px] border-[1px] bg-[#FFFFFF] shadow-md border-[#f5f5f5] border-solid">
            <img
              className="w-full h-[300px]"
              src="/images/featured/featured-pic-2.jpg"
              alt=""
            />

            <div className="p-6">
              <div className="flex w-159px ">
                <span className="font-primary text-[#8EC2F2] text-[12px] leading-4 tracking-[0.2px] font-normal">
                  Google
                </span>
                <span className="font-primary text-[#737373] px-3 text-[12px] leading-4 tracking-[0.2px] font-normal">
                  Trending
                </span>
                <span className="font-primary text-[#737373] text-[12px] leading-4 tracking-[0.2px] font-normal">
                  New
                </span>
              </div>
              <h5 className="font-primary text-[20px] py-2.5 leading-8 tracking-[0.2px] font-normal text-[#252B42]">
                Loudest à la Madison #1 (L'integral)
              </h5>
              <p className="font-primary text-sm text-[#737373] leading-5 tracking-[0.2px] font-normal">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between py-2.5">
                <span className="font-primary text-[12px] text-[#737373] leading-4 tracking-[0.2px]">
                  22 April 2021
                </span>
                <span className="font-primary text-[12px] text-[#737373] leading-4 tracking-[0.2px]">
                  10 Comments
                </span>
              </div>
              <a
                className="font-primary text-sm text-[#737373] font-bold leading-6 tracking-[0.2px]"
                href=""
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="w-[328px] h-[606px] border-[1px] bg-[#FFFFFF] shadow-md border-[#f5f5f5] border-solid">
            <img
              className="w-full h-[300px]"
              src="/images/featured/featured-pic-3.jpg"
              alt=""
            />

            <div className="p-6">
              <div className="flex w-159px ">
                <span className="font-primary text-[#8EC2F2] text-[12px] leading-4 tracking-[0.2px] font-normal">
                  Google
                </span>
                <span className="font-primary text-[#737373] px-3 text-[12px] leading-4 tracking-[0.2px] font-normal">
                  Trending
                </span>
                <span className="font-primary text-[#737373] text-[12px] leading-4 tracking-[0.2px] font-normal">
                  New
                </span>
              </div>
              <h5 className="font-primary text-[20px] py-2.5 leading-8 tracking-[0.2px] font-normal text-[#252B42]">
                Loudest à la Madison #1 (L'integral)
              </h5>
              <p className="font-primary text-sm text-[#737373] leading-5 tracking-[0.2px] font-normal">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between py-2.5">
                <span className="font-primary text-[12px] text-[#737373] leading-4 tracking-[0.2px]">
                  22 April 2021
                </span>
                <span className="font-primary text-[12px] text-[#737373] leading-4 tracking-[0.2px]">
                  10 Comments
                </span>
              </div>
              <a
                className="font-primary text-sm text-[#737373] font-bold leading-6 tracking-[0.2px]"
                href=""
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer>
        <div className=" bg-[#FAFAFA] font-primary py-10">
          <div className=" max-w-[1050px]  mx-auto flex justify-between items-center">
            <h3 className="text-[30px] font-bold">Bandage</h3>
            <div className="flex gap-4 items-center">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 11.5704C24 5.1801 18.8515 0 12.5014 0C6.14848 0.00143732 1 5.1801 1 11.5719C1 17.3456 5.2056 22.1319 10.7019 23V14.9151H7.78415V11.5719H10.7048V9.02062C10.7048 6.12155 12.4224 4.52037 15.0484 4.52037C16.3075 4.52037 17.6226 4.74603 17.6226 4.74603V7.59193H16.1724C14.7451 7.59193 14.2995 8.4845 14.2995 9.40008V11.5704H17.4875L16.9787 14.9136H14.2981V22.9986C19.7944 22.1304 24 17.3441 24 11.5704Z"
                  fill="#23A6F0"
                />
              </svg>

              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2984_7848)">
                  <path
                    d="M13 1C10.0149 1 9.6395 1.01375 8.46663 1.066C7.29375 1.121 6.49487 1.30525 5.795 1.5775C5.06088 1.85363 4.39593 2.28676 3.84663 2.84663C3.2871 3.39621 2.85402 4.06108 2.5775 4.795C2.30525 5.4935 2.11963 6.29375 2.066 7.4625C2.01375 8.63812 2 9.01213 2 12.0014C2 14.9879 2.01375 15.3619 2.066 16.5347C2.121 17.7063 2.30525 18.5051 2.5775 19.205C2.85938 19.9282 3.23475 20.5415 3.84663 21.1534C4.45713 21.7652 5.07037 22.142 5.79363 22.4225C6.49487 22.6947 7.29238 22.8804 8.46388 22.934C9.63813 22.9862 10.0121 23 13 23C15.9879 23 16.3605 22.9862 17.5347 22.934C18.7049 22.879 19.5065 22.6947 20.2064 22.4225C20.94 22.1462 21.6045 21.7131 22.1534 21.1534C22.7652 20.5415 23.1406 19.9282 23.4225 19.205C23.6934 18.5051 23.879 17.7063 23.934 16.5347C23.9862 15.3619 24 14.9879 24 12C24 9.01213 23.9862 8.63813 23.934 7.46388C23.879 6.29375 23.6934 5.4935 23.4225 4.795C23.146 4.06106 22.7129 3.39618 22.1534 2.84663C21.6042 2.28655 20.9392 1.85339 20.205 1.5775C19.5037 1.30525 18.7035 1.11963 17.5334 1.066C16.3591 1.01375 15.9865 1 12.9973 1H13.0014H13ZM12.0141 2.98275H13.0014C15.9384 2.98275 16.2863 2.99238 17.4454 3.046C18.5179 3.09413 19.1009 3.27425 19.4886 3.42412C20.0015 3.6235 20.3686 3.86275 20.7536 4.24775C21.1386 4.63275 21.3765 4.9985 21.5759 5.51275C21.7271 5.89913 21.9059 6.48213 21.954 7.55463C22.0076 8.71375 22.0186 9.06163 22.0186 11.9973C22.0186 14.9329 22.0076 15.2821 21.954 16.4412C21.9059 17.5138 21.7257 18.0954 21.5759 18.4831C21.3995 18.9607 21.118 19.3926 20.7522 19.7467C20.3672 20.1318 20.0015 20.3696 19.4873 20.569C19.1023 20.7203 18.5192 20.899 17.4454 20.9485C16.2863 21.0007 15.9384 21.0131 13.0014 21.0131C10.0644 21.0131 9.71513 21.0007 8.556 20.9485C7.4835 20.899 6.90188 20.7203 6.51412 20.569C6.03631 20.3929 5.60405 20.1119 5.24913 19.7467C4.88303 19.392 4.60112 18.9598 4.42412 18.4818C4.27425 18.0954 4.09413 17.5124 4.046 16.4399C3.99375 15.2808 3.98275 14.9329 3.98275 11.9945C3.98275 9.0575 3.99375 8.711 4.046 7.55187C4.0955 6.47937 4.27425 5.89638 4.4255 5.50863C4.62488 4.99575 4.86412 4.62862 5.24913 4.24362C5.63412 3.85862 5.99988 3.62075 6.51412 3.42138C6.90188 3.27013 7.4835 3.09138 8.556 3.04188C9.57075 2.99513 9.964 2.98138 12.0141 2.98V2.98275ZM18.8726 4.80875C18.6993 4.80875 18.5276 4.84289 18.3675 4.90923C18.2073 4.97557 18.0618 5.0728 17.9392 5.19537C17.8167 5.31794 17.7194 5.46346 17.6531 5.62361C17.5868 5.78376 17.5526 5.95541 17.5526 6.12875C17.5526 6.30209 17.5868 6.47374 17.6531 6.63389C17.7194 6.79404 17.8167 6.93956 17.9392 7.06213C18.0618 7.1847 18.2073 7.28193 18.3675 7.34827C18.5276 7.41461 18.6993 7.44875 18.8726 7.44875C19.2227 7.44875 19.5585 7.30968 19.806 7.06213C20.0536 6.81458 20.1926 6.47884 20.1926 6.12875C20.1926 5.77866 20.0536 5.44292 19.806 5.19537C19.5585 4.94782 19.2227 4.80875 18.8726 4.80875ZM13.0014 6.3515C12.2521 6.33981 11.508 6.47729 10.8123 6.75594C10.1167 7.0346 9.48346 7.44885 8.94946 7.97458C8.41546 8.50032 7.99138 9.12703 7.70191 9.81823C7.41244 10.5094 7.26336 11.2513 7.26336 12.0007C7.26336 12.7501 7.41244 13.4919 7.70191 14.1831C7.99138 14.8743 8.41546 15.5011 8.94946 16.0268C9.48346 16.5525 10.1167 16.9668 10.8123 17.2454C11.508 17.5241 12.2521 17.6616 13.0014 17.6499C14.4844 17.6267 15.8988 17.0214 16.9393 15.9645C17.9799 14.9076 18.5631 13.4839 18.5631 12.0007C18.5631 10.5175 17.9799 9.09382 16.9393 8.03691C15.8988 6.97999 14.4844 6.37464 13.0014 6.3515ZM13.0014 8.33288C13.974 8.33288 14.9067 8.71923 15.5944 9.40695C16.2821 10.0947 16.6685 11.0274 16.6685 12C16.6685 12.9726 16.2821 13.9053 15.5944 14.593C14.9067 15.2808 13.974 15.6671 13.0014 15.6671C12.0288 15.6671 11.096 15.2808 10.4083 14.593C9.72061 13.9053 9.33425 12.9726 9.33425 12C9.33425 11.0274 9.72061 10.0947 10.4083 9.40695C11.096 8.71923 12.0288 8.33288 13.0014 8.33288Z"
                    fill="#23A6F0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2984_7848">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2984_7851)">
                  <path
                    d="M8.91075 19C17.213 19 21.7546 12.0731 21.7546 6.07669C21.7546 5.88285 21.7546 5.68625 21.7464 5.49241C22.6306 4.84789 23.3937 4.04993 24 3.13592C23.1741 3.50262 22.2988 3.7443 21.4026 3.85312C22.3466 3.28495 23.0536 2.391 23.3923 1.3374C22.5054 1.86647 21.5346 2.23787 20.5226 2.43534C19.8423 1.70572 18.9419 1.22237 17.9611 1.06016C16.9803 0.897946 15.9737 1.06592 15.0973 1.53807C14.2209 2.01023 13.5236 2.7602 13.1134 3.67182C12.7031 4.58345 12.6029 5.60585 12.8281 6.58066C11.0334 6.49005 9.27762 6.02057 7.67468 5.20269C6.07175 4.3848 4.65744 3.23678 3.5235 1.83307C2.94784 2.83421 2.77216 4.01843 3.03214 5.14526C3.29211 6.27209 3.96825 7.25705 4.92325 7.90013C4.20762 7.87565 3.50772 7.68215 2.88 7.33524V7.39754C2.88123 8.44631 3.24205 9.46247 3.90145 10.2743C4.56086 11.0861 5.4784 11.6438 6.499 11.853C6.11161 11.9605 5.71144 12.014 5.30963 12.0122C5.02635 12.0131 4.74365 11.9867 4.46537 11.9333C4.75383 12.8361 5.3155 13.6254 6.07171 14.1908C6.82793 14.7561 7.74081 15.0691 8.6825 15.0859C7.08276 16.3511 5.10668 17.0373 3.0725 17.034C2.71407 17.0355 2.35588 17.0147 2 16.9716C4.06458 18.297 6.46228 19.0008 8.91075 19Z"
                    fill="#23A6F0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2984_7851">
                    <rect
                      width="24"
                      height="19.7647"
                      fill="white"
                      transform="translate(0.5 0.117676)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <hr className=" max-w-[1050px]  mx-auto text-[#E6E6E6] mb-12" />

        <div className=" font-primary max-w-[1050px] h-[136px] mx-auto flex justify-between ]">
          <div className="space-y-5">
            <h3 className="text-[23px] text-[#252B42] font-bold">
              Company Info
            </h3>
            <ul className="text-[#737373] text-[18px] space-y-2.5">
              <li>About Us</li>
              <li>Carrier</li>
              <li>WE are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-[23px] text-[#252B42] font-bold">Legal</h3>
            <ul className="text-[#737373] text-[18px] space-y-2.5">
              <li>About Us</li>
              <li>Carrier</li>
              <li>WE are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-[23px] text-[#252B42] font-bold">Features</h3>
            <ul className="text-[#737373] text-[18px] space-y-2.5">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-[23px] text-[#252B42] font-bold">Resoures</h3>
            <ul className="text-[#737373] text-[18px] space-y-2.5">
              <li>IOS & Android</li>
              <li>Watch a Demo </li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-[23px] text-[#252B42] font-bold">
              Get In Touch
            </h3>
            <div>
              <input
                className=" py-[15px] px-5 border-[1px] focus:outline-none rounded-bl-sm rounded-tl-sm border-[#E6E6E6] bg-[#F9F9F9] rounded-sm leading-7 tracking-[0.2px] text-sm text-[#737373] placeholder:text-[#737373] placeholder:text-sm placeholder:leading-7 placeholder:tracking-[o.2px]"
                type="text"
                placeholder="Your Email"
              />
              <button className="py-4 px-5 text-white leading-7 tracking-[0.2px] rounded-br-sm rounded-tr-sm cursor-pointer focus:outline-none bg-[#23A6F0] ">
                Subscribe
              </button>
              <p className="text-sm pb-2 leading-7 tracking-[0,2px] text-[#737373]">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] font-primary">
          <div className=" h-[74px] py-6 max-w-[1050px]  mx-auto text-[#737373] text-[18px] mt-[70px]">
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
