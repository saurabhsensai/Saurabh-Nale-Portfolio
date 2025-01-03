import Button from "components/Button";
import ImageLink from "components/ImageLink";
import links from "data/links";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const Resume = () => (
  <div id={Section.Resume}>
    {getSectionHeading(Section.Resume)}

    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full flex-1">
        <ImageLink
          height={300}
          href={links.resume}
          src="/images/resume/resume.png"
          alt="Amruth Pillai's Resume on Print"
        />
      </div>

      <div className="flex flex-col items-start gap-8 flex-[2]">
        <div className="max-w-full prose prose-lg md:prose-2xl prose-neutral dark:prose-invert">
          <h4>
          Can't handle scrolling? Fear not, – a downloadable PDF that's easier than reading my entire website.
          </h4>
        </div>

        <div>
          <Button onClick={() => openURLInNewTab(links.resume)}>Download Resume</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
