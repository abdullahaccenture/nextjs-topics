import Link from "next/link";

export default function Posts() {
  const projects = [
    {
      id: 1,
      name: "Project Alpha",
      description: "A cool project that does something amazing.",
      link: "/1",
    },
    {
      id: 2,
      name: "Project Beta",
      description: "Another awesome project with great features.",
      link: "#",
    },
    {
      id: 3,
      name: "Project Gamma",
      description: "An interesting project with innovative ideas.",
      link: "#",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1>Here is post list</h1>

      {projects.map((project) => (
        <Link
          href={"/posts/" + project.id.toString()}
          key={project.id}
          className="text-blue-300   block px-3 py-2 rounded-md text-sm font-medium"
        >
          {project.name} - {project.id}
        </Link>
      ))}
    </div>
  );
}
