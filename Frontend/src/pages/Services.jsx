import { MdArrowForward } from "react-icons/md";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { easeInOut } from "framer-motion";



const Services = () => {

  const { ref, inView } = useInView({
      triggerOnce: true, // Animation will trigger one time
      threshold: 0.3, // Trigger animation when 30% of the element is visible
    });

    const { ref:CareRef, inView: CareinView } = useInView({
      triggerOnce: true, // Animation will trigger one time
      threshold: 0.3, // Trigger animation when 30% of the element is visible
    });

    const { ref:LifeStyleRef, inView:LifeStyleinView } = useInView({
      triggerOnce: true, // Animation will trigger one time
      threshold: 0.3, // Trigger animation when 30% of the element is visible
    });

    

    
  const services =
    [{
      img: assets.Card_icon_4,
      heading: "Assistance with daily personal activities",
      para: "We assist with daily living activities like personal hygiene, meal preparation, and mobility, enabling our participants to live as independently as possible both at home and within their community."
    },

    {
      img: assets.Card_icon_5,
      heading: "Assistance with development of daily living and life skills",
      para: "We help our participants engage in training and development activities aimed at enhancing their capacity to live as independently as possible, including support to improve their ability to travel and use public transportation on their own."
    },

    {
      img: assets.Card_icon_6,
      heading: "Assistance with travel/transport arrangements",
      para: "We arrange and provide transportation for our participants, facilitating their participation in community, social, economic, and daily life activities."
    },

    {
      img: assets.Card_icon_7,
      heading: "Assistance with household tasks",
      para: "We support our participants in managing tasks such as cleaning, laundry, cooking, and home upkeep. "
    },

    {
      img: assets.Card_icon_9,
      heading: "Group and Centre- based Activities",
      para: "We encourage and support our participants in engaging in social and recreational activities within group settings, allowing them to meet new people, form friendships, acquire new skills, enhance essential abilities, and enjoy themselves."
    },

    {
      img: assets.Card_icon_10,
      heading: "Participation in the Community",
      para: "We provide support and assistance to our participants in building the skills and abilities needed to actively engage in social and civic activities within their community."
    },
    ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[55vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${assets.img_bg_1})`,
            opacity: 0.8
          }}
          role="img"
          aria-label="Background image"
        />
        <motion.div
        ref={ref}
        initial={{ y: -70, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -70, opacity: 0 }}
        transition={{ duration: 1.2, ease: easeInOut }}
         className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-gray-800 tracking-wider">
            OUR PREMIUM SERVICES
          </h1>
        </motion.div>
      </div>

      <div className="mt-[5rem] flex justify-center text-center items-center gap-4">
        <div className="leading-[2rem]">
          <div className="text-lg">Premiuim Services</div>
          <div className="text-4xl font-bold">Our Services</div>
        </div>
        <div>
          <p className="w-8 md:w-[1.6px] h-[4rem] bg-[#414141] flex justify-center items-center"></p>
        </div>
        <div className="text-center w-[40rem]">We are committed to delivering exceptional services tailored to meet each participant’s unique needs.</div>
      </div>


      {/* Cards Section */}
      <div className="w-full h-fit lg:w-[80%] pt-[5rem] mx-auto px-[3rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-101 w-[20rem] min-h-[30rem] h-fit border-2  rounded-3xl px-2"
            >
              <img src={service.img} alt="error" className="w-2rem h-12 object-cover ml-5 mt-5" />
              <h3 className="heading mt-5 p-3 font-semibold text-2xl min-h-[8rem]">{service.heading}</h3>
              <p className="p-3 break-words" style={{ minHeight: "calc(100% - 8rem)" }}>{service.para}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-101 w-full border-2 rounded-3xl h-fit pb-20 px-2 flex flex-col items-center mt-[2rem]">
          <img src={assets.Card_icon_8} alt="error" className="w-2rem h-12 object-cover" />
          <h3 className="heading font-semibold text-2xl">Innovative community participation</h3>
          <p className="break-words text-center">
            Engaging programs that foster social connections and skill development in a safe, supportive environment.
          </p>
        </div>
      </div>




      {/* Full Width Content Section */}
      <div className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Expert Team</h3>
              <p className="text-gray-600">
                Our team of experienced professionals ensures the highest quality
                of service delivery.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Modern Solutions</h3>
              <p className="text-gray-600">
                We use cutting-edge technologies to build scalable and efficient
                solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Personalized Approach</h3>
              <p className="text-gray-600">
                We tailor our solutions to meet your specific needs, ensuring a customized experience every time.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Reliable Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is available around the clock to assist you with any challenges.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="px-[10rem] flex flex-col gap-[10rem] mt-[10rem]">
        <motion.div className="flex" 
          ref={CareRef}>
          <div className="flex-col ">
            <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={CareinView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 1.2, ease: easeInOut }}
             className="text-5xl font-bold ml-[1rem] mb-[3rem]">Care</motion.h1>
            <div> <p className="text-xl">We deliver personalized and inclusive care, guided by best practices. Our focus is on supporting participants to achieve their goals and desired outcomes, ensuring their physical health, mental well-being, and social connections are prioritized.</p>
              <p className="mt-[2rem] text-xl">
                We provide dedicated, compassionate support workers available on-site 24/7, with a registered nurse on-call around the clock to ensure continuous care and assistance.</p>
            </div>
          </div>

          <div className="ml-[1rem] items-center justify center  flex h-[25rem] w-[140rem]"><motion.img
          initial={{ x: 170, opacity: 0 }}
          animate={CareinView ? { x: 0, opacity: 1 } : { x: 170, opacity: 0 }}
          transition={{ duration: 1.2, ease: easeInOut }}
          className="rounded-3xl" src={assets.img_25} alt="network error" /></div>


        </motion.div>

        <motion.div className="flex items-center" ref={LifeStyleRef}>
          <div className="mr-[2rem] items-center justify center  flex h-[25rem] w-[140rem]"><motion.img
           initial={{ x: -170, opacity: 0 }}
           animate={LifeStyleinView ? { x: 0, opacity: 1 } : { x: -170, opacity: 0 }}
           transition={{ duration: 1.2, ease: easeInOut }}
          className=" object-contain rounded-3xl" src={assets.img_26} alt="network error" /></div>

          <div className="flex-col ">
            <motion.h1 
             initial={{ x: 100, opacity: 0 }}
             animate={LifeStyleinView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
             transition={{ duration: 1.2, ease: easeInOut }}
            className="text-5xl font-bold ml-[1rem] mb-[3rem]">Lifestyle</motion.h1>
            <div> <p className="text-xl">At AngelAssistCare, every day is unique with the diverse range of activities and lifestyle options we offer. Whether it’s engaging in indoor activities, exploring the outdoors, or going on excursions, we ensure our participants have an enjoyable experience. We design personalized and group schedules tailored to their preferences.</p>
              <p className="mt-[2rem] text-xl"><ul>
                <li>Arts and Crafts</li>
                <li>Cooking/Baking</li>
                <li>​Gardening</li>
                <li>Entertainment​</li>
                <li>Indoor and Outdoor Games</li>
                <li>Tours/Travel</li>
              </ul></p>
            </div>
          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default Services;
