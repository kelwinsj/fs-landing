import Head from 'next/head';
import Nav from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>New FS Landing</title>
        <link rel="icon" href="../assets/fs.ico" />
      </Head>

      <Nav />
      <section id="hero" className="text-gray-700 body-font bg-green-dark">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 text-white leading-snug font-bold">
              Welcome to <br />
              <span className="text-orange-light">Faculty Solutions</span>
            </h1>
            <p className="mb-8 leading-relaxed text-white italic">
              The future of learning
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-orange-dark border-0 py-2 px-6 focus:outline-none hover:bg-green-light rounded text-lg font-medium">
                Book a demo
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src="/assets/dark.png" className="w-ful" alt="fs" />
          </div>
        </div>
      </section>

      {/* New content for the page */}

      <section id="services" class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-24 h-full bg-green-light"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                With modesty and technology
              </h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                We aim to bring new insights into the world of learing by
                leveraging technologies that will indeed bring us closer to the
                real thing with more than just thae basics.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap justify-around sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-cardtwo sm:mb-0 mb-6 shadow-lg rounded-sm">
              <h2 class="text-xl font-medium title-font text-green-dark mt-5">
                Timetable management
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a class="text-green-light inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="p-4 md:w-cardtwo sm:mb-0 mb-6 shadow-lg rounded-sm">
              <h2 class="text-xl font-medium title-font text-green-dark mt-5">
                Learning management solutions
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a class="text-green-light inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
