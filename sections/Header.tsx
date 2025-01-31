import Ingredients from "components/Header/Ingredients";
import Profiles from "components/Header/Profiles";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import Image from "next/image";

const Header: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div id="header" className="h-screen grid place-items-center place-content-center gap-4">
      {/* Photo Wall */}
     

      {/* Logo */}
      <Image src="/images/SN.png" width={500} height={140} alt="Saurabh Nale" priority />

      {/* Text Version */}
      
      {/* Ingredients */}
      <Ingredients />

      {/* Social Profiles */}
      <Profiles />
    </div>
  );
};

export default Header;
