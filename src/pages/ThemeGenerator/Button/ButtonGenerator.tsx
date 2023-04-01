import { useState } from "react";
import Stack from "../../../components/ui/Stack";
import Accordion from "../../../components/ui/Accordion";
import ButtonVariant from "./Variants/ButtonVariant";
import Previewer from "../Utils/Previewer";

const ButtonGenerator = () => {
  const [variantProps, setVariantProps] = useState({
    background: "#ffffff",
    color: "#000000",
    border: {
      color: "#000000",
      width: "1px",
    },
    hover: {
      background: "#ffffff",
      color: "#000000",
      border: {
        color: "#000000",
        width: "1px",
      },
    },
  });
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
        <h2 className="text-black font-bold text-2xl">Variants</h2>
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
        <h2 className="text-black font-bold text-2xl">Sizes</h2>
        <div className="grid grid-cols-2 gap-5 place-items-center">
          <Stack className="space-y-4">
            <Stack className="border-2 border-gray-400 p-4">
              <Stack>
                <label htmlFor="minWidth">Min width</label>
                <input
                  id="minWidth"
                  type="number"
                  value={sizeProps.minWidth}
                  onChange={(e) =>
                    setSizeProps({ ...sizeProps, minWidth: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <label htmlFor="minHeight">Min Height</label>
                <input
                  id="minHeight"
                  type="number"
                  value={sizeProps.minHeight}
                  onChange={(e) =>
                    setSizeProps({ ...sizeProps, minHeight: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <label htmlFor="padding">Padding</label>
                <input
                  id="padding"
                  type="number"
                  value={sizeProps.padding}
                  onChange={(e) =>
                    setSizeProps({ ...sizeProps, padding: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <label htmlFor="font_weight">Font Weight</label>
                <input
                  id="font_weight"
                  type="number"
                  value={sizeProps.fontWeight}
                  onChange={(e) =>
                    setSizeProps({ ...sizeProps, fontWeight: e.target.value })
                  }
                />
              </Stack>
            </Stack>
          </Stack>
          <Previewer>
            <button
              style={{
                background: "white",
                minWidth: `${sizeProps.minWidth}px`,
                minHeight: `${sizeProps.minHeight}px`,
                padding: `${sizeProps.padding}px`,
                fontWeight: sizeProps.fontWeight,
                fontSize: `${sizeProps.fontSize}px`,
              }}
            >
              hello world
            </button>
          </Previewer>
        </div>
      </Stack>
    </div>
  );
};

export default ButtonGenerator;
