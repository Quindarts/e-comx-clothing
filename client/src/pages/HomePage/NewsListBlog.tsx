import React from "react";
import { BLOG_ASIDE, BLOG_LIST } from "utils/constants";
import CardBlog from "components/UI/CardBlog";
import Button from "components/UI/Button";
interface NewsLisBlogPropsType {
    title?: boolean;
    background?: boolean;
}
function NewsListBlog(props: NewsLisBlogPropsType) {
    const { title, background } = props;
    return (
        <div style={ background ?{ background: "#f7f7f9" }:{ background: "" }} className="newsBlogListMain flex flex-col justify-center items-center">
            {title && <div className="title_homepage">
                <h2>
                    The latest news blog.
                    <span> From the Ciseco blog</span>
                </h2>
            </div>}

            <div className="newsBlogListMain_container flex flex-wrap justify-center gap-[3rem]">

                <div className="aside">
                    <CardBlog
                        title={BLOG_ASIDE.title}
                        desc={BLOG_ASIDE.desc}
                        avtWriter={BLOG_ASIDE.avtWriter}
                        nameWriter={BLOG_ASIDE.nameWriter}
                        dateStartBlog={BLOG_ASIDE.dateStartBlog}
                        imgBlog={BLOG_ASIDE.imgBlog}
                        type="aside"
                    />
                </div>

                <div className="section mt-[1rem]">
                    {BLOG_LIST.map((item: any, key: number) => (
                        <CardBlog
                            key={key}
                            title={item.title}
                            desc={item.desc}
                            avtWriter={item.avtWriter}
                            nameWriter={item.nameWriter}
                            dateStartBlog={item.dateStartBlog}
                            imgBlog={item.imgBlog}
                        />
                    ))}
                </div>

            </div>
            <Button className="w-[23rem]" variant="contain" color="white">
                Show all blog articles
            </Button>
        </div>
    );
}

export default React.memo(NewsListBlog);
