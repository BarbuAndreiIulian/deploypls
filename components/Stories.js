import { useEffect, useState } from "react";

import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    setSuggestions(
      [...Array(20)].map(() => {
        return {
          id: faker.datatype.uuid(),
          avatar: `${faker.image.avatar()}`,
          username: `${faker.internet.userName()}`,
        };
      })
    );
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          key="mystory"
          img={session.user.image}
          username={session.user.username}
        />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
