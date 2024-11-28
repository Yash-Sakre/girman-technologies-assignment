import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchInput2({
  value,
  onChange,
  ...props
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <Search className="absolute w-5 h-5 text-gray-500 -translate-y-1/2 left-2 top-1/2 dark:text-gray-400" />
      <Input
        type="search"
        className={`pl-10 bg-white h-10 rounded-[12px]`}
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </div>
  );
}
