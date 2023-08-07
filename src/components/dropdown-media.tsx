import { Facebook, Forward, Instagram, Phone } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import Link from "next/link";

interface DropdownMediaProps {
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
}

export function DropdownMedia({
  facebook,
  instagram,
  whatsapp,
}: DropdownMediaProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <Forward />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-16">
        <div className="space-y-4 text-foreground/60">
          {whatsapp && (
            <Link
              className="flex hover:text-foreground/50"
              href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
              target="_blank"
            >
              <Phone />
            </Link>
          )}

          {instagram && (
            <Link
              className="flex hover:text-foreground/50"
              href={`https://instagram.com/${instagram}`}
              target="_blank"
            >
              <Instagram />
            </Link>
          )}

          {facebook && (
            <Link
              className="flex hover:text-foreground/50"
              href={`https://www.facebook.com/${facebook}`}
              target="_blank"
            >
              <Facebook />
            </Link>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
