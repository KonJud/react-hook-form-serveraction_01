import SimpleForm from "@/components/SimpleForm";
import Image from "next/image";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="mb-6 text-2xl font-medium text-center">
          React Hook Forms
        </h1>
        <SimpleForm />
      </div>
    </section>
  );
}
