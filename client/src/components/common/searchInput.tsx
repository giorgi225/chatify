"use client";
import { Search01Icon } from "hugeicons-react";
import { Loader } from "lucide-react";
import { useRef, useState } from "react";

import { useSession } from "@/providers/auth.provider";

import fetcher from "@/lib/fetcher";

import { UserType } from "@/types/types";

import UserCard from "../cards/userCard";
import { Input } from "../ui/input";


const SearchInput = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const [searchVal, setSearchVal] = useState("");
  const { refreshToken } = useSession();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchVal(value);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLoading(true);

    timeoutRef.current = setTimeout(async () => {
      if (value.trim() === "") {
        setUsers([]);
        setLoading(false);
        return;
      }

      try {
        const searchRes = await fetcher<{ users: UserType[] }>(
          `/search/users?query=${value.trim()}`
        );
        if (!searchRes.ok) {
          if (searchRes.message === "jwt expired") {
            await refreshToken();
            onSearch(e);
            return;
          }
          return;
        }
        setUsers(searchRes.data.users);
      } catch (error) {
        console.error(`error during search users: ${error}`);
        return;
      } finally {
        setLoading(false);
      }
    }, 200); // delay in ms
  };

  return (
    <div className="relative w-full max-w-[320px] z-[50]">
      <Input
        onChange={onSearch}
        value={searchVal}
        type="text"
        onFocus={() => setIsOpen(true)}
        onBlur={() => {
          setSearchVal("");
          setIsOpen(false);
        }}
        placeholder="Search users"
        className="w-full p-4 rounded-lg pr-8 bg-foreground/5 border border-foreground/5 hover:border-foreground/10 focus:border-foreground/30 transition-all"
      />
      <Search01Icon className="size-4 absolute right-3 top-1/2 -translate-y-1/2" />
      {isOpen && (
        <div className="absolute top-[115%] left-0 w-full bg-white shadow-sm border border-foreground/10  overflow-hidden rounded-lg">
          {loading ? (
            <div className="w-full flex">
              <div className="m-auto py-16 text-sm max-w-[140px] text-center items-center text-foreground/70 flex flex-col gap-1">
                <Loader className="size-6 animate-spin" />
              </div>
            </div>
          ) : users.length > 0 ? (
            <div className="flex flex-col">
              <div className="flex flex-col">
                {users.map((user, index) => (
                  <UserCard
                    key={user.id}
                    {...user}
                    length={users.length}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ) : searchVal.length > 0 ? (
            <div className="w-full flex">
              <div className="m-auto py-16 text-sm max-w-[160px] text-center items-center text-foreground/70 flex flex-col gap-1">
                <Search01Icon className="size-6" />
                <span>No matching users. Try a different search.</span>
              </div>
            </div>
          ) : (
            <div className="w-full flex">
              <div className="m-auto py-16 text-sm max-w-[140px] text-center items-center text-foreground/70 flex flex-col gap-1">
                <Search01Icon className="size-6" />
                <span>Search users by fullname or email</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
