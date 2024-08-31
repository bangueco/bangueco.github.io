import Introduction from "@/components/Landing/Introduction";
import Links from "@/components/Landing/Links";

export default function Home() {
  return (
    <section className="h-screen flex flex-col gap-5 justify-center items-center">
      <Introduction />
      <Links />
    </section>
  );
}
