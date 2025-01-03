import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ChangeEventHandler, KeyboardEventHandler } from "react";

export function SearchInput({ value, onChange, onKeyDown, ...props }:{value:string, onChange:ChangeEventHandler<HTMLInputElement>, onKeyDown:KeyboardEventHandler<HTMLInputElement>}) {
  return (
    <div className="relative">
      <Search className="absolute w-5 h-5 text-gray-500 -translate-y-1/2 left-2 top-1/2 dark:text-gray-400" />
      <Input
        type="search"
        className={`pl-10 bg-white h-10 rounded-[12px]`}
        placeholder="Search..."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...props}
      />
    </div>
  );
}
