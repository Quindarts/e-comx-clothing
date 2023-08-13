import React from "react";
import bg from "assets/image/aboutBG.webp";
import avt from "assets/image/avt.jpg";
const factList = [
  {
    title: "10 million",
    desc: "Articles have been public around the world (as of Sept. 30, 2021)",
  },
  {
    title: "100,000",
    desc: "Registered users account (as of Sept. 30, 2021)",
  },
  {
    title: "220+",
    desc: "Registered users account (as of Sept. 30, 2021)",
  },
];
function AboutPage() {
  return (
    <div className="about_page">
      <div className="about_page--top flex flex-wrap gap-[3rem] ">
        <div className="top_content">
          <h1 className="mb-[3rem]">👋 About Us.</h1>
          <div className="">
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content which inform,
            educate and entertain millions of people in the around the world.
          </div>
        </div>
        <div className="top_img">
          <img src={bg} alt="" />
        </div>
      </div>

      <div className="about_page--footer mt-[5rem]">
        <h1>🚀 Fast Facts </h1>
        <div className="text-[1.8rem] text-gray-500 mt-[1rem]">
          We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content
        </div>
        <div className="flex flex-wrap gap-[3rem] mt-[5rem] list_box">
          {factList.map((item, index) => (
            <div
              key={index}
              className="bg-slate-100 p-[2rem] rounded-[2rem] w-full box"
            >
              <h3 className="text-[2.8rem] font-[600]">{item.title}</h3>
              <p className="text-[1.6rem] text-gray-500 mt-[1rem]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="about_page--main mt-[6.4rem]">
        <h1>⛱ Founder</h1>
        <div className=""></div>
        <div className="flex mt-[3rem] justify-center">
          <div className="card_avt flex flex-wrap justify-center gap-[5rem]">
            <img src={avt} alt="" />
            <div className="mt-5 card_content">
              <h2 className="mb-[1rem]">Le Minh Quang</h2>
              <p>
                Co-founder and Chief Executive. We’re impartial and independent,
                and every day we create distinctive, world-class programmes and
                content.
              </p>
              <h2 className="mt-[2rem] mb-[1rem]">Inforamtion</h2>
              <ul className="">
                <li>
                  {" "}
                  <span className="text-[1.6rem] font-[500]">
                    Date of birth:
                  </span>{" "}
                  19/02/2003
                </li>
                <li>
                  <span className="text-[1.6rem] font-[500]">Phone:</span>{" "}
                  0364835692
                </li>
                <li>
                  <span className="text-[1.6rem] font-[500]">Address:</span> 118
                  Le Loi, Go Vap, Ho Chi Minh City.
                </li>
                <li>
                  <span className="text-[1.6rem] font-[500]">Email:</span>{" "}
                  lmqiuhdev@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
