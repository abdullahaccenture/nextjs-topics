export const generateMetadata = ({
  params,
}: {
  params: { postId: string };
}) => {
  console.log(params.postId);
  return {
    title: "this is post from  postid  " + params.postId,
  };
};
export default function PostDetail({ params }: { params: { postId: string } }) {
  return <div>Post detail + {params.postId}</div>;
}
