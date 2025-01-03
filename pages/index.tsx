import type { GetServerSideProps, NextPage } from "next";
import {
  AboutMe,
  Achievements,
  Certifications,
  Contact,
  Education,
  Footer,
  Header,
  Philantrophy,
   Projects,
  Resume,
  Skills,
  WorkExperience,
} from "sections";
import { getArticles, getDribbbleShots, getInstagramMedia } from "services";
import type { Article, DribbbleShot, InstagramMedia } from "types/Sections";

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await getArticles();
  const dribbbleShots = await getDribbbleShots();
  const instagramMedia = await getInstagramMedia();

  return { props: { articles, dribbbleShots, instagramMedia } };
};

type Props = {
  articles: Article[];
  dribbbleShots: DribbbleShot[];
  instagramMedia: InstagramMedia[];
};

const Home: NextPage<Props> = ({ articles, dribbbleShots, instagramMedia }) => (
  <div className="w-5/6 mx-auto md:container grid gap-24">
    <Header />

    <AboutMe />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <WorkExperience />
      <Education />
    </div>

    <Skills />
    <Projects />

    <div className="grid lg:grid-cols-3 gap-12">
      <Achievements />
      <Certifications />
      <Philantrophy />
    </div>

    
    

    <Resume />
    <Contact />
    <Footer />
  </div>
);

export default Home;
