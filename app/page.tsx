import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Downloads } from "@/components/Downloads";
import { Teammates } from "@/components/Teammates";
import { ManyBots } from "@/components/ManyBots";
import { Features } from "@/components/Features";
import { BotJobs } from "@/components/BotJobs";
import { Schedules } from "@/components/Schedules";
import { HowItWorks } from "@/components/HowItWorks";
import { Partners } from "@/components/Partners";
import { Pricing } from "@/components/Pricing";
import { Faq, FinalCta, Footer } from "@/components/Closing";
import { getDownloads } from "@/lib/release";

export const revalidate = 3600;

export default async function Home() {
  const downloads = await getDownloads();
  return (
    <>
      <Nav />
      <main id="top">
        <Hero downloads={downloads} />
        <Downloads downloads={downloads} />
        <Teammates />
        <ManyBots />
        <Features />
        <BotJobs />
        <Schedules />
        <HowItWorks />
        <Partners />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
