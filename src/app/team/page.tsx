import { Footer } from "@/components/footer";

const TeamPage = () => {
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

      {/* Tailored Section */}

      <div>
        <div className="max-w-[870px] mx-auto text-center space-y-3.5">
          <h5 className="text-h5 leading-6 tracking-[0.2px] font-primary font-bold text-second-text">
            WHAT WE DO
          </h5>
          <h1
            className="text-h1 text-text font-primary font-bold leading-20 tracking-[0.
          2px]  "
          >
            Innovation tailored for you
          </h1>
          <div className=" space-x-3">
            <a
              className="text-h6 text-text font-primary font-bold leading-6 tracking-[0.2 px]"
              href="#"
            >
              Home
            </a>
            <a
              className="text-h6 text-second-text font-primary font-bold leading-6 tracking-[0.2 px]"
              href="#"
            >
              Team
            </a>
          </div>
        </div>

        <div className=" max-w-[1440px] mx-auto grid grid-cols-3 grid-flow-col-dense">
          <div className="h-[530px] col-span-2 row-span-2">
            <img
              className="h-auto"
              src="/images/tailors/tailor-pic-1.jpg"
              alt=""
            />
          </div>

          <div className="w-[360px] h-[260px] overflow-hidden">
            <img
              className="w-full h-auto"
              src="/images/tailors/tailor-pic-2.jpg"
              alt=""
            />
          </div>
          <div className="w-[360px] h-[260px] overflow-hidden">
            <img
              className="w-full h-auto"
              src="/images/tailors/tailor-pic-3.jpg"
              alt=""
            />
          </div>
          <div className="w-[360px] h-[260px] overflow-hidden">
            <img
              className="h-auto"
              src="/images/tailors/tailor-pic-4.jpg"
              alt=""
            />
          </div>
          <div className="w-[360px] h-[260px] overflow-hidden">
            <img
              className="h-auto"
              src="/images/tailors/tailor-pic-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* End of tailored section */}

      <Footer />
    </>
  );
};
export default TeamPage;
