import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import AuthHeader from "./authHeader";
import BackButton from "./backButton";

const CardWrapper = ({
  label,
  title,
  backButtonHref,
  backButtonLabel,
  children,
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
    <Card className="xl:w-1/4 md:w-1/2 shadow-md ">
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
    </div>
  );
};

export default CardWrapper;
