import { Link, useLocation } from "react-router-dom"
import { UserButton } from "./userButton"
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const NavbarRoutes = () => {
    // const pathname = usePathname()
    const location = useLocation();
    const {pathname} = location;

    // console.log(pathname);

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter");
  return (
    <div className="flex gap-x-2 ml-auto">
    {
      isTeacherPage || isPlayerPage ? (
        <Link to="/">
        <Button size="sm" variant="ghost">
          <LogOut className="h-4 w-4 mr-2"/>
          Exit
        </Button>
        </Link>
      ) : (
        <Link to="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      )
    }
        <UserButton />
    </div>
  )
}

export default NavbarRoutes