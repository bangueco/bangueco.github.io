import Introduction from "@/components/Landing/Introduction";
import Links from "@/components/Landing/Links";

export default function Home() {
  return (
    <main className="h-screen">
      <section className="h-full w-full flex flex-col gap-5 justify-center items-center">
        <Introduction />
        <Links />
      </section>
    </main>
  );
}
