import React from "react";
interface CardBlogPropsType {
  label?: string;
  title?: string;
  desc?: string;
  avtWriter?: string;
  nameWriter?: string;
  dateStartBlog?: string;
  imgBlog?: string;
  type?: "aside";
}
function CardBlog(props: CardBlogPropsType) {

  const {
    label,
    title,
    desc,
    avtWriter,
    nameWriter,
    dateStartBlog,
    imgBlog,
    type,
  } = props;
  return (
    <div
      className="card_blog flex gap-[2rem] justify-between"
      style={type ? { flexWrap: "wrap-reverse" } : { flexWrap: "wrap" }}
    >
      <div
        className="card_blog--content flex flex-col justify-between"
        style={type && { width: "100%" }}
      >
        <div>
          {label && <div className="content_label">{label}</div>}
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        <span className="flex gap-3 items-center content_others ">
          <div className="flex items-center gap-3">
            <img className="content_others--avt" src={avtWriter} alt="" />
            <span className="content_others--name">{nameWriter}</span>
          </div>
          <span className="content_others--date">{dateStartBlog} </span>
        </span>
      </div>
      <div
        className={` ${
          type ? "card_blog--imgBlog_aside" : "card_blog--imgBlog"
        }`}
      >
        <img src={imgBlog} alt="" />
      </div>
    </div>
  );
}

export default React.memo(CardBlog);
