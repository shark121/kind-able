import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { FundraiserSchemaType } from "@/lib/types";
import FundraiserComponent from "../ui/fundraiserComponent";

export function DrawerComponent({ content }: { content: FundraiserSchemaType[] }) {
  return (
    <Drawer
    // open={true}
    >
      <DrawerTrigger>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        {/* {content.map((el) => (
          <div key={el.id}>
            <DrawerHeader>
              <DrawerTitle>{el.title}</DrawerTitle>
              <DrawerClose />
            </DrawerHeader>
            <DrawerDescription>{el.description}</DrawerDescription>
          </div>
        ))} */}
      </DrawerContent>
    </Drawer>
  );
}
