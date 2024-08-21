export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-gray-900 leading-tight mb-6">
        from: layout == Post list are
      </h1>

      <div>{children}</div>
    </div>
  );
}
