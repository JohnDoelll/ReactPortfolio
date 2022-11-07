import React from "react";
import "./testimonials.css";
import AVTR1 from "../assets/avatar1.jpg";
import AVTR2 from "../assets/avatar2.jpg";
import AVTR3 from "../assets/avatar3.jpg";
import AVTR4 from "../assets/avatar4.jpg";
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const date=[
  {
    avatar:AVTR1,
    name:'Xumora Shodmonova',
    review:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
    suscipit exercitationem, laborum vitae, sed doloribus mollitia
    voluptatem harum ducimus dolores quidem ipsa sint sapiente
    consectetur? Autem itaque nemo maxime hic.`
  },
  {
    avatar:AVTR2,
    name:'Sardor Shodmonov',
    review:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
    suscipit exercitationem, laborum vitae, sed doloribus mollitia
    voluptatem harum ducimus dolores quidem ipsa sint sapiente
    consectetur? Autem itaque nemo maxime hic.`
  },
  {
    avatar:AVTR3,
    name:'Eldor Shodmonov',
    review:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
    suscipit exercitationem, laborum vitae, sed doloribus mollitia
    voluptatem harum ducimus dolores quidem ipsa sint sapiente
    consectetur? Autem itaque nemo maxime hic.`
  },
  {
    avatar:AVTR4,
    name:'Mohinur Rakhimova',
    review:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
    suscipit exercitationem, laborum vitae, sed doloribus mollitia
    voluptatem harum ducimus dolores quidem ipsa sint sapiente
    consectetur? Autem itaque nemo maxime hic.`
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {
          date.map(({avatar,name,review},index)=> <SwiperSlide key={index} className="testimonials">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">{review}</small>
        </SwiperSlide> )
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
