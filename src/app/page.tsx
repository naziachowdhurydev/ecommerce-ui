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

      <header className="w-[1400px] h-[136px] mx-auto flex justify-between">
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

            <h3 className="font-primary font-bold text-sm text-primary">
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
                <g clipPath="url(#clip0_2984_6803)">
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
                <g clipPath="url(#clip0_2984_6814)">
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

      {/* End of header */}

      {/* Banner */}

      <div
        className=" min-h-[600px] flex items-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(/images/banners/banner-pic-1.jpg)`,
        }}
      >
        <div className="max-w-[1200px] space-y-9 w-full mx-auto text-second-text-2">
          <div className=" space-y-[20px]">
            <h5 className="text-[16px] py-8 font-primary font-bold leading-6 tracking-[0.1px] text-light-text ">
              SUMMER 2020
            </h5>
            <h2 className="text-light-text font-primary font-bold text-[40px] leading-12 tracking-[0.2px]">
              NEW COLLECTION
            </h2>
            <h4 className="font-primary py-8 text-[20px] leading-7 tracking-[0.2px] font-normal text-light-text">
              We know how large objects will act,
              <br /> but things on a small scale.
            </h4>
            <div className="w-[332px] flex justify-between">
              <button className=" font-primary text-light-text py-4 px-10 bg-success rounded-[5px] font-bold text-h3 leading-5 tracking-[0.2px] text-white cursor-pointer focus:outline-none ">
                SHOP NOW
              </button>
            </div>
          </div>
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

          <div className="grid grid-cols-4 gap-x-7 gap-y-4 gird-row-2">
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
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/fixed-height.jpg"
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
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picTwo.jpg"
              alt=""
            />
            <div className="w-[239px] h-[188px]">
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
          <div className="w-[238px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
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
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picFour.jpg"
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
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picFive.jpg"
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
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picSix.jpg"
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
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picSeven.jpg"
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
          <div className="w-[239px] h-[615px]">
            <img
              className=" w[239px] h-[427px]"
              src="/images/products/picEight.jpg"
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
        </div>
      </div>

      {/* End of product card */}

      {/* vita section */}
      <div className="min-h-[590px] bg-secondary-1 ">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 ">
          <div className="max-w-[1200px] space-y-9 w-full mx-auto text-second-text-2 py-[40px] ">
            <div className=" space-y-[20px]">
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
          <div>
            <img src="/images/vitas/vita-pic-1.png" alt="" />
          </div>
        </div>
      </div>
      {/* End of vita secttion */}

      {/* Neural Universe */}
      <div className="w-[1200px] mx-auto grid grid-cols-2 gap-[125px] items-center">
        <div className="w-[735px] ">
          <img
            className="bg-cover"
            src="/images/neural/neural-pic-1.png"
            alt=""
          />
        </div>

        <div className=" space-y-[20px]">
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
          <div className="w-[332px] flex justify-between">
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
      <div className="max-w-[1200px] mx-auto py-28">
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
        <div className="grid grid-cols-3">
          <div className="w-[328px] border-[1px] bg-light-background shadow-md border-[#f5f5f5] border-solid">
            <img
              className="w-full h-[300px]"
              src="/images/featured/featured-pic-1.jpg"
              alt=""
            />

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
                <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                  22 April 2021
                </span>
                <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                  10 Comments
                </span>
              </div>
              <a
                className="font-primary text-h6 text-second-text font-bold leading-6 tracking-[0.2px]"
                href=""
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="w-[328px] border-[1px] bg-[#FFFFFF] shadow-md border-[#f5f5f5] border-solid">
            <img
              className="w-full h-[300px]"
              src="/images/featured/featured-pic-2.jpg"
              alt=""
            />

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
                <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                  22 April 2021
                </span>
                <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                  10 Comments
                </span>
              </div>
              <a
                className="font-primary text-h6 text-second-text font-bold leading-6 tracking-[0.2px]"
                href=""
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="w-[328px] border-[1px] bg-[#FFFFFF] shadow-md border-[#f5f5f5] border-solid">
            <img
              className="w-full h-[300px]"
              src="/images/featured/featured-pic-3.jpg"
              alt=""
            />

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
                <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                  22 April 2021
                </span>
                <span className="font-primary text-[12px] text-second-text leading-4 tracking-[0.2px]">
                  10 Comments
                </span>
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
      <footer>
        <div className=" bg-light-gray-1 font-primary py-10">
          <div className=" max-w-[1200px]  mx-auto flex justify-between items-center">
            <h3 className="text-h3 text-text font-bold">Bandage</h3>
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

        <hr className=" max-w-[1200px]  mx-auto text-[#E6E6E6] mb-12" />

        <div className=" font-primary max-w-[1200px] h-[136px] mx-auto flex justify-between ]">
          <div className="space-y-5">
            <h5 className="text-h3 text-text font-bold">Company Info</h5>
            <ul className="text-second-text text-h6 space-y-2.5">
              <li>About Us</li>
              <li>Carrier</li>
              <li>WE are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h5 className="text-h3 text-text font-bold">Legal</h5>
            <ul className="text-second-text text-h6 space-y-2.5">
              <li>About Us</li>
              <li>Carrier</li>
              <li>WE are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h5 className="text-h3 text-text font-bold">Features</h5>
            <ul className="text-second-text text-h6 space-y-2.5">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h5 className="text-h3 text-text font-bold">Resoures</h5>
            <ul className="text-second-text text-h6 space-y-2.5">
              <li>IOS & Android</li>
              <li>Watch a Demo </li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h5 className="text-h3 text-text font-bold">Get In Touch</h5>
            <div>
              <input
                className=" py-[15px] px-5 border-[1px] focus:outline-none rounded-bl-sm rounded-tl-sm border-[#E6E6E6] bg-[#F9F9F9] rounded-sm leading-7 tracking-[0.2px] text-sm text-[#737373] placeholder:text-[#737373] placeholder:text-sm placeholder:leading-7 placeholder:tracking-[o.2px]"
                type="text"
                placeholder="Your Email"
              />
              <button className="py-4 px-5 text-light-text leading-7 tracking-[0.2px] rounded-br-sm rounded-tr-sm cursor-pointer focus:outline-none bg-[#23A6F0] ">
                Subscribe
              </button>
              <p className="text-h6 pb-2 leading-7 tracking-[0,2px] text-second-text">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light-gray-1 font-primary">
          <div className=" h-[74px] py-6 max-w-[1200px]  mx-auto text-second-text text-h6 mt-[70px]">
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </footer>

      {/* End of Footer */}
    </>
  );
}
