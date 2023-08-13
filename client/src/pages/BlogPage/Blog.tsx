import { Pagination, Stack } from "@mui/material";
import CardBlog from "components/UI/CardBlog";
import NewsListBlog from "pages/HomePage/NewsListBlog";
import React from "react";
import { BLOG_LIST } from "utils/constants";

function Blog() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div className="blog w-full">
      <div className="blog_new mt-[5rem]">
        <NewsListBlog />
      </div>
      <div className="px-[1.6rem]">
        <div className="blog_ADS text-[6rem] text-center text-white bg-[#fecaca] py-[5rem] mb-[5rem]">
          A . D . S
        </div>
        <div className="blog_list">
          <h1 className="text-[4.6rem] text-black font-bold">
            Latest Articles 🎈
          </h1>
          <div className="blog_list--detail mt-[3rem]">
            <Stack spacing={2}>
              <h1 className="text-[2rem]">Demo Page: {page}</h1>
              <div className="">
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
              <Pagination count={4} page={page} onChange={handleChange} />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
