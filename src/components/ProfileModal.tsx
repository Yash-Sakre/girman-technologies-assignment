import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import male from "@/assets/male.avif";
import female from "@/assets/female.jpeg";

interface ProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: {
    first_name: string;
    city: string;
    contact_number: string;
    last_name: string;
  };
}

export function ProfileModal({ open, onOpenChange, data }: ProfileModalProps) {
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
  ].includes(data.first_name);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Fetch Details</DialogTitle>
          <DialogDescription>
            Here are the details of following employee.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <p>
              <span className="font-medium">Name:</span> {data.first_name}{" "}
              {data.last_name}
            </p>
            <p>
              <span className="font-medium">Location:</span> {data.city}
            </p>
            <p>
              <span className="font-medium">Contact Number:</span>{" "}
              {data.contact_number}
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Profile Image:</p>
            <img
              src={isMale ? male : female}
              alt="Profile"
              className="rounded-lg"
              width={300}
              height={300}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
