const BlogPage = () => {
  return (
    <>
      <div>
        <div className="max-w-[1200px] mx-auto py-28">
          <div className="text-center pb-20">
            <h6 className="text-primary text-h6 leading-6 tracking-[0.2px] font-bold">
              Practice Advice
            </h6>
            <h2 className="font-primary text-h2 py-2.5 leading-12 tracking-[0.2px] font-bold">
              Featured Posts
            </h2>
            <p className="font-primary font-normal text-second-text text-h6 leading-5 tracking-[0.2px]">
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="max-w-[1050px] mx-auto grid grid-cols-2 gap-8">
            <div className=" border-[1px] bg-light-background shadow-md border-[#f5f5f5] border-solid">
              <div className="max-h-[300px] overflow-hidden">
                <img
                  className="w-full h-auto"
                  src="/images/blogs/blog-pic-1.jpg"
                  alt=""
                />
              </div>

              <div className="p-6">
                <div className="flex w-[159px] ">
                  <span className="font-primary text-disabled-element-text text-[12px] leading-4 tracking-[0.2px] font-normal">
                    Google
                  </span>
                  <span className="font-primary text-second-text px-3 text-[12px] leading-4 tracking-[0.2px] font-normal">
                    Trending
                  </span>
                  <span className="font-primary text-second-text text-[12px] leading-4 tracking-[0.2px] font-normal">
                    New
                  </span>
                </div>
                <h5 className="font-primary text-h4 py-2.5 leading-8 tracking-[0.2px] font-normal text-text">
                  Koudetat à la Madison #1 (L'integral)
                </h5>
                <p className="font-primary text-h6 text-second-text leading-5 tracking-[0.2px] font-normal">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="flex justify-between py-2.5">
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="12.5"
                      height="13.5"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.49933 13.6667C3.20378 13.6232 0.542765 10.9622 0.499328 7.66668C0.542765 4.37113 3.20378 1.71011 6.49933 1.66668C9.79488 1.71011 12.4559 4.37113 12.4993 7.66668C12.4559 10.9622 9.79488 13.6232 6.49933 13.6667ZM6.49933 3.00001C3.93611 3.03376 1.86641 5.10346 1.83266 7.66668C1.86641 10.2299 3.93611 12.2996 6.49933 12.3333C9.06255 12.2996 11.1322 10.2299 11.166 7.66668C11.1322 5.10346 9.06255 3.03376 6.49933 3.00001ZM9.83266 8.33334H5.83266V4.33334H7.16599V7.00001H9.83266V8.33334ZM12.0273 3.47201L10.0213 1.47201L10.9607 0.527344L12.9673 2.52734L12.0273 3.47134V3.47201ZM0.970662 3.47201L0.0273285 2.52734L2.02133 0.527344L2.96466 1.47201L0.971995 3.47201H0.970662Z"
                        fill="#23A6F0"
                      />
                    </svg>
                    <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                      22 April 2021
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3333 13.8334H2V0.833415C2 0.741748 1.925 0.666748 1.83333 0.666748H0.666667C0.575 0.666748 0.5 0.741748 0.5 0.833415V15.1667C0.5 15.2584 0.575 15.3334 0.666667 15.3334H16.3333C16.425 15.3334 16.5 15.2584 16.5 15.1667V14.0001C16.5 13.9084 16.425 13.8334 16.3333 13.8334ZM3.5 12.5001H14.6667C14.7583 12.5001 14.8333 12.4251 14.8333 12.3334V3.25008C14.8333 3.10008 14.6521 3.02716 14.5479 3.13133L10.1667 7.51258L7.55417 4.92925C7.52284 4.89823 7.48054 4.88083 7.43646 4.88083C7.39238 4.88083 7.35007 4.89823 7.31875 4.92925L3.38125 8.87925C3.36596 8.89457 3.35385 8.91277 3.34562 8.93279C3.3374 8.95281 3.33322 8.97427 3.33333 8.99591V12.3334C3.33333 12.4251 3.40833 12.5001 3.5 12.5001Z"
                        fill="#23856D"
                      />
                    </svg>
                    <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                      10 Comments
                    </span>
                  </div>
                </div>
                <a
                  className="font-primary text-h6 text-second-text font-bold leading-6 tracking-[0.2px]"
                  href=""
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className=" border-[1px] bg-light-background shadow-md border-[#f5f5f5] border-solid">
              <div className="max-h-[300px] overflow-hidden">
                <img
                  className="w-full h-auto"
                  src="/images/blogs/blog-pic-2.jpg"
                  alt=""
                />
              </div>
              <div className="p-6">
                <div className="flex w-[159px] ">
                  <span className="font-primary text-disabled-element-text text-[12px] leading-4 tracking-[0.2px] font-normal">
                    Google
                  </span>
                  <span className="font-primary text-second-text px-3 text-[12px] leading-4 tracking-[0.2px] font-normal">
                    Trending
                  </span>
                  <span className="font-primary text-second-text text-[12px] leading-4 tracking-[0.2px] font-normal">
                    New
                  </span>
                </div>
                <h5 className="font-primary text-h4 py-2.5 leading-8 tracking-[0.2px] font-normal text-text">
                  Koudetat à la Madison #1 (L'integral)
                </h5>
                <p className="font-primary text-h6 text-second-text leading-5 tracking-[0.2px] font-normal">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="flex justify-between py-2.5">
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="12.5"
                      height="13.5"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.49933 13.6667C3.20378 13.6232 0.542765 10.9622 0.499328 7.66668C0.542765 4.37113 3.20378 1.71011 6.49933 1.66668C9.79488 1.71011 12.4559 4.37113 12.4993 7.66668C12.4559 10.9622 9.79488 13.6232 6.49933 13.6667ZM6.49933 3.00001C3.93611 3.03376 1.86641 5.10346 1.83266 7.66668C1.86641 10.2299 3.93611 12.2996 6.49933 12.3333C9.06255 12.2996 11.1322 10.2299 11.166 7.66668C11.1322 5.10346 9.06255 3.03376 6.49933 3.00001ZM9.83266 8.33334H5.83266V4.33334H7.16599V7.00001H9.83266V8.33334ZM12.0273 3.47201L10.0213 1.47201L10.9607 0.527344L12.9673 2.52734L12.0273 3.47134V3.47201ZM0.970662 3.47201L0.0273285 2.52734L2.02133 0.527344L2.96466 1.47201L0.971995 3.47201H0.970662Z"
                        fill="#23A6F0"
                      />
                    </svg>
                    <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                      22 April 2021
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3333 13.8334H2V0.833415C2 0.741748 1.925 0.666748 1.83333 0.666748H0.666667C0.575 0.666748 0.5 0.741748 0.5 0.833415V15.1667C0.5 15.2584 0.575 15.3334 0.666667 15.3334H16.3333C16.425 15.3334 16.5 15.2584 16.5 15.1667V14.0001C16.5 13.9084 16.425 13.8334 16.3333 13.8334ZM3.5 12.5001H14.6667C14.7583 12.5001 14.8333 12.4251 14.8333 12.3334V3.25008C14.8333 3.10008 14.6521 3.02716 14.5479 3.13133L10.1667 7.51258L7.55417 4.92925C7.52284 4.89823 7.48054 4.88083 7.43646 4.88083C7.39238 4.88083 7.35007 4.89823 7.31875 4.92925L3.38125 8.87925C3.36596 8.89457 3.35385 8.91277 3.34562 8.93279C3.3374 8.95281 3.33322 8.97427 3.33333 8.99591V12.3334C3.33333 12.4251 3.40833 12.5001 3.5 12.5001Z"
                        fill="#23856D"
                      />
                    </svg>
                    <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                      10 Comments
                    </span>
                  </div>
                </div>
                <a
                  className="font-primary text-h6 text-second-text font-bold leading-6 tracking-[0.2px]"
                  href=""
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className=" border-[1px] bg-light-background shadow-md border-[#f5f5f5] border-solid">
              <div className="max-h-[300px] overflow-hidden">
                <img
                  className="w-full h-auto "
                  src="/images/blogs/blog-pic-3.jpg"
                  alt=""
                />
              </div>
              <div className="p-6">
                <div className="flex w-[159px] ">
                  <span className="font-primary text-disabled-element-text text-[12px] leading-4 tracking-[0.2px] font-normal">
                    Google
                  </span>
                  <span className="font-primary text-second-text px-3 text-[12px] leading-4 tracking-[0.2px] font-normal">
                    Trending
                  </span>
                  <span className="font-primary text-second-text text-[12px] leading-4 tracking-[0.2px] font-normal">
                    New
                  </span>
                </div>
                <h5 className="font-primary text-h4 py-2.5 leading-8 tracking-[0.2px] font-normal text-text">
                  Koudetat à la Madison #1 (L'integral)
                </h5>
                <p className="font-primary text-h6 text-second-text leading-5 tracking-[0.2px] font-normal">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="flex justify-between py-2.5">
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="12.5"
                      height="13.5"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.49933 13.6667C3.20378 13.6232 0.542765 10.9622 0.499328 7.66668C0.542765 4.37113 3.20378 1.71011 6.49933 1.66668C9.79488 1.71011 12.4559 4.37113 12.4993 7.66668C12.4559 10.9622 9.79488 13.6232 6.49933 13.6667ZM6.49933 3.00001C3.93611 3.03376 1.86641 5.10346 1.83266 7.66668C1.86641 10.2299 3.93611 12.2996 6.49933 12.3333C9.06255 12.2996 11.1322 10.2299 11.166 7.66668C11.1322 5.10346 9.06255 3.03376 6.49933 3.00001ZM9.83266 8.33334H5.83266V4.33334H7.16599V7.00001H9.83266V8.33334ZM12.0273 3.47201L10.0213 1.47201L10.9607 0.527344L12.9673 2.52734L12.0273 3.47134V3.47201ZM0.970662 3.47201L0.0273285 2.52734L2.02133 0.527344L2.96466 1.47201L0.971995 3.47201H0.970662Z"
                        fill="#23A6F0"
                      />
                    </svg>
                    <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                      22 April 2021
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3333 13.8334H2V0.833415C2 0.741748 1.925 0.666748 1.83333 0.666748H0.666667C0.575 0.666748 0.5 0.741748 0.5 0.833415V15.1667C0.5 15.2584 0.575 15.3334 0.666667 15.3334H16.3333C16.425 15.3334 16.5 15.2584 16.5 15.1667V14.0001C16.5 13.9084 16.425 13.8334 16.3333 13.8334ZM3.5 12.5001H14.6667C14.7583 12.5001 14.8333 12.4251 14.8333 12.3334V3.25008C14.8333 3.10008 14.6521 3.02716 14.5479 3.13133L10.1667 7.51258L7.55417 4.92925C7.52284 4.89823 7.48054 4.88083 7.43646 4.88083C7.39238 4.88083 7.35007 4.89823 7.31875 4.92925L3.38125 8.87925C3.36596 8.89457 3.35385 8.91277 3.34562 8.93279C3.3374 8.95281 3.33322 8.97427 3.33333 8.99591V12.3334C3.33333 12.4251 3.40833 12.5001 3.5 12.5001Z"
                        fill="#23856D"
                      />
                    </svg>
                    <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                      10 Comments
                    </span>
                  </div>
                </div>
                <a
                  className="font-primary text-h6 text-second-text font-bold leading-6 tracking-[0.2px]"
                  href=""
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className=" border-[1px] bg-light-background shadow-md border-[#f5f5f5] border-solid">
              <div className="max-h-[300px] overflow-hidden">
                <img
                  className="w-full h-auto "
                  src="/images/blogs/blog-pic-4.jpg"
                  alt=""
                />
              </div>
              <div className="p-6">
                <div className="flex w-[159px] ">
                  <span className="font-primary text-disabled-element-text text-[12px] leading-4 tracking-[0.2px] font-normal">
                    Google
                  </span>
                  <span className="font-primary text-second-text px-3 text-[12px] leading-4 tracking-[0.2px] font-normal">
                    Trending
                  </span>
                  <span className="font-primary text-second-text text-[12px] leading-4 tracking-[0.2px] font-normal">
                    New
                  </span>
                </div>
                <h5 className="font-primary text-h4 py-2.5 leading-8 tracking-[0.2px] font-normal text-text">
                  Koudetat à la Madison #1 (L'integral)
                </h5>
                <p className="font-primary text-h6 text-second-text leading-5 tracking-[0.2px] font-normal">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="flex justify-between py-2.5">
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="12.5"
                      height="13.5"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.49933 13.6667C3.20378 13.6232 0.542765 10.9622 0.499328 7.66668C0.542765 4.37113 3.20378 1.71011 6.49933 1.66668C9.79488 1.71011 12.4559 4.37113 12.4993 7.66668C12.4559 10.9622 9.79488 13.6232 6.49933 13.6667ZM6.49933 3.00001C3.93611 3.03376 1.86641 5.10346 1.83266 7.66668C1.86641 10.2299 3.93611 12.2996 6.49933 12.3333C9.06255 12.2996 11.1322 10.2299 11.166 7.66668C11.1322 5.10346 9.06255 3.03376 6.49933 3.00001ZM9.83266 8.33334H5.83266V4.33334H7.16599V7.00001H9.83266V8.33334ZM12.0273 3.47201L10.0213 1.47201L10.9607 0.527344L12.9673 2.52734L12.0273 3.47134V3.47201ZM0.970662 3.47201L0.0273285 2.52734L2.02133 0.527344L2.96466 1.47201L0.971995 3.47201H0.970662Z"
                        fill="#23A6F0"
                      />
                    </svg>
                    <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                      22 April 2021
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3333 13.8334H2V0.833415C2 0.741748 1.925 0.666748 1.83333 0.666748H0.666667C0.575 0.666748 0.5 0.741748 0.5 0.833415V15.1667C0.5 15.2584 0.575 15.3334 0.666667 15.3334H16.3333C16.425 15.3334 16.5 15.2584 16.5 15.1667V14.0001C16.5 13.9084 16.425 13.8334 16.3333 13.8334ZM3.5 12.5001H14.6667C14.7583 12.5001 14.8333 12.4251 14.8333 12.3334V3.25008C14.8333 3.10008 14.6521 3.02716 14.5479 3.13133L10.1667 7.51258L7.55417 4.92925C7.52284 4.89823 7.48054 4.88083 7.43646 4.88083C7.39238 4.88083 7.35007 4.89823 7.31875 4.92925L3.38125 8.87925C3.36596 8.89457 3.35385 8.91277 3.34562 8.93279C3.3374 8.95281 3.33322 8.97427 3.33333 8.99591V12.3334C3.33333 12.4251 3.40833 12.5001 3.5 12.5001Z"
                        fill="#23856D"
                      />
                    </svg>
                    <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                      10 Comments
                    </span>
                  </div>
                </div>
                <a
                  className="font-primary text-h6 text-second-text font-bold leading-6 tracking-[0.2px]"
                  href=""
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className=" border-[1px] bg-light-background shadow-md border-[#f5f5f5] border-solid">
              <div className="max-h-[300px] overflow-hidden">
                <img
                  className="w-full h-auto "
                  src="/images/blogs/blog-pic-5.jpg"
                  alt=""
                />
              </div>
              <div className="p-6">
                <div className="flex w-[159px] ">
                  <span className="font-primary text-disabled-element-text text-[12px] leading-4 tracking-[0.2px] font-normal">
                    Google
                  </span>
                  <span className="font-primary text-second-text px-3 text-[12px] leading-4 tracking-[0.2px] font-normal">
                    Trending
                  </span>
                  <span className="font-primary text-second-text text-[12px] leading-4 tracking-[0.2px] font-normal">
                    New
                  </span>
                </div>
                <h5 className="font-primary text-h4 py-2.5 leading-8 tracking-[0.2px] font-normal text-text">
                  Koudetat à la Madison #1 (L'integral)
                </h5>
                <p className="font-primary text-h6 text-second-text leading-5 tracking-[0.2px] font-normal">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="flex justify-between py-2.5">
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="12.5"
                      height="13.5"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.49933 13.6667C3.20378 13.6232 0.542765 10.9622 0.499328 7.66668C0.542765 4.37113 3.20378 1.71011 6.49933 1.66668C9.79488 1.71011 12.4559 4.37113 12.4993 7.66668C12.4559 10.9622 9.79488 13.6232 6.49933 13.6667ZM6.49933 3.00001C3.93611 3.03376 1.86641 5.10346 1.83266 7.66668C1.86641 10.2299 3.93611 12.2996 6.49933 12.3333C9.06255 12.2996 11.1322 10.2299 11.166 7.66668C11.1322 5.10346 9.06255 3.03376 6.49933 3.00001ZM9.83266 8.33334H5.83266V4.33334H7.16599V7.00001H9.83266V8.33334ZM12.0273 3.47201L10.0213 1.47201L10.9607 0.527344L12.9673 2.52734L12.0273 3.47134V3.47201ZM0.970662 3.47201L0.0273285 2.52734L2.02133 0.527344L2.96466 1.47201L0.971995 3.47201H0.970662Z"
                        fill="#23A6F0"
                      />
                    </svg>
                    <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                      22 April 2021
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3333 13.8334H2V0.833415C2 0.741748 1.925 0.666748 1.83333 0.666748H0.666667C0.575 0.666748 0.5 0.741748 0.5 0.833415V15.1667C0.5 15.2584 0.575 15.3334 0.666667 15.3334H16.3333C16.425 15.3334 16.5 15.2584 16.5 15.1667V14.0001C16.5 13.9084 16.425 13.8334 16.3333 13.8334ZM3.5 12.5001H14.6667C14.7583 12.5001 14.8333 12.4251 14.8333 12.3334V3.25008C14.8333 3.10008 14.6521 3.02716 14.5479 3.13133L10.1667 7.51258L7.55417 4.92925C7.52284 4.89823 7.48054 4.88083 7.43646 4.88083C7.39238 4.88083 7.35007 4.89823 7.31875 4.92925L3.38125 8.87925C3.36596 8.89457 3.35385 8.91277 3.34562 8.93279C3.3374 8.95281 3.33322 8.97427 3.33333 8.99591V12.3334C3.33333 12.4251 3.40833 12.5001 3.5 12.5001Z"
                        fill="#23856D"
                      />
                    </svg>
                    <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                      10 Comments
                    </span>
                  </div>
                </div>
                <a
                  className="font-primary text-h6 text-second-text font-bold leading-6 tracking-[0.2px]"
                  href=""
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className=" border-[1px] bg-light-background shadow-md border-[#f5f5f5] border-solid">
              <div className="max-h-[300px] overflow-hidden">
                <img
                  className="w-full h-auto "
                  src="/images/blogs/blog-pic-6.jpg"
                  alt=""
                />
              </div>
              <div className="p-6">
                <div className="flex w-[159px] ">
                  <span className="font-primary text-disabled-element-text text-[12px] leading-4 tracking-[0.2px] font-normal">
                    Google
                  </span>
                  <span className="font-primary text-second-text px-3 text-[12px] leading-4 tracking-[0.2px] font-normal">
                    Trending
                  </span>
                  <span className="font-primary text-second-text text-[12px] leading-4 tracking-[0.2px] font-normal">
                    New
                  </span>
                </div>
                <h5 className="font-primary text-h4 py-2.5 leading-8 tracking-[0.2px] font-normal text-text">
                  Koudetat à la Madison #1 (L'integral)
                </h5>
                <p className="font-primary text-h6 text-second-text leading-5 tracking-[0.2px] font-normal">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="flex justify-between py-2.5">
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="12.5"
                      height="13.5"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.49933 13.6667C3.20378 13.6232 0.542765 10.9622 0.499328 7.66668C0.542765 4.37113 3.20378 1.71011 6.49933 1.66668C9.79488 1.71011 12.4559 4.37113 12.4993 7.66668C12.4559 10.9622 9.79488 13.6232 6.49933 13.6667ZM6.49933 3.00001C3.93611 3.03376 1.86641 5.10346 1.83266 7.66668C1.86641 10.2299 3.93611 12.2996 6.49933 12.3333C9.06255 12.2996 11.1322 10.2299 11.166 7.66668C11.1322 5.10346 9.06255 3.03376 6.49933 3.00001ZM9.83266 8.33334H5.83266V4.33334H7.16599V7.00001H9.83266V8.33334ZM12.0273 3.47201L10.0213 1.47201L10.9607 0.527344L12.9673 2.52734L12.0273 3.47134V3.47201ZM0.970662 3.47201L0.0273285 2.52734L2.02133 0.527344L2.96466 1.47201L0.971995 3.47201H0.970662Z"
                        fill="#23A6F0"
                      />
                    </svg>
                    <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                      22 April 2021
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3333 13.8334H2V0.833415C2 0.741748 1.925 0.666748 1.83333 0.666748H0.666667C0.575 0.666748 0.5 0.741748 0.5 0.833415V15.1667C0.5 15.2584 0.575 15.3334 0.666667 15.3334H16.3333C16.425 15.3334 16.5 15.2584 16.5 15.1667V14.0001C16.5 13.9084 16.425 13.8334 16.3333 13.8334ZM3.5 12.5001H14.6667C14.7583 12.5001 14.8333 12.4251 14.8333 12.3334V3.25008C14.8333 3.10008 14.6521 3.02716 14.5479 3.13133L10.1667 7.51258L7.55417 4.92925C7.52284 4.89823 7.48054 4.88083 7.43646 4.88083C7.39238 4.88083 7.35007 4.89823 7.31875 4.92925L3.38125 8.87925C3.36596 8.89457 3.35385 8.91277 3.34562 8.93279C3.3374 8.95281 3.33322 8.97427 3.33333 8.99591V12.3334C3.33333 12.4251 3.40833 12.5001 3.5 12.5001Z"
                        fill="#23856D"
                      />
                    </svg>
                    <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                      10 Comments
                    </span>
                  </div>
                </div>
                <a
                  className="font-primary text-h6 text-second-text font-bold leading-6 tracking-[0.2px]"
                  href=""
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogPage;
