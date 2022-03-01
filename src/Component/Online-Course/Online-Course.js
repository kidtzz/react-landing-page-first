import React from "react";
import "./Online-Course";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../img/online-course/01.webp";
import img2 from "../../img/online-course/02.webp";
import img3 from "../../img/online-course/03.webp";

const OnlineCourse = () => {
    const ListCard = [
        {
            img: [img1],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
        {
            img: [img2],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
        {
            img: [img3],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
    ];
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <div className="container Sectin-Online-Course  py-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-tittle mb-5">
                        <div className="text-start section-text mb-5">
                            On Point <span> Online Courses</span> and
                            Screencasts by Top Coaches From All Over the World
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="section-body-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tenetur necessitatibus dolores quos vero,
                            libero corporis excepturi dolorem voluptatibus
                            perferendis, id quo reprehenderit doloremque
                            accusamus, veniam enim ea architecto facere
                            assumenda.
                        </p>
                    </div>
                </div>
            </div>
            {ListCard.map((Item, Index) => {
                return (
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        key={Index}
                        className="row d-flex"
                    >
                        <div className="col-lg-3">
                            <div className="card">
                                <img
                                    className="img-fluid"
                                    src={Item.img}
                                    alt=""
                                />
                                <div className="text-tittle">{Item.tittle}</div>
                                <div className="text-body">{Item.textbody}</div>
                            </div>
                        </div>
                    </Carousel>
                );
            })}
        </div>
    );
};

export default OnlineCourse;
