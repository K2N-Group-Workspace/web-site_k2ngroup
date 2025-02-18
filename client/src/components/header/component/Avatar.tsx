import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, useEffect, useRef } from "react";
import Menu from "./menu";
import { useProfileStore } from "@/components/store/authentification/Profile";

function AvatarIcon() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleAvatarClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    const { profile } = useProfileStore()
    

    return (
        <div>
            <Avatar onClick={handleAvatarClick}>
                <AvatarImage src={profile?.avatar} />
                <AvatarFallback>{profile?.name?.[0] || 'CN'}</AvatarFallback>
            </Avatar>

            {isMenuOpen && (
                <div ref={menuRef}>
                    <Menu/>
                </div>
            )}
        </div>
    )
}

export default AvatarIcon