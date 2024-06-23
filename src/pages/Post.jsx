import { useLocation } from "react-router-dom";

export default function Post() {
  const location = useLocation();
  const { post } = location.state || {};

  const img =
    post?.postBlocks?.find((postItem) => !!postItem["image"])?.image ?? "";

  const title = post?.title;

  const texts = post?.postBlocks?.map((postItem) =>
    postItem?.text?.map((text) => text?.plain_text)
  );

  return (
    <main className="w-full mt-14">
      <div className="flex justify-center">
        <img src={img} alt="" />
      </div>
      <div className=" text-6xl text-bold mt-5">{title}</div>
      <div className="mt-5">{texts}</div>
    </main>
  );
}
