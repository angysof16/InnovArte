import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const RemembranzasPage = () => {
  return (
    <>
      <h1 className="text-center pt-10 pb-16 font-xanh font-semibold text-8xl">
        Remembranzas
      </h1>

      <div className=" ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="fixed">
            
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/1.jpg?alt=media&token=2de7e6d3-79a7-4888-b5ba-495423d5be30"
                alt="image slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/2.jpg?alt=media&token=a8e2c694-ddfb-477f-8a1f-f2d79558e668"
                alt="image slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/3.jpg?alt=media&token=a3305efc-6fc9-42d9-9c1d-c84ae687b418"
                alt="image slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/4.jpg?alt=media&token=af6bf9ad-4ad5-40ee-8648-973a77f0d944"
                alt="image slide 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/5.jpg?alt=media&token=81a98ccf-c791-48ce-8366-d843dc8a6838"
                alt="image slide 5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/6.jpg?alt=media&token=a3577418-b661-4b11-a29f-c76cfd4ee6bc"
                alt="image slide 6"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/7.jpg?alt=media&token=3f11aa38-00cd-4e41-9d38-b237f9275a49"
                alt="image slide 7"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/8.jpg?alt=media&token=c9e5e5c6-3307-457e-836d-ca867a4cdd97"
                alt="image slide 8"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/9.jpg?alt=media&token=b3a6d65f-ae2d-4ff3-959e-38c16b412f4b"
                alt="image slide 9"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/10.jpg?alt=media&token=12ab1a06-aa5a-4710-82fe-115d15429b2d"
                alt="image slide 10"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/11.jpg?alt=media&token=0fe1ff19-034c-4dab-a8e1-dd41dfcc50d6"
                alt="image slide 11"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/12.jpg?alt=media&token=23e84b86-6b53-4575-8262-f6d35f9a44c7"
                alt="image slide 12"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill w-4/6 h-auto ml-auto mr-auto"
                src="https://firebasestorage.googleapis.com/v0/b/innovarte-67544.appspot.com/o/13.jpg?alt=media&token=9c7e383e-8bbe-4dc9-b3af-355e5a5fc679"
                alt="image slide 13"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};
