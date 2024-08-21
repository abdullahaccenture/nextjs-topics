export default function DocsFeatures({
  params,
  searchParams,
}: {
  params: {
    slug: string[];
  };
  searchParams: Object;
}) {
  console.log(params);
  console.log(searchParams);
  return <div>docs DocsFeatures</div>;
}
