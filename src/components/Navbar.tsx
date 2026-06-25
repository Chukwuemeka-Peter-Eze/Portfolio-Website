export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl">
          Chukwuemeka Peter Eze
        </h1>

        <ul className="flex gap-6">
          <li>About</li>
          <li>Projects</li>
          <li>Certifications</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}