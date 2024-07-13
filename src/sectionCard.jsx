import React from "react";
import img from "./img/Photos/IMG_1685 copy 2.JPG";
import img2 from "./img/Photos/DSC00170.JPG";
import img3 from "./img/Photos/DSC06064.jpg";
import img4 from "./img/Photos/DSC06083.jpg";
import img5 from "./img/Photos/IMG_5418.JPG";
import img6 from "./img/Photos/IMG_4873.JPG";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img7 from "./img/Photos/photo_2024-07-11_22-54-18.jpg";
import img8 from "./img/Photos/photo_2024-07-11_22-54-28.jpg";
import img9 from "./img/Photos/photo_2024-07-11_23-11-27.jpg";
import img10 from "./img/Photos/photo_2024-07-11_23-11-33.jpg";

function SectionCard(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <div className="retreat-overview bg-light-gray py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-8">
          <div className="flex-1 mb-10 md:mb-0 md:mr-10">
            <h2 className="text-4xl font-semibold text-dark mb-6">
              Issyk-Kul 4-Day Yoga Retreat <br />
              <span className="text-2xl font-semibold">
                Retreat Description
              </span>
            </h2>
            <p className="text-2xl text-dar2k mb-4">
              Join us for a rejuvenating 4-day yoga retreat on the stunning
              shores of Issyk-Kul, the pearl of Central Asia. This retreat
              offers an immersive experience into various styles of yoga and
              breathing techniques, making it perfect for practitioners of all
              levels. Whether you are a seasoned yogi or a curious beginner,
              this retreat will help you deepen your practice or introduce you
              to the transformative world of yoga.
            </p>
            <p className="text-2xl text-dar2k mb-4">
              Your guide for this journey is Anna Ustinova, 500 YTT Yoga
              Alliance Certified yoga teacher and facilitator who will lead you
              through the practices and ensure a profound and enriching
              experience.
            </p>
            <button className="bg-primary text-white py-3 px-6 rounded-full hover:bg-secondary transition duration-300">
              Узнать больше
            </button>
          </div>
          <div className="flex-1">
            <img
              src={img8}
              alt="Иссык-Куль"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <section className="container flex flex-col items-center gap-16 mx-auto my-16 p-12 bg-gray-100 shadow-lg">
        <h1 className="text-center text-4xl font-semibold">Schedule</h1>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-start gap-3 p-6 bg-white shadow-main">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Day 1</h2>
            <p className="text-2xl text-gra2y-600 mb-6 font-medium">
              - 8:00 - Departure from Bishkek <br />
              - 12:00 - Arrival & Check-in <br />
              - 13:00 - Lunch <br />
              - 14:00 - Free Time <br />- 17:30 - Opening Ceremony <br></br> (60
              min) <br />
              - 19:00 - Dinner <br />- 20:30 - Yoga Nidra <br></br> (60 min)
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 p-6 bg-white shadow-main">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Day 2</h2>
            <p className="text-2xl text-gra2y-600 mb-6 font-medium">
              - 8:00 - Gentle Vinyasa Yoga & Pranayama <br></br>(60 min)
              <br />
              - 9:30 - Breakfast
              <br />
              - 10:00 - Free Time
              <br />
              - 13:00 - Lunch
              <br />- 16:00 - Yin Yoga <br></br> (60 min)
              <br />
              - 18:00 - Dinner
              <br />- 19:00 - Sunset Meditation & Sharing Circle <br></br> (60
              min)
              <br />
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 p-6 bg-white shadow-main">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Day 3</h2>
            <p className="text-2xl text-gra2y-600 mb-6 font-medium">
              - 5:30 - Sunrise Meditation <br></br> (45 min) <br />- 7:00 -
              Power Vinyasa <br></br> (60 min) <br />
              - 9:00 - Breakfast <br />
              - 10:00 - Free Time <br />
              - 13:00 - Lunch <br />- 18:00 - Evening Hatha Yoga & Pranayama{" "}
              <br></br>(60 min) <br />
              - 19:00 - Dinner <br />
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 p-6 bg-white shadow-main">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Day 4</h2>
            <p className="text-2xl text-gra2y-600 mb-6 font-medium">
              - 5:30 - Sunrise Meditation <br></br>(45 min)
              <br />- 7:00 - Morning Hatha & Pranayama <br></br>(60 min)
              <br />
              - 9:00 - Breakfast
              <br />
              - 12:00 - Check-Out
              <br />
            </p>
          </div>
        </div>
      </section>
      <section className="retreat-overview bg-light-gray p-20">
        <h1 className="text-center text-5xl font-semibold mb-20">
          Session Descriptions
        </h1>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="ml-10">
            <h2 className="text-4xl font-semibold text-dark mb-6">
              Day 1: Opening Ceremony
            </h2>
            <p className="text-2xl mb-4" style={{ lineHeight: "35px" }}>
              2 Kick off our retreat with a heartwarming gathering where
              participants get to know each other, share their intentions, and
              engage in mandala making, meditation, and tea.
            </p>
          </div>
          <div className="ml-0 md:ml-10">
            <img src={img} alt="Иссык-Куль" className="shadow-lg" />
          </div>
        </div>
      </section>
      <section className="retreat-overview bg-light-gray py-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-8">
          <div className="ml-0 md:ml-10">
            <img
              src={img2}
              alt="Иссык-Куль"
              className="shadow-lg hidden lg:block"
            />
          </div>
          <div className="ml-10">
            <h2 className="text-4xl font-semibold text-dark mb-6">Day 2:</h2>
            <p
              className="text-2xl text-dar2k mb-4"
              style={{ lineHeight: "35px" }}
            >
              - Gentle Vinyasa Yoga & Pranayama: Start your morning with a
              gentle yoga flow, beginning with sun salutations and gradually
              moving through poses to establish a body-mind-breath connection.
              Followed by pranayama, where several breathing techniques will be
              introduced.<br></br> - Yin Yoga: A slow-paced style where poses
              are held for 1-5 minutes, designed to increase circulation and
              improve flexibility by targeting connective tissues.<br></br> -
              Sunset Meditation: Gather at sunset to meditate to the sounds and
              sights of nature, releasing anything that no longer serves us.
            </p>
          </div>
          <div className="ml-0 md:ml-10">
            <img
              src={img2}
              alt="Иссык-Куль"
              className="shadow-lg lg:hidden block"
            />
          </div>
        </div>
      </section>
      <section className=" bg-light-gray py-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-8">
          <div className="ml-10">
            <h2 className="text-4xl font-semibold text-dark mb-6">Day 3:</h2>
            <p
              className="text-2xl text-dar2k mb-4"
              style={{ lineHeight: "35px" }}
            >
              - Power Yoga: Energize with a dynamic practice focusing on core,
              endurance, and balance, followed by a long savasana and
              relaxation. <br></br>- Yoga Nidra: Experience deep relaxation
              through guided meditation, also known as "yogic sleep", helping
              your body find its natural balance. <br></br>- Evening Hatha Yoga
              & Pranayama: Explore Hatha Yoga, focusing on balancing opposing
              energies within the body through longer-held poses and various
              pranayama practices.
            </p>
          </div>
          <div className=" ml-0 md:ml-10">
            <img src={img3} alt="Иссык-Куль" className="shadow-lg" />
          </div>
        </div>
      </section>
      <section className="retreat-overview bg-light-gray py-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-8">
          <div className="ml-0 md:ml-10">
            <img
              src={img4}
              alt="Иссык-Куль"
              className="shadow-lg hidden lg:block"
            />
          </div>
          <div className="ml-10">
            <h2 className="text-4xl font-semibold text-dark mb-6">Day 4:</h2>
            <p
              className="text-2xl text-dar2k mb-4"
              style={{ lineHeight: "35px" }}
            >
              - Sunrise Meditation: Engage in sun gazing and chakra sound
              meditation to activate energy centers and experience a full-body
              energy flow. <br></br>- Morning Hatha & Pranayama: Conclude with a
              practice that includes sun salutations, standing balances, and
              twists, along with Fire Breath, Lion’s Breath, and Bhramari
              pranayama to boost your immune system and awaken your body.
            </p>
          </div>
          <div className="ml-0 md:ml-10">
            <img
              src={img4}
              alt="Иссык-Куль"
              className="shadow-lg lg:hidden block"
            />
          </div>
        </div>
      </section>
      <section className="retreat-overview bg-[#5f728e] max-lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full flex justify-center">
            <img
              src={img5}
              alt="instructor"
              className="w-40 lg:hidden block rounded-full "
            />
          </div>
          <div className="flex-1 px-6 md:px-10 lg:px-20 mb-6 lg:mb-0">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center text-slate-200 mb-4 lg:mb-6 italic">
              About the Instructor:
            </h2>
            <p className="text-base md:text-2xl lg:text-2xl text-center text-slate-200 lg:w-[40vw] italic">
              "Meet Anna Ustinova, 500 YTT Yoga Alliance certified yoga
              instructor with over a decade of experience. Anna’s teaching
              blends traditional practices with modern techniques, making yoga
              accessible and enjoyable for everyone. Her serene approach and
              expertise ensure a transformative experience for all
              participants."
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <img
              src={img5}
              alt="instructor"
              className="w-full lg:w-auto hidden lg:block"
            />
          </div>
        </div>
      </section>
      <div className="flex item-center p-10 gap-5">
        <div>
          {" "}
          <img
            src={img9}
            alt="Иссык-Куль"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
        <div>
          {" "}
          <img
            src={img10}
            alt="Иссык-Куль"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </div>
      <section className="py-20">
        <h1 className=" text-center font-semibold text-4xl">Testimonials</h1>
        <div className="retreat-overview bg-[#5f728e] mt-5  px-10 pb-10">
          <Slider {...settings}>
            <div className="px-10 max-sm:px-2 py-10">
              <div className="w-full ">
                <p className="italic font-sans text-2xl text-slate-200">
                  “Anna’s classes are friendly and suitable for all levels, as a
                  coach she can find approach for everyone. Many years of yoga
                  practising made her an expert in stretching. Classes with Anna
                  will help you feel your body recharged and recovered.” - Myk
                </p>
              </div>
            </div>
            <div className="w-full mt-10">
              <p className="italic font-sans text-2xl text-slate-200">
                “It is with great pleasure that I recommend Anna as a yoga
                instructor. Anna brings a unique combination of agility,
                inspiration, and time management skills to her classes. Her own
                physical agility is both impressive and motivating, but it's her
                ability to translate that skill into clear and impactful
                instruction that truly sets her apart. She creates a supportive
                environment that challenges students to improve while honoring
                their individual limitations. In addition to her teaching
                skills, Anna has also instilled valuable lessons in me about
                being a good student. I am grateful for the positive impact Anna
                has had on my yoga practice and my overall well-being.” – Usama
              </p>
            </div>
            <div className="px-10 max-sm:px-2 py-10">
              <div className="w-full ">
                <p className="italic font-sans text-2xl text-slate-200">
                  “Thank you for guiding me into caring for my body and putting
                  my health first. You changed the direction of my life choices
                  in many ways and I will be forever grateful for having met you
                  and gained so much knowledge from you ❤️❤️ You are an amazing
                  person and an amazing teacher ☺️” – Kanar
                </p>
              </div>
            </div>
            <div className="w-full mt-10">
              <p className="italic font-sans text-2xl text-slate-200">
                “I really appreciate Anna’s effort in encouraging and
                recognizing me as special student of the yoga studio I attended
                for the past year and a half. She created safe space for the
                seekers of healing with her effort and energy.” – Najat
              </p>
            </div>
            <div className="px-10 max-sm:px-2 py-10">
              <div className="w-full ">
                <p className="italic font-sans text-2xl text-slate-200">
                  "Anna is a fantastic yoga instructor who truly cares about her
                  students' progress. Her classes are always filled with
                  positive energy, making them enjoyable and effective. She has
                  a unique way of encouraging and motivating us to keep going,
                  no matter our skill level." — Natalia.
                </p>
              </div>
            </div>
            <div className="w-full mt-10">
              <p className="italic font-sans text-2xl text-slate-200">
                "Joining Anna's yoga class was the best decision I made for my
                health. She brings a great balance of professionalism and fun to
                every session. Her energy is uplifting, and she always motivates
                us to push our limits safely. Thanks to Anna, I have developed a
                strong and sustainable yoga practice." – Misa
              </p>
            </div>
            <div className="py-10 max-sm:px-2 ">
              <div className="w-full">
                <p className="italic font-sans text-2xl text-slate-200">
                  "Anna's yoga classes are the highlight of my week. Her
                  enthusiasm and dedication inspire everyone in the room. She's
                  not only professional and knowledgeable but also incredibly
                  supportive. Anna's motivation has kept me consistent with my
                  practice, and I can see the benefits in both my physical and
                  mental well-being." — Diana
                </p>
              </div>
            </div>
            <div className="w-full mt-10">
              <p className="italic font-sans text-2xl text-slate-200">
                "I've been attending Anna's classes for over a year now, and I
                can't recommend her enough. She is an amazing teacher who knows
                how to connect with her students. Her positive energy is
                contagious, and she always finds a way to make the classes fun
                while keeping them professional." — Peter
              </p>
            </div>
            <div className="px-10 max-sm:px-2  md:px-20 pt-20">
              <div className="w-full -mt-10">
                <p className="italic font-sans text-2xl text-slate-200">
                  "Anna's yoga classes have transformed my practice. Her great
                  energy, soothing voice, and detailed alignment cues make every
                  session enjoyable and effective." - Abdullah
                </p>
              </div>
            </div>
            <div className="w-full mt-10">
              <p className="italic font-sans text-2xl text-slate-200">
                "Anna truly cares about her students' progress. I started as a
                beginner and her encouragement, clear instructions, and patience
                have significantly improved my strength and stress levels. I
                love yoga now thanks to her." — Carolina
              </p>
            </div>
          </Slider>
        </div>
      </section>
      <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-16">
          <h1 className="text-4xl font-semibold ">
            What makes our retreat stand out?
          </h1>
          <div className="grid w-full grid-cols-3 grid-rows-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-center">
            <div className="flex flex-col items-start gap-3 px-8 py-10 bg-white shadow-main">
              <p className="text-[38px] h-[38px]">
                <ion-icon name="bonfire-outline"></ion-icon>
              </p>
              <p className="text-[20px] font-semibold ">Accommodation:</p>
              <p className="text-[16px] ">
                Relax in comfortable accommodations shared comfortable
                dormitories for 2 persons, all designed to provide a peaceful
                and restful stay.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 px-8 py-10 bg-white shadow-main">
              <p className="text-[38px] h-[38px]">
                <ion-icon name="nutrition-outline"></ion-icon>
              </p>
              <p className="text-[20px] font-semibold ">Dining:</p>
              <p className="text-[16px] ">
                Enjoy delicious, meals made with fresh, local ingredients.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 px-8 py-10 bg-white shadow-main">
              <p className="text-[38px] h-[38px]">
                <ion-icon name="flower-outline"></ion-icon>
              </p>
              <p className="text-[20px] font-semibold ">
                Activities and Excursions:
              </p>
              <p className="text-[16px] ">
                Beyond yoga, immerse yourself in the local culture and adventure
                with options such as swimming and exploring the surrounding
                area.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 px-8 py-10 shadow-main">
              <p className="text-[38px] h-[38px]">
                <ion-icon name="cash-outline"></ion-icon>
              </p>
              <p className="text-[20px] font-semibold ">
                Pricing and Packages:
              </p>
              <p className="text-[16px] font-medium">
                - Early Bird Special: <br></br>15900 KG SOMS <br></br>(Book by
                July 25)<br></br> - Regular Price: <br></br>18200 KG SOMS{" "}
                <br></br>- Included: Accommodation, meals (breakfast, lunch,
                dinner), all yoga sessions, transportation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-20">
        <div
          className="relative w-full"
          style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/2NnNdbAi3Yg?si=KApJvKUx7vLIsWs_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
