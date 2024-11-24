import Image from "next/image";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const AboutMe = () => (
  <div id={Section.AboutMe}>
    

    <div className="grid md:grid-cols-4 gap-12">
      <div className="relative col-span-1 hidden md:block">
        <Image
          fill
          alt="Selfie Boy"
          src="/images/about-me/boy.gif"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="col-span-3 text-xl max-w-full prose prose-sm md:prose-base prose-neutral dark:prose-invert">
        <p>Hey there!</p>

        <p>
        I&apos;m Saurabh Nale who&apos;s totally in love with coding, building cool stuff, and diving deep into the world of technology. 
        As a recent computer science grad, I&apos;m all about creating awesome web applications and playing around with machine learning – basically, 
        making computers do some pretty amazing things.
        </p>

        <p>
        My coding journey is a mix of building full-stack web apps, creating mobile solutions, 
        and exploring the exciting world of AI and research. I&apos;ve worked on everything from warehouse management systems 
        to drawing apps, and I&apos;m always eager to learn something new. Whether it&apos;s building a website that looks great and works
         smoothly or training an AI to solve real-world problems, I&apos;m all in.
        </p>

        <p>
        My skills? I&apos;m comfortable jumping between Python, Java, JavaScript, and a bunch of other technologies. Front-end,
         back-end, machine learning – I love mixing it all up. I'm that guy who gets excited about turning complex ideas into working software, 
         whether it&apos;s for a startup, a research project, or just a fun personal challenge.
        </p>

        <p>
        What drives me? The chance to create something that can make a difference, learn 
        something new every day, and keep pushing the boundaries of what technology can do. I&apos;m not just looking for 
        a job – I&apos;m looking for opportunities to grow, innovate, and make an impact. "
        </p>

        <p>
          If you like what you see, head over to the <a href="#contact">contact section</a> below and
          send me a text. I would love to hear from you!
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
