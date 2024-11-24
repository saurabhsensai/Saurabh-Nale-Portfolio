import Typewriter from "typewriter-effect";

const Ingredients = () => (
  <code className="h-[115px] text-center leading-loose">
    <Typewriter
      options={{ delay: 40 }}
      onInit={(typewriter) => {
       
        typewriter
          .pauseFor(2000)
          .typeString("<span class='text-blue-500'> I am professional </span>")
          .typeString("<span class='text-blue-500'>digital Swiss Army knife: </span>")
          .typeString("<br>")
          .typeString(" Making things look <span class='text-red-500'>pretty</span>")
          .typeString(" in the front, <span class='text-red-500'>logical</span>")
          .typeString("<br>")
          .typeString("in the back, and somewhat")
          .typeString("<span class='text-red-500'> intelligent</span> in between. ")
          .start();
      }}
    />
  </code>
);

export default Ingredients;
