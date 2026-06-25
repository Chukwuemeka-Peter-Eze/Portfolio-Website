export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-6xl font-bold">
        Chukwuemeka Peter Eze
      </h1>

      <h2 className="text-2xl mt-4">
        Cloud Security & DevOps Engineer
      </h2>

      <p className="mt-6 max-w-3xl text-lg">
        Building scalable cloud infrastructure,
        automating deployments, securing workloads,
        and designing enterprise-grade solutions with
        AWS, Kubernetes, Terraform, and DevOps practices.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          View Projects
        </button>

        <button className="border px-6 py-3 rounded-lg">
          Download Resume
        </button>
      </div>
    </section>
  );
}