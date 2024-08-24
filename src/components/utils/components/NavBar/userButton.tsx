import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Define the async logout function
const handleLogOut = async () => {
  await axios.post("http://localhost:8080/logOut", {}, { withCredentials: true });
};

export function UserButton() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: handleLogOut,
    onSuccess: () => {
      toast.success("User has been logged out Successfully");
      navigate("/auth/logIn");
    },
    onError: (err) => {
      toast.error("User has been logged out ");
      console.error(err);
    }
  });

  // Wrap the mutate function to match the MouseEventHandler type
  const handleLogoutClick = () => {
    mutation.mutate();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>DK</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogoutClick}>LogOut</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
