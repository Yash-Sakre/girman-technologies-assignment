import logoImage from "@/assets/coloured v1 white (1).svg";
import { SearchInput } from "@/components/SearchBox";
import wave from "@/assets/bgimage.png";
import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (searchQuery.trim()) {
        setErrorMessage(null); // Clear any existing error
        navigate("/search", { state: { searchQuery: searchQuery.trim() } });
      } else {
        setErrorMessage("Please enter a valid search query.");
      }
    }
  };

  return (
    <div
      className="flex justify-center min-h-[80vh] mt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute bottom-0 left-0 w-full h-[75%]"
        style={{
          background:
            "linear-gradient(to top, rgba(177, 203, 255, 0.6), rgba(177, 203, 255, 0))",
        }}
      ></div>
      <div className="flex flex-col gap-10 px-10 md:px-20 md:gap-20">
        <img src={logoImage} alt="" className="pl-8" />
        <div>
          <SearchInput
            value={searchQuery}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setSearchQuery(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />
          {errorMessage && (
            <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
