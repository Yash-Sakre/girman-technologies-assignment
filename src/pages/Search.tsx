import ProfileCard from "@/components/ProfileCard";
import users from "@/Constants/user_list.json";
import { Person } from "@/Types/Person";
import { useLocation } from "react-router-dom";
import { SearchInput2 } from "../components/SearchInput2";
import { useEffect, useState } from "react";
import info from "@/assets/no-info.png";
const Search = () => {
  const location = useLocation();
  const initialSearchQuery = location.state?.searchQuery || "";
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [filteredUsers, setFilteredUsers] = useState<Person[]>([]);

  useEffect(() => {
    const searchParts = searchQuery.trim().toLowerCase().split(" ");

    const results = users.filter((user: Person) => {
      const firstNameMatch =
        searchParts[0] &&
        user.first_name.toLowerCase().includes(searchParts[0]);
      const lastNameMatch =
        searchParts[1] && user.last_name.toLowerCase().includes(searchParts[1]);
      const cityMatch = searchParts.some((part: string) =>
        user.city.toLowerCase().includes(part)
      );

      if (searchParts.length === 1) {
        return (
          firstNameMatch ||
          user.last_name.toLowerCase().includes(searchParts[0]) ||
          cityMatch
        );
      }

      return (firstNameMatch && lastNameMatch) || cityMatch;
    });

    setFilteredUsers(results);
  }, [searchQuery]);

  useEffect(() => {
    if (location.state?.searchQuery) {
      setSearchQuery(location.state.searchQuery);
    }
  }, [location.state?.searchQuery]);

  return (
    <div
      className={`flex flex-col items-center  ${
        filteredUsers.length === 0
          ? "py-0 justify-start md:justify-center"
          : "py-20 justify-center"
      } bg-[#D9E6FF] bg-opacity-50 h-[90vh] overflow-y-scroll`}
    >
      {
        <div className="block w-full max-w-xs py-5 md:hidden">
          <SearchInput2 value={searchQuery} onChange={setSearchQuery} />
        </div>
      }
      {filteredUsers.length > 0 && (
        <div className="grid h-full grid-cols-1 gap-10 px-5 md:px-20 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user: Person, index: number) => (
            <div key={index}>
              <ProfileCard user={user} />
            </div>
          ))}
        </div>
      )}
      <div>
        {filteredUsers.length === 0 && (
          <div className="flex flex-col items-center justify-center w-full grid-cols-1">
            <img src={info} alt="" className="w-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
