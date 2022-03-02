import React from "react";
import "./content-training-coaching.scss";
import img1 from "../../img/Icon-training/01.svg";
import img2 from "../../img/Icon-training/02.svg";
import img3 from "../../img/Icon-training/03.svg";
import img4 from "../../img/Icon-training/04.svg";
import img5 from "../../img/Icon-training/05.svg";
import img6 from "../../img/Icon-training/06.svg";

const ContentTraining = () => {
    const ListItem = [
        {
            img: [img1],
            title: "Coaching",
            textbody:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente impedit aliquam velit adipisci corporis.",
        },
        {
            img: [img2],
            title: "Assesment",
            textbody:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente impedit aliquam velit adipisci corporis.",
        },
        {
            img: [img3],
            title: "Team Training",
            textbody:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente impedit aliquam velit adipisci corporis.",
        },
        {
            img: [img4],
            title: "Newt Certification",
            textbody:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente impedit aliquam velit adipisci corporis.",
        },
        {
            img: [img5],
            title: "Image Consulting",
            textbody:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente impedit aliquam velit adipisci corporis.",
        },
        {
            img: [img6],
            title: "Design Sprints",
            textbody:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente impedit aliquam velit adipisci corporis.",
        },
    ];
    return (
        <div className="section-Content-Training container   py-5">
            <div className="section-tittle mb-5">
                <div className="text-center text mb-5">
                    We Provide <span> Training & Coaching</span> Services That
                    Will Boost Your Productivity
                </div>
            </div>
            <div className="section-training-content">
                <div className="row">
                    {ListItem.map((Item, index) => {
                        return (
                            <div
                                className="col-lg-4 d-block text-center"
                                key={index}
                            >
                                <img className="img-fluid" src={Item.img} alt="" />
                                <h4 className="mb-2">{Item.title}</h4>
                                <a href=" ">Lorem ipsum dolor sit amet.</a>
                                <p className="mt-4">{Item.textbody}</p>

                                <button className="btn mb-2 ">
                                    {" "}
                                    Read More
                                    <i class="px-2 fas fa-long-arrow-alt-right"></i>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ContentTraining;
