import Layout from "@/components/Layout";
import Hero from "@/components/section/Hero";
import WeOffer from "@/components/section/WeOffer";

export default function Home() {
  return (
    <Layout>
      <main className="">
        <Hero />
        <WeOffer/>
      </main>
    </Layout>
  );
}
