import logoImage from "@/assets/coloured v1 white (1).svg";
import { SearchInput } from "@/components/SearchBox";

const Home = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col gap-10 px-10 md:px-20 md:gap-20">
        <img src={logoImage} alt="" className="pl-8" />
        <div>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Home;
