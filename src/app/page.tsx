import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      {/* header */}
      <div className="bg-text h-[46px] ">
        <div className="w-[1400px] flex justify-between mx-auto">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5 items-center p-2.5">
              <svg
                className="text-light-text"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.65447 1.32805C3.59544 1.25211 3.52092 1.1896 3.43587 1.14468C3.35082 1.09975 3.25719 1.07343 3.16119 1.06747C3.06519 1.06151 2.96902 1.07605 2.87907 1.11012C2.78912 1.14418 2.70744 1.19699 2.63947 1.26505L1.60547 2.30005C1.12247 2.78405 0.944471 3.46905 1.15547 4.07005C2.03121 6.55764 3.45577 8.81615 5.32347 10.6781C7.1854 12.5457 9.4439 13.9703 11.9315 14.8461C12.5325 15.0571 13.2175 14.8791 13.7015 14.3961L14.7355 13.3621C14.8035 13.2941 14.8563 13.2124 14.8904 13.1225C14.9245 13.0325 14.939 12.9363 14.933 12.8403C14.9271 12.7443 14.9008 12.6507 14.8558 12.5656C14.8109 12.4806 14.7484 12.4061 14.6725 12.3471L12.3655 10.5531C12.2843 10.4901 12.19 10.4465 12.0895 10.4253C11.989 10.4042 11.8851 10.4061 11.7855 10.4311L9.59547 10.9781C9.30315 11.0511 8.99689 11.0472 8.70652 10.9668C8.41614 10.8864 8.15154 10.7321 7.93847 10.5191L5.48247 8.06205C5.26924 7.84909 5.1148 7.58453 5.03418 7.29415C4.95357 7.00377 4.94954 6.69746 5.02247 6.40505L5.57047 4.21505C5.59538 4.11545 5.59734 4.01149 5.57621 3.91101C5.55507 3.81054 5.51139 3.71618 5.44847 3.63505L3.65447 1.32805ZM1.88447 0.511051C2.05947 0.336 2.2697 0.200181 2.50121 0.112612C2.73272 0.0250429 2.98021 -0.0122724 3.22725 0.00314389C3.47429 0.0185602 3.71522 0.0863553 3.93405 0.202028C4.15288 0.3177 4.3446 0.478602 4.49647 0.674051L6.29047 2.98005C6.61947 3.40305 6.73547 3.95405 6.60547 4.47405L6.05847 6.66405C6.03019 6.77748 6.03172 6.8963 6.06291 7.00896C6.0941 7.12163 6.15388 7.22431 6.23647 7.30705L8.69347 9.76405C8.77631 9.8468 8.87916 9.90669 8.99202 9.93789C9.10488 9.96908 9.22389 9.97052 9.33747 9.94205L11.5265 9.39505C11.7831 9.33089 12.0509 9.32591 12.3098 9.38048C12.5686 9.43505 12.8116 9.54775 13.0205 9.71005L15.3265 11.5041C16.1555 12.149 16.2315 13.3741 15.4895 14.1151L14.4555 15.1491C13.7155 15.8891 12.6095 16.2141 11.5785 15.8511C8.93965 14.9226 6.54374 13.4119 4.56847 11.4311C2.58776 9.45607 1.07708 7.06051 0.148471 4.42205C-0.213529 3.39205 0.111471 2.28505 0.851471 1.54505L1.88547 0.511051H1.88447Z"
                  fill="white"
                />
              </svg>

              <h6 className="text-h6 font-primary font-bold leading-6 tracking-[0.2px] text-light-text">
                (225) 555-0118
              </h6>
            </div>

            <div className="flex gap-1.5 items-center p-2.5">
              <svg
                className="text-light-text"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2984_6706)">
                  <path
                    d="M-0.499496 4C-0.499496 3.46957 -0.288783 2.96086 0.08629 2.58579C0.461363 2.21071 0.970071 2 1.5005 2H13.5005C14.0309 2 14.5396 2.21071 14.9147 2.58579C15.2898 2.96086 15.5005 3.46957 15.5005 4V12C15.5005 12.5304 15.2898 13.0391 14.9147 13.4142C14.5396 13.7893 14.0309 14 13.5005 14H1.5005C0.970071 14 0.461363 13.7893 0.08629 13.4142C-0.288783 13.0391 -0.499496 12.5304 -0.499496 12V4ZM1.5005 3C1.23529 3 0.980933 3.10536 0.793397 3.29289C0.60586 3.48043 0.500504 3.73478 0.500504 4V4.217L7.5005 8.417L14.5005 4.217V4C14.5005 3.73478 14.3951 3.48043 14.2076 3.29289C14.0201 3.10536 13.7657 3 13.5005 3H1.5005ZM14.5005 5.383L9.7425 8.238L14.5005 11.114V5.384V5.383ZM14.4665 12.261L8.7715 8.82L7.5005 9.583L6.2285 8.82L0.534504 12.26C0.591702 12.4724 0.717352 12.6601 0.891991 12.7938C1.06663 12.9276 1.28051 13.0001 1.5005 13H13.5005C13.7204 13.0001 13.9341 12.9278 14.1088 12.7942C14.2834 12.6607 14.4091 12.4732 14.4665 12.261ZM0.500504 11.114L5.2585 8.238L0.500504 5.383V11.113V11.114Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2984_6706">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.00050354)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h6 className="text-light-text text-h6 font-primary font-bold leading-6 tracking-[0.2px]">
                michelle.rivera@example.com
              </h6>
            </div>
          </div>

          <div className=" flex items-center">
            <h6 className="text-h6 text-light-text leading-6 tracking-[0.2px] font-primary font-bold">
              Follow Us and get a chance to win 80% off
            </h6>
          </div>

          <div className="flex items-center gap-2.5">
            <div>
              <h6
                className="text-h6 text-light-text leading-6 tracking-[0
              2px] font-primary font-bold"
              >
                Follow Us :
              </h6>
            </div>

            <div className="flex gap-1.5 items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0.000244141C5.829 0.000244141 5.556 0.0102441 4.703 0.0482441C3.85 0.0882441 3.269 0.222244 2.76 0.420244C2.22609 0.621063 1.74249 0.93607 1.343 1.34324C0.936076 1.74294 0.621107 2.22648 0.42 2.76024C0.222 3.26824 0.087 3.85024 0.048 4.70024C0.01 5.55524 0 5.82724 0 8.00124C0 10.1732 0.01 10.4452 0.048 11.2982C0.088 12.1502 0.222 12.7312 0.42 13.2402C0.625 13.7662 0.898 14.2122 1.343 14.6572C1.787 15.1022 2.233 15.3762 2.759 15.5802C3.269 15.7782 3.849 15.9132 4.701 15.9522C5.555 15.9902 5.827 16.0002 8 16.0002C10.173 16.0002 10.444 15.9902 11.298 15.9522C12.149 15.9122 12.732 15.7782 13.241 15.5802C13.7746 15.3793 14.2578 15.0643 14.657 14.6572C15.102 14.2122 15.375 13.7662 15.58 13.2402C15.777 12.7312 15.912 12.1502 15.952 11.2982C15.99 10.4452 16 10.1732 16 8.00024C16 5.82724 15.99 5.55524 15.952 4.70124C15.912 3.85024 15.777 3.26824 15.58 2.76024C15.3789 2.22647 15.0639 1.74292 14.657 1.34324C14.2576 0.93592 13.774 0.62089 13.24 0.420244C12.73 0.222244 12.148 0.0872441 11.297 0.0482441C10.443 0.0102441 10.172 0.000244141 7.998 0.000244141H8.001H8ZM7.283 1.44224H8.001C10.137 1.44224 10.39 1.44924 11.233 1.48824C12.013 1.52324 12.437 1.65424 12.719 1.76324C13.092 1.90824 13.359 2.08224 13.639 2.36224C13.919 2.64224 14.092 2.90824 14.237 3.28224C14.347 3.56324 14.477 3.98724 14.512 4.76724C14.551 5.61024 14.559 5.86324 14.559 7.99824C14.559 10.1332 14.551 10.3872 14.512 11.2302C14.477 12.0102 14.346 12.4332 14.237 12.7152C14.1087 13.0626 13.904 13.3767 13.638 13.6342C13.358 13.9142 13.092 14.0872 12.718 14.2322C12.438 14.3422 12.014 14.4722 11.233 14.5082C10.39 14.5462 10.137 14.5552 8.001 14.5552C5.865 14.5552 5.611 14.5462 4.768 14.5082C3.988 14.4722 3.565 14.3422 3.283 14.2322C2.9355 14.1042 2.62113 13.8998 2.363 13.6342C2.09675 13.3763 1.89172 13.0619 1.763 12.7142C1.654 12.4332 1.523 12.0092 1.488 11.2292C1.45 10.3862 1.442 10.1332 1.442 7.99624C1.442 5.86024 1.45 5.60824 1.488 4.76524C1.524 3.98524 1.654 3.56124 1.764 3.27924C1.909 2.90624 2.083 2.63924 2.363 2.35924C2.643 2.07924 2.909 1.90624 3.283 1.76124C3.565 1.65124 3.988 1.52124 4.768 1.48524C5.506 1.45124 5.792 1.44124 7.283 1.44024V1.44224ZM12.271 2.77024C12.1449 2.77024 12.0201 2.79508 11.9036 2.84332C11.7872 2.89156 11.6813 2.96228 11.5922 3.05142C11.503 3.14057 11.4323 3.2464 11.3841 3.36287C11.3358 3.47934 11.311 3.60418 11.311 3.73024C11.311 3.85631 11.3358 3.98115 11.3841 4.09762C11.4323 4.21409 11.503 4.31992 11.5922 4.40907C11.6813 4.49821 11.7872 4.56892 11.9036 4.61717C12.0201 4.66541 12.1449 4.69024 12.271 4.69024C12.5256 4.69024 12.7698 4.5891 12.9498 4.40907C13.1299 4.22903 13.231 3.98485 13.231 3.73024C13.231 3.47564 13.1299 3.23146 12.9498 3.05142C12.7698 2.87139 12.5256 2.77024 12.271 2.77024ZM8.001 3.89224C7.45607 3.88374 6.91489 3.98373 6.40898 4.18639C5.90306 4.38904 5.44251 4.69032 5.05415 5.07267C4.66579 5.45502 4.35736 5.91081 4.14684 6.4135C3.93632 6.9162 3.8279 7.45575 3.8279 8.00074C3.8279 8.54574 3.93632 9.08529 4.14684 9.58798C4.35736 10.0907 4.66579 10.5465 5.05415 10.9288C5.44251 11.3112 5.90306 11.6124 6.40898 11.8151C6.91489 12.0178 7.45607 12.1177 8.001 12.1092C9.07954 12.0924 10.1082 11.6522 10.865 10.8835C11.6217 10.1148 12.0459 9.07942 12.0459 8.00074C12.0459 6.92207 11.6217 5.88666 10.865 5.11799C10.1082 4.34933 9.07954 3.90907 8.001 3.89224ZM8.001 5.33324C8.70833 5.33324 9.38669 5.61423 9.88685 6.11439C10.387 6.61455 10.668 7.29291 10.668 8.00024C10.668 8.70758 10.387 9.38594 9.88685 9.8861C9.38669 10.3863 8.70833 10.6672 8.001 10.6672C7.29367 10.6672 6.61531 10.3863 6.11515 9.8861C5.61499 9.38594 5.334 8.70758 5.334 8.00024C5.334 7.29291 5.61499 6.61455 6.11515 6.11439C6.61531 5.61423 7.29367 5.33324 8.001 5.33324Z"
                  fill="white"
                />
              </svg>

              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2984_6718)">
                  <path
                    d="M9.051 1.99927H9.14C9.962 2.00227 14.127 2.03227 15.25 2.33427C15.5895 2.42644 15.8989 2.60609 16.1472 2.85528C16.3955 3.10446 16.574 3.41445 16.665 3.75427C16.766 4.13427 16.837 4.63727 16.885 5.15627L16.895 5.26027L16.917 5.52027L16.925 5.62427C16.99 6.53827 16.998 7.39427 16.999 7.58127V7.65627C16.998 7.85027 16.989 8.76427 16.917 9.71627L16.909 9.82127L16.9 9.92527C16.85 10.4973 16.776 11.0653 16.665 11.4833C16.5743 11.8232 16.3958 12.1334 16.1475 12.3826C15.8991 12.6318 15.5896 12.8114 15.25 12.9033C14.09 13.2153 9.681 13.2373 9.07 13.2383H8.928C8.619 13.2383 7.341 13.2323 6.001 13.1863L5.831 13.1803L5.744 13.1763L5.573 13.1693L5.402 13.1623C4.292 13.1133 3.235 13.0343 2.748 12.9023C2.40849 12.8105 2.09907 12.6311 1.85072 12.382C1.60238 12.133 1.42385 11.823 1.333 11.4833C1.222 11.0663 1.148 10.4973 1.098 9.92527L1.09 9.82027L1.082 9.71627C1.03265 9.03867 1.0053 8.35964 1 7.68027L1 7.55727C1.002 7.34227 1.01 6.59927 1.064 5.77927L1.071 5.67627L1.074 5.62427L1.082 5.52027L1.104 5.26027L1.114 5.15627C1.162 4.63727 1.233 4.13327 1.334 3.75427C1.42469 3.41432 1.60316 3.10418 1.85151 2.85495C2.09986 2.60572 2.40937 2.42616 2.749 2.33427C3.236 2.20427 4.293 2.12427 5.403 2.07427L5.573 2.06727L5.745 2.06127L5.831 2.05827L6.002 2.05127C6.95371 2.02064 7.90581 2.00364 8.858 2.00027H9.051V1.99927ZM7.4 5.20927V10.0273L11.557 7.61927L7.4 5.20927Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2984_6718">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5 0.000244141)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2984_6721)">
                  <path
                    d="M16.002 8.05024C16.002 3.60424 12.42 0.000244141 8.002 0.000244141C3.582 0.00124414 0 3.60424 0 8.05124C0 12.0682 2.926 15.3982 6.75 16.0022V10.3772H4.72V8.05124H6.752V6.27624C6.752 4.25924 7.947 3.14524 9.774 3.14524C10.65 3.14524 11.565 3.30224 11.565 3.30224V5.28224H10.556C9.563 5.28224 9.253 5.90324 9.253 6.54024V8.05024H11.471L11.117 10.3762H9.252V16.0012C13.076 15.3972 16.002 12.0672 16.002 8.05024Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2984_6721">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5 0.000244141)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.026 13.0009C11.064 13.0009 14.367 7.99794 14.367 3.66694C14.367 3.52694 14.367 3.38494 14.361 3.24494C15.0041 2.77942 15.5591 2.20309 16 1.54294C15.3993 1.80779 14.7628 1.98234 14.111 2.06094C14.7975 1.65057 15.3117 1.00491 15.558 0.243937C14.913 0.626061 14.207 0.894311 13.471 1.03694C12.9762 0.509961 12.3214 0.160855 11.6081 0.0436948C10.8948 -0.0734655 10.1627 0.0478587 9.52534 0.388875C8.88796 0.72989 8.38081 1.27157 8.08245 1.93C7.78409 2.58843 7.71118 3.32687 7.875 4.03094C6.56974 3.96549 5.29282 3.62641 4.12704 3.03568C2.96127 2.44495 1.93268 1.61578 1.108 0.601937C0.68934 1.32502 0.561574 2.18034 0.750646 2.9942C0.939718 3.80807 1.43145 4.51947 2.126 4.98394C1.60554 4.96625 1.09652 4.8265 0.64 4.57594V4.62094C0.640897 5.37842 0.903307 6.11236 1.38287 6.6987C1.86244 7.28504 2.52975 7.68781 3.272 7.83894C2.99026 7.91655 2.69923 7.95524 2.407 7.95394C2.20098 7.95456 1.99538 7.93547 1.793 7.89694C2.00279 8.54899 2.41127 9.1191 2.96125 9.52741C3.51122 9.93573 4.17513 10.1618 4.86 10.1739C3.69656 11.0877 2.2594 11.5833 0.78 11.5809C0.519321 11.582 0.258823 11.567 0 11.5359C1.50151 12.4932 3.2453 13.0015 5.026 13.0009Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Header />

      {/* End of header */}

      {/* Banner */}

      <div
        className=" min-h-[600px] flex items-center bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(/images/banners/banner-pic-1.jpg)`,
        }}
      >
        <div className="max-w-[1200px] space-y-9 px-12 w-full mx-auto text-second-text-2 relative">
          <div className=" space-y-[20px]">
            <h5 className="text-[16px] py-8 font-primary font-bold leading-6 tracking-[0.1px] text-light-text ">
              SUMMER 2020
            </h5>
            <h2 className="text-light-text font-primary font-bold text-h1 leading-12 tracking-[0.2px]">
              NEW COLLECTION
            </h2>
            <h4 className="font-primary py-8 text-h4 leading-7 tracking-[0.2px] font-normal text-light-text">
              We know how large objects will act,
              <br /> but things on a small scale.
            </h4>
            <div className="w-[332px] flex justify-between">
              <button className=" font-primary text-h3 text-light-text py-4 px-10 bg-success rounded-[5px] font-bold leading-5 tracking-[0.1px] text-white cursor-pointer focus:outline-none ">
                SHOP NOW
              </button>
            </div>
          </div>

          <div className="absolute top-1/2 -left-[90px]">
            <svg
              width="24"
              height="45"
              viewBox="0 0 24 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.4993 43.7724C23.341 43.9302 23.1529 44.0554 22.9458 44.1408C22.7387 44.2263 22.5167 44.2703 22.2925 44.2703C22.0683 44.2703 21.8463 44.2263 21.6392 44.1408C21.4321 44.0554 21.244 43.9302 21.0857 43.7724L0.631107 23.4352C0.472368 23.2778 0.346428 23.0908 0.260496 22.8849C0.174566 22.679 0.130333 22.4582 0.130333 22.2353C0.130333 22.0124 0.174566 21.7917 0.260496 21.5858C0.346428 21.3799 0.472368 21.1928 0.631107 21.0354L21.0857 0.698261C21.4057 0.380028 21.8398 0.201248 22.2925 0.201248C22.7451 0.201248 23.1792 0.380028 23.4993 0.698261C23.8194 1.01649 23.9992 1.4481 23.9992 1.89815C23.9992 2.3482 23.8194 2.77981 23.4993 3.09805L4.24815 22.2353L23.4993 41.3726C23.658 41.53 23.784 41.717 23.8699 41.9229C23.9558 42.1288 24.0001 42.3496 24.0001 42.5725C24.0001 42.7954 23.9558 43.0161 23.8699 43.222C23.784 43.4279 23.658 43.6149 23.4993 43.7724Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute top-1/2 -right-[90px]">
            <svg
              width="24"
              height="45"
              viewBox="0 0 24 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2984_6847)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.565959 0.698218C0.724296 0.540391 0.912395 0.415172 1.11948 0.329734C1.32657 0.244296 1.54857 0.200317 1.77278 0.200317C1.99698 0.200317 2.21899 0.244296 2.42607 0.329734C2.63316 0.415172 2.82126 0.540391 2.9796 0.698218L23.4341 21.0354C23.5929 21.1928 23.7188 21.3798 23.8048 21.5857C23.8907 21.7916 23.9349 22.0124 23.9349 22.2353C23.9349 22.4582 23.8907 22.6789 23.8048 22.8848C23.7188 23.0907 23.5929 23.2777 23.4341 23.4352L2.9796 43.7723C2.65953 44.0906 2.22542 44.2693 1.77278 44.2693C1.32013 44.2693 0.886027 44.0906 0.565959 43.7723C0.245891 43.4541 0.066078 43.0225 0.066078 42.5724C0.066078 42.1224 0.245891 41.6908 0.565959 41.3725L19.8171 22.2353L0.565959 3.098C0.407221 2.94057 0.281279 2.75356 0.195347 2.54766C0.109416 2.34176 0.0651855 2.12103 0.0651855 1.89811C0.0651855 1.67519 0.109416 1.45446 0.195347 1.24856C0.281279 1.04267 0.407221 0.855647 0.565959 0.698218Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2984_6847">
                  <rect width="24" height="44.4706" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex gap-[1px] absolute bottom-6 left-1/2 -translate-10 justify-center">
          <div className=" bg-light-background w-[62px] h-[10px]"></div>
          <div className=" bg-light-background opacity-50 w-[62px] h-[10px]"></div>
        </div>
      </div>

      {/* End of banner */}

      {/* editors pick */}
      <div className="py-20">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="space-y-2.5">
            <h2 className="font-primary mb-2.5 font-bold text-2xl leading-8 tracking-[0.1px] text-center text-text">
              EDITOR'S PICK
            </h2>
            <p className="font-prima font-normal text-h6 leading-6 tracking-[0.2px] text-center text-second-text">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <div className="grid px-10 lg:px-0 lg:grid-cols-4 gap-x-7 gap-y-4 gird-row-2">
            <div className=" col-span-2 row-span-2 relative">
              <img
                src="/images/pick-editors/pick-1.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
              <div className="bg-light-background absolute bottom-5 left-5 py-3 px-10">
                <span className="text-text font-primary font-bold text-base leading-6 tracking-[0.1px]">
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
              <div className="bg-light-background absolute bottom-5 left-5 py-3 px-10">
                <span className="text-text font-primary font-bold text-base leading-6 tracking-[0.1px]">
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
              <div className="bg-light-background absolute bottom-5 left-5 py-3 px-10 ">
                <span className="text-text font-primary font-bold text-base leading-6 tracking-[0.1px]">
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
              <div className="bg-light-background absolute bottom-5 left-5 py-3 px-10 ">
                <span className="text-text font-primary font-bold text-base leading-6 tracking-[0.1px]">
                  KIDS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End of editors pick */}

      {/*product card */}
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center font-primary py-20 ">
          <h4 className="text-second-text text-h6 leading-5 tracking-[0.2px] font-normal">
            Featured Products
          </h4>
          <h3 className="text-2xl font-primary leading-8 tracking-[0.2px] font-bold text-text">
            BESTSELLER PRODUCTS
          </h3>
          <h4 className="text-h6 font-primary font-bold leading-5 tracking-[0.2px] text-second-text">
            Problems trying to resolve the confilct between
          </h4>
        </div>
        <div className="grid grid-cols-4 gap-8 max-w-[1200px] font-primary mx-auto">
          <div className="">
            <div className="max-w-auto ">
              <img
                className="object-cover "
                src="/images/products/fixed-height.jpg"
                alt=""
              />
            </div>
            <div className="">
              <h3 className="text-text text-h5 font-primary pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-h6 font-primary leading-6 tracking-[0.2px] py-2.5 px-3.5 text-second-text font-bold text-center">
                English Department
              </h4>
              <h4 className="text-h5 font-primary leading-6 tracking-[0.2px] text-center font-bold text-muted-text">
                $16.48
                <span className="text-h5 ml-0.5 font-bold text-secondary-1">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className="">
            <div className="overflow-hidden">
              <img
                className="object-cover max-h-[427px] w-auto overflow-hidden"
                src="/images/products/picTwo.jpg"
                alt=""
              />
            </div>
            <div className="">
              <h3 className="text-text text-h5 pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-h6 leading-6 tracking-[0.2px] py-2.5 px-3.5 text-second-text font-bold text-center">
                English Department
              </h4>
              <h4 className="text-h6 leading-6 tracking-[0.2px] text-center font-bold text-muted-text">
                $16.48
                <span className="text-h5 ml-0.5 font-bold text-secondary-1">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className=" ">
            <img
              className=" w[239px]"
              src="/images/products/picThree.jpg"
              alt=""
            />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-text text-h5 font-primary pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-h6 font-primary leading-6 tracking-[0.2px] py-2.5 px-3.5 text-second-text font-bold text-center">
                English Department
              </h4>
              <h4 className="text-h5 font-primary leading-6 tracking-[0.2px] text-center font-bold text-muted-text">
                $16.48
                <span className="text-h5 ml-0.5 font-bold text-secondary-1">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className=" ">
            <img className=" " src="/images/products/picFour.jpg" alt="" />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-text text-h5 font-primary pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-h6 font-primary leading-6 tracking-[0.2px] py-2.5 px-3.5 text-second-text font-bold text-center">
                English Department
              </h4>
              <h4 className="text-h5 font-primary leading-6 tracking-[0.2px] text-center font-bold text-muted-text">
                $16.48
                <span className="text-h5 ml-0.5 font-bold text-secondary-1">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className=" ">
            <img className="" src="/images/products/picFive.jpg" alt="" />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-text text-h5 font-primary pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-h6 font-primary leading-6 tracking-[0.2px] py-2.5 px-3.5 text-second-text font-bold text-center">
                English Department
              </h4>
              <h4 className="text-h5 font-primary leading-6 tracking-[0.2px] text-center font-bold text-muted-text">
                $16.48
                <span className="text-h5 ml-0.5 font-bold text-secondary-1">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className=" ">
            <img className="" src="/images/products/picSix.jpg" alt="" />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-text text-h5 font-primary pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-h6 font-primary leading-6 tracking-[0.2px] py-2.5 px-3.5 text-second-text font-bold text-center">
                English Department
              </h4>
              <h4 className="text-h5 font-primary leading-6 tracking-[0.2px] text-center font-bold text-muted-text">
                $16.48
                <span className="text-h5 ml-0.5 font-bold text-secondary-1">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className="">
            <img className=" " src="/images/products/picSeven.jpg" alt="" />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-text text-h5 font-primary pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-h6 font-primary leading-6 tracking-[0.2px] py-2.5 px-3.5 text-second-text font-bold text-center">
                English Department
              </h4>
              <h4 className="text-h5 font-primary leading-6 tracking-[0.2px] text-center font-bold text-muted-text">
                $16.48
                <span className="text-h5 ml-0.5 font-bold text-secondary-1">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
          <div className=" ">
            <img className=" " src="/images/products/picEight.jpg" alt="" />
            <div className="w-[239px] h-[188px]">
              <h3 className="text-text text-h5 font-primary pt-6 font-bold leading-6 tracking-[o.2px] text-center">
                Graphic Design
              </h3>
              <h4 className="text-h6 font-primary leading-6 tracking-[0.2px] py-2.5 px-3.5 text-second-text font-bold text-center">
                English Department
              </h4>
              <h4 className="text-h5 font-primary leading-6 tracking-[0.2px] text-center font-bold text-muted-text">
                $16.48
                <span className="text-h5 ml-0.5 font-bold text-secondary-1">
                  $6.48
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* End of product card */}

      {/* vita section */}
      <div className="min-h-[590px] bg-secondary-1 ">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 relative">
          <div className="max-w-[1200px] space-y-9 w-full mx-auto text-second-text-2 py-[40px] ">
            <div className=" max-w-[1200px] px-12 w-full mx-auto text-second-text-2 ">
              <h5 className="text-h5 py-8 font-primary font-bold leading-6 tracking-[0.1px] text-light-text ">
                SUMMER 2020
              </h5>
              <h1 className="text-light-text font-primary font-bold text-h1 leading-20 tracking-[0.2px]">
                Vita Classic <br />
                Product
              </h1>
              <h4 className="font-primary py-8 text-h4 leading-7 tracking-[0.2px] font-normal text-light-text-gray-1">
                We know how large objects will act,
                <br /> but things on a small scale.
              </h4>
              <div className="w-[332px] flex justify-between items-center">
                <h3 className="font-primary leading-8 tracking-[0.1px] text-light-text-gray-1 text-h3">
                  $16.48
                </h3>
                <button className=" font-primary py-4 px-10 bg-success rounded-[5px] font-bold text-sm leading-5 tracking-[0.2px] text-light-text cursor-pointer focus:outline-none ">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/images/vitas/vita-pic-1.png" alt="" />
          </div>
          <div className="absolute top-1/2 -left-[200px]">
            <svg
              width="24"
              height="45"
              viewBox="0 0 24 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.4993 43.7724C23.341 43.9302 23.1529 44.0554 22.9458 44.1408C22.7387 44.2263 22.5167 44.2703 22.2925 44.2703C22.0683 44.2703 21.8463 44.2263 21.6392 44.1408C21.4321 44.0554 21.244 43.9302 21.0857 43.7724L0.631107 23.4352C0.472368 23.2778 0.346428 23.0908 0.260496 22.8849C0.174566 22.679 0.130333 22.4582 0.130333 22.2353C0.130333 22.0124 0.174566 21.7917 0.260496 21.5858C0.346428 21.3799 0.472368 21.1928 0.631107 21.0354L21.0857 0.698261C21.4057 0.380028 21.8398 0.201248 22.2925 0.201248C22.7451 0.201248 23.1792 0.380028 23.4993 0.698261C23.8194 1.01649 23.9992 1.4481 23.9992 1.89815C23.9992 2.3482 23.8194 2.77981 23.4993 3.09805L4.24815 22.2353L23.4993 41.3726C23.658 41.53 23.784 41.717 23.8699 41.9229C23.9558 42.1288 24.0001 42.3496 24.0001 42.5725C24.0001 42.7954 23.9558 43.0161 23.8699 43.222C23.784 43.4279 23.658 43.6149 23.4993 43.7724Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="absolute top-1/2 -right-[200px]">
            <svg
              width="24"
              height="45"
              viewBox="0 0 24 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2984_6847)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.565959 0.698218C0.724296 0.540391 0.912395 0.415172 1.11948 0.329734C1.32657 0.244296 1.54857 0.200317 1.77278 0.200317C1.99698 0.200317 2.21899 0.244296 2.42607 0.329734C2.63316 0.415172 2.82126 0.540391 2.9796 0.698218L23.4341 21.0354C23.5929 21.1928 23.7188 21.3798 23.8048 21.5857C23.8907 21.7916 23.9349 22.0124 23.9349 22.2353C23.9349 22.4582 23.8907 22.6789 23.8048 22.8848C23.7188 23.0907 23.5929 23.2777 23.4341 23.4352L2.9796 43.7723C2.65953 44.0906 2.22542 44.2693 1.77278 44.2693C1.32013 44.2693 0.886027 44.0906 0.565959 43.7723C0.245891 43.4541 0.066078 43.0225 0.066078 42.5724C0.066078 42.1224 0.245891 41.6908 0.565959 41.3725L19.8171 22.2353L0.565959 3.098C0.407221 2.94057 0.281279 2.75356 0.195347 2.54766C0.109416 2.34176 0.0651855 2.12103 0.0651855 1.89811C0.0651855 1.67519 0.109416 1.45446 0.195347 1.24856C0.281279 1.04267 0.407221 0.855647 0.565959 0.698218Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2984_6847">
                  <rect width="24" height="44.4706" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="flex gap-[1px] absolute bottom-6 left-1/2 -translate-10 justify-center">
            <div className=" bg-light-background w-[62px] h-[10px]"></div>
            <div className=" bg-light-background opacity-50 w-[62px] h-[10px]"></div>
          </div>
        </div>
      </div>
      {/* End of vita secttion */}

      {/* Neural Universe */}
      <div className="w-[1200px]  mx-auto grid lg:text-left text-center lg:grid-cols-2 gap-[125px] items-center">
        <div className="w-[735px] ">
          <img
            className="bg-cover"
            src="/images/neural/neural-pic-1.png"
            alt=""
          />
        </div>

        <div className=" lg:space-y-[20px] ">
          <h5 className="text-h5 py-8 font-primary font-bold leading-6 tracking-[0.1px] text-muted-text ">
            SUMMER 2020
          </h5>
          <h2 className="text-text font-primary font-bold text-h2 leading-12 tracking-[0.2px]">
            Part of the Neural <br /> Universe
          </h2>
          <h4 className="font-primary py-8 text-h4 leading-7 tracking-[0.2px] font-normal text-second-text">
            We know how large objects will act,
            <br /> but things on a small scale.
          </h4>
          <div className="flex justify-start gap-2.5 px-[450px] lg:px-0">
            <button className="py-[15px] px-[30px] border-[1px] border-success bg-success rounded-[5px] text-h6 leading-5 tracking-[0.2px] text-light-text cursor-pointer focus:outline-none ">
              BUY NOW
            </button>
            <button className="py-[15px] px-[30px] border-[1px] bg-light-text rounded-[5px] text-h6 leading-5 tracking-[0.2px] text-success cursor-pointer focus:outline-none ">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* End of  Neural Universe */}

      {/* featured post */}
      <div className="max-w-[1200px] mx-auto py-28 px-[42px] lg:px-0">
        <div className="text-center pb-20">
          <h6 className="text-primary text-h6 leading-6 tracking-[0.2px] font-bold">
            Practice Advice
          </h6>
          <h2 className="font-primary text-h2 py-2.5 leading-12 tracking-[0.2px] font-bold">
            Featured Posts
          </h2>
          <p className="font-primary font-normal text-second-text text-h6 leading-5 tracking-[0.2px]">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className=" lg:px-0 grid grid-cols-1 gap-2.5 lg:grid-cols-3 sm:grid-cols-2">
          <div className=" border-[1px] bg-light-background shadow-md border-[#f5f5f5] border-solid">
            <div className="max-h-[300px] overflow-hidden">
              <img
                className="w-full h-auto"
                src="/images/featured/featured-pic-1.jpg"
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
                Loudest à la Madison #1 (L'integral)
              </h5>
              <p className="font-primary text-h6 text-second-text leading-5 tracking-[0.2px] font-normal">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
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

          <div className=" border-[1px] bg-[#FFFFFF] shadow-md border-[#f5f5f5] border-solid">
            <div className="max-h-[300px] overflow-hidden">
              <img
                className="w-full h-auto"
                src="/images/featured/featured-pic-2.jpg"
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
                Loudest à la Madison #1 (L'integral)
              </h5>
              <p className="font-primary text-h6 text-second-text leading-5 tracking-[0.2px] font-normal">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
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

          <div className=" border-[1px] bg-[#FFFFFF] shadow-md border-[#f5f5f5] border-solid">
            <div className="max-h-[300px] overflow-hidden">
              <img
                className="w-full h-auto "
                src="/images/featured/featured-pic-3.jpg"
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
                Loudest à la Madison #1 (L'integral)
              </h5>
              <p className="font-primary text-h6 text-second-text leading-5 tracking-[0.2px] font-normal">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
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

      {/* End of featured post */}

      {/* footer */}
      <Footer />

      {/* End of Footer */}
    </>
  );
}
