import React from "react";
import "./Online-Course.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../img/online-course/01.webp";
import img2 from "../../img/online-course/02.webp";
import img3 from "../../img/online-course/03.webp";
import img4 from "../../img/online-course/04.webp";
import img5 from "../../img/online-course/05.webp";
import img6 from "../../img/online-course/06.webp";
import img7 from "../../img/online-course/07.webp";
import img8 from "../../img/online-course/08.webp";
import img9 from "../../img/online-course/09.webp";
import img10 from "../../img/online-course/10.webp";
import img11 from "../../img/online-course/11.webp";
import img12 from "../../img/online-course/12.webp";
import img13 from "../../img/online-course/13.webp";
import img14 from "../../img/online-course/14.webp";
import img15 from "../../img/online-course/15.webp";

const OnlineCourse = () => {
    const ListCard1 = [
        {
            img: [img1],
            tittle: "Marketing",
            textbody: "Developing Products From Idea to Market Leader",
        },
        {
            img: [img2],
            tittle: "Finance Planning",
            textbody: "lorem kolaek",
        },
        {
            img: [img3],
            tittle: "leadership",
            textbody: "lorem kolaek",
        },
        {
            img: [img4],
            tittle: "Project Coordinaat",
            textbody: "lorem kolaek",
        },
        {
            img: [img5],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
        {
            img: [img6],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
        {
            img: [img7],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
        {
            img: [img8],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
    ];
    const ListCard2 = [
        {
            img: [img9],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
        {
            img: [img10],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
        {
            img: [img11],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
        {
            img: [img12],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
        {
            img: [img13],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
        {
            img: [img14],
            tittle: "lorem kole adajd",
            textbody: "lorem kolaek",
        },
        {
            img: [img15],
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
        <div className="container sectin-online-course  py-5">
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

            <div className="section-news">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className="container"
                >
                    {ListCard1.map((Item, Index) => {
                        return (
                            <div className="col-lg-11 mx-3" key={Index}>
                                <div className="card">
                                    <img
                                        className="img-fluid"
                                        src={Item.img}
                                        alt=""
                                    />
                                    <div className="text-tittle px-3 m-2 mx-0">
                                        {Item.tittle}
                                    </div>
                                    <div className="text-body px-3 mb-2">
                                        {Item.textbody}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <div className="section-news mt-4">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className="container"
                >
                    {ListCard2.map((Item, Index) => {
                        return (
                            <div className="col-lg-11 mx-3" key={Index}>
                                <div className="card">
                                    <img
                                        className="img-fluid"
                                        src={Item.img}
                                        alt=""
                                    />
                                    <div className="text-tittle  px-3 m-2 mx-0">
                                        {Item.tittle}
                                    </div>
                                    <div className="text-body px-3 mb-2">
                                        {Item.textbody}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
};

export default OnlineCourse;
