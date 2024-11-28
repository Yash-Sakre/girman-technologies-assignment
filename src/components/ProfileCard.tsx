import { MapPin, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Person } from "@/Types/Person";
import male from "@/assets/male.avif";
import female from "@/assets/female.jpeg";
import { ProfileModal } from "./ProfileModal";
import { useState } from "react";

export default function ProfileCard({ user }: { user: Person }) {
  const [showModal, setShowModal] = useState(false)


  const isMale = [
    "Amit",
    "Sandeep",
    "Rajesh",
    "Rakesh",
    "Vikas",
    "Vikram",
    "Ravi",
    "Rohit",
    "Pankaj",
    "Rakesh",
    "Rahul",
    "Saurabh",
    "Sunil",
    "Suresh",
    "Gaurav",
    "Sameer",
    "Santosh",
    "Manish",
    "Deepak",
  ].includes(user.first_name);

  return (
    <>
   
    <Card className="w-full max-w-sm p-6 ">
      <CardContent className="p-0 space-y-8">
        <div className="space-y-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={isMale ? male : female} alt="Profile picture" />
            <AvatarFallback>{isMale ? "M" : "F"}</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold">
            {user.first_name} {user.last_name}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>{user.city}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col ">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span className="text-md">{user.contact_number}</span>
            </div>
            <p className="text-[10px] text-[#AFAFAF]">Available on phone</p>
          </div>

          <Button className="text-white bg-black hover:bg-black/90" onClick={() => setShowModal(true)}>
            Fetch Details
          </Button>
        </div>
      </CardContent>
    </Card>

    <ProfileModal 
        open={showModal}
        onOpenChange={setShowModal}
        data={user}
      />
    </>
  );
}
