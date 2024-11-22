export default function Duk() {
  return (
    <section>
      <div className="flex flex-col items-center pb-[50px] pt-[130px]">
        <div className="flex w-[1110px] items-center gap-8">
          <span className="h-[125px] rounded-lg border-2 border-real-green"></span>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-gray-400">DUK</p>
            <h2 className="bold font-gotham text-[44px] text-letter-blue">
              Dažniausiai užduodami klausimai
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3.5">
        <div className="flex w-[1110px] cursor-pointer justify-between rounded-xl border-[1px] border-gray-200 px-6 py-6">
          <p className="hover:text-letter-blue2 font-bold tracking-wider text-letter-blue transition duration-300">
            Kokie internetinės paskolos privalumai?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6"
          >
            <path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              className="svg1087763849__a bb-icon__dynamic-fill"
            ></path>
          </svg>
        </div>
        <div className="flex w-[1110px] cursor-pointer justify-between rounded-xl border-[1px] border-gray-200 px-6 py-6">
          <p className="hover:text-letter-blue2 font-bold tracking-wider text-letter-blue transition duration-300">
            Kaip pasinaudoti 60 dienų nemokamo grąžinimo garantija?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6"
          >
            <path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              className="svg1087763849__a bb-icon__dynamic-fill"
            ></path>
          </svg>
        </div>
        <div className="flex w-[1110px] cursor-pointer justify-between rounded-xl border-[1px] border-gray-200 px-6 py-6">
          <p className="hover:text-letter-blue2 font-bold tracking-wider text-letter-blue transition duration-300">
            Kas gali kreiptis į „Bigbank“ dėl paskolos?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6"
          >
            <path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              className="svg1087763849__a bb-icon__dynamic-fill"
            ></path>
          </svg>
        </div>
        <div className="flex w-[1110px] cursor-pointer justify-between rounded-xl border-[1px] border-gray-200 px-6 py-6">
          <p className="hover:text-letter-blue2 font-bold tracking-wider text-letter-blue transition duration-300">
            Kur ir kaip galiu pateikti paraišką dėl paskolos? Kada gausiu
            atsakymą?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6"
          >
            <path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              className="svg1087763849__a bb-icon__dynamic-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="group mb-3 flex w-full justify-end pr-[400px] pt-10">
        <a className="text-real-green group-hover:text-real-green2" href="./">
          Žiūrėti visus
        </a>
        <svg
          data-v-cc140ee1=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 fill-real-green group-hover:fill-real-green2"
        >
          <path
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            className="svg2046479579__a bb-icon__dynamic-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
