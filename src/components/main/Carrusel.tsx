import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';


export const Carrusel = () => {

    return (

        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className="mySwiper w-full relative"
            modules={[Navigation]}
            navigation={true}
        >
            <SwiperSlide>
                <p className="text-white italic font-lora mb-10">"This restaurant exceeded all expectations! From the moment we entered, we were greeted warmly and treated like VIPs. The menu featured a tantalizing selection of dishes, each expertly prepared and bursting with flavor. The service was impeccable, making for an unforgettable dining experience. Highly recommend!"</p>

                <p className="text-white">Dominicana Rodriguez</p>
                <p className="text-lora text-sm font-lora text-amber-500">Client of Restaurant</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="text-white italic font-lora mb-10">"What a delightful find! This restaurant offers a perfect blend of ambiance, service, and culinary excellence. The menu is a culinary journey, with each dish meticulously crafted and bursting with flavor. The staff is friendly and attentive, ensuring a memorable dining experience. Can't wait to come back!"</p>

                <p className="text-white">Juan Salinas</p>
                <p className="text-lora text-sm font-lora text-amber-500">Client of Restaurant</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="text-white italic font-lora mb-10">"An absolute gem of a restaurant! From the moment we stepped in, we were greeted with warmth and hospitality. The menu offers a tantalizing array of dishes, each a testament to culinary mastery. The ambiance is cozy and inviting, perfect for a memorable dining experience. Highly recommend!"</p>

                <p className="text-white">Shari Gonzáles</p>
                <p className="text-lora text-sm font-lora text-amber-500">Client of Restaurant</p>
            </SwiperSlide>
        </Swiper>
    )
}