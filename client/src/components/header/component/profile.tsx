import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
function Profile() {
  const [imageSrc, setImageSrc] = useState("https://github.com/shadcn.png");

  const handleAvatarClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = (e) => {
          const result = (e.target as FileReader).result;
          if (typeof result === 'string') {
            setImageSrc(result);
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border w-[80%] h-[80%] border-red-600 rounded-md shadow-md dark:bg-gray-900">
        <div className="flex items-center gap-4 ">
          <div className="relative">
            <Avatar onClick={handleAvatarClick}>
              <AvatarImage src={imageSrc} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <FaCamera className="absolute bottom-0 right-0 w-6 h-6 text-white bg-gray-800 rounded-full p-1" />
          </div>
          <div>
            <span className="font-semibold dark:text-white md:text-[1.6rem]">
              id:
            </span>
          </div>
        </div>
        <Separator orientation="horizontal" />
        <div>
          bjjj
        </div>


      </div>
    </div>
  )
}

export default Profile