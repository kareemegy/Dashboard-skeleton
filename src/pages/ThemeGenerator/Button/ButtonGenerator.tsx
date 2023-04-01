import { useState } from "react";
import Stack from "../../../components/ui/Stack";
import Accordion from "../../../components/ui/Accordion";
import ButtonVariant from "./Variants/ButtonVariant";
import Previewer from "../Utils/Previewer";
import ButtonSize from "./Sizes/ButtonSize";

const ButtonGenerator = () => {
  const [sizeProps, setSizeProps] = useState({
    minWidth: "0",
    minHeight: "0",
    padding: "0",
    fontWeight: "400",
    fontSize: "16",
  });
  return (
    <div className="flex flex-col w-full h-full border-2 border-primary p-5 space-y-10">
      <Stack>
        <h3 className="text-black font-bold text-xl">Variants</h3>
        <Accordion>
          <Accordion.Item title="Primary">
            <ButtonVariant name="primary" />
          </Accordion.Item>
          <Accordion.Item title="Secondary">
            <ButtonVariant name="secondary" />
          </Accordion.Item>
          <Accordion.Item title="Tertiary">
            <ButtonVariant name="tertiary" />
          </Accordion.Item>
          <Accordion.Item title="Quad">
            <ButtonVariant name="quad" />
          </Accordion.Item>
        </Accordion>
      </Stack>
      <Stack>
        <h3 className="text-black font-bold text-xl">Sizes</h3>
        <Accordion>
          <Accordion.Item title="X-large">
            <ButtonSize name="xl" />
          </Accordion.Item>
          <Accordion.Item title="Large">
            <ButtonSize name="lg" />
          </Accordion.Item>
          <Accordion.Item title="Medium">
            <ButtonSize name="md" />
          </Accordion.Item>
          <Accordion.Item title="Small">
            <ButtonSize name="sm" />
          </Accordion.Item>
        </Accordion>
      </Stack>
    </div>
  );
};

export default ButtonGenerator;
