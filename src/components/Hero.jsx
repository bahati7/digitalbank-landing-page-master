import hero from "../assets/hero.png";

const Hero = () => {
  return (
   <section className="bg-white overflow-hidden lg:grid lg:h-screen md:-mt-16 mt-0 lg:place-content-center dark:bg-gray-900">

  <div className="mx-auto w-screen max-w-7xl flex flex-col-reverse md:grid md:grid-cols-2 md:items-center md:gap-4 px-4 py-2 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

    {/* TEXT */}
    <div className="max-w-prose text-left py-4">

      <h1 className="text-5xl  text-gray-900 sm:text-1xl dark:text-white">
        Next generation digital banking
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
        Take your financial life online. Your Digitalbank account will be a one-stop-shop
        for spending, saving, budgeting, investing, and much more.
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
        <a
          href=""
          className="py-2 px-5 rounded-full text-white bg-linear-to-r from-brand-green to-brand-cyan hover:opacity-90 active:scale-98"
        >
          Request Invite
        </a>
      </div>

    </div>

    {/* IMAGE */}
    <div className="w-4xl -ml-64 -mt-32 lg:mt-0 lg:ml-0">
      <img
        className="w-full"
        src={hero}
        alt="Image of a person using a computer"
      />
    </div>

  </div>

</section>
  )
}

export default Hero