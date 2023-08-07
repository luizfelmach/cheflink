import Image, { StaticImageData } from "next/image";
import { ToggleTheme } from "./toggle-theme";
import { DropdownMedia } from "./dropdown-media";

interface HeaderCompanyProps {
  logo: string;
  name: string;
  description: string;
  facebook?: string;
  whatsapp?: string;
  instagram?: string;
}

export function HeaderCompany({
  logo,
  name,
  description,
  whatsapp,
  instagram,
  facebook,
}: HeaderCompanyProps) {
  return (
    <div className="h-[335px] bg-accent relative overflow-hidden">
      <div className="flex justify-between p-3">
        <ToggleTheme />
        <DropdownMedia
          facebook={facebook}
          instagram={instagram}
          whatsapp={whatsapp}
        />
      </div>
      <div className="absolute top-8 inset-x-0 rounded-full">
        <Image
          className="border-2 w-40 h-40 border-foreground rounded-full m-auto"
          alt="Company logo"
          width={200}
          height={200}
          color="#fff"
          src={logo}
        />
        <p className="text-center m-4 font-bold text-xl">{name}</p>
        <div className="flex justify-center">
          <p className="max-w-xl text-center text-sm text-foreground/50 mx-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
