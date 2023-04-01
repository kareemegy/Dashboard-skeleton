import Stack from "../../../../components/ui/Stack/Stack";
import { Sizes, useThemeGenerator } from "../../ThemeGeneratorContext";
import Previewer from "../../Utils/Previewer";

const ButtonSize = ({ name }: { name: Sizes }) => {
  const { sizes, setSizes, updateGlobalVariable } = useThemeGenerator();
  const sizeProps = sizes[name];
  const setSizeProps = (props: typeof sizeProps) => {
    setSizes({
      ...sizes,
      [name]: props,
    });
  };

  return (
    <div className="grid grid-cols-2 gap-5 place-items-center">
      <Stack className="space-y-4">
        <Stack className="border-2 border-gray-400 p-4">
          <Stack>
            <label htmlFor="minWidth">Min width</label>
            <input
              id="minWidth"
              type="number"
              value={sizeProps.minWidth}
              onChange={(e) => {
                updateGlobalVariable(
                  `button-${name}-min-width`,
                  e.target.value
                );
                setSizeProps({ ...sizeProps, minWidth: e.target.value });
              }}
            />
          </Stack>
          <Stack>
            <label htmlFor="minHeight">Min Height</label>
            <input
              id="minHeight"
              type="number"
              value={sizeProps.minHeight}
              onChange={(e) => {
                updateGlobalVariable(
                  `button-${name}-min-height`,
                  e.target.value
                );
                setSizeProps({ ...sizeProps, minHeight: e.target.value });
              }}
            />
          </Stack>
          <div className="flex space-x-5">
            <Stack>
              <label htmlFor="paddingX">PaddingX</label>
              <input
                id="paddingX"
                type="number"
                value={sizeProps.paddingX}
                onChange={(e) => {
                  updateGlobalVariable(
                    `button-${name}-padding-x`,
                    e.target.value
                  );
                  setSizeProps({ ...sizeProps, paddingX: e.target.value });
                }}
              />
            </Stack>
            <Stack>
              <label htmlFor="paddingY">PaddingY</label>
              <input
                id="paddingY"
                type="number"
                value={sizeProps.paddingY}
                onChange={(e) => {
                  updateGlobalVariable(
                    `button-${name}-padding-y`,
                    e.target.value
                  );
                  setSizeProps({ ...sizeProps, paddingY: e.target.value });
                }}
              />
            </Stack>
          </div>

          <Stack>
            <label htmlFor="font_weight">Font Weight</label>
            <input
              id="font_weight"
              type="number"
              value={sizeProps.fontWeight}
              onChange={(e) => {
                updateGlobalVariable(
                  `button-${name}-font-weight`,
                  e.target.value
                );
                setSizeProps({ ...sizeProps, fontWeight: e.target.value });
              }}
            />
          </Stack>
          <Stack>
            <label htmlFor="font_size">Font Size</label>
            <input
              id="font_size"
              type="number"
              value={sizeProps.fontSize}
              onChange={(e) => {
                updateGlobalVariable(
                  `button-${name}-font-size`,
                  e.target.value
                );
                setSizeProps({ ...sizeProps, fontSize: e.target.value });
              }}
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
            fontWeight: sizeProps.fontWeight,
            fontSize: `${sizeProps.fontSize}px`,
            paddingInline: `${sizeProps.paddingX}px`,
            paddingBlock: `${sizeProps.paddingY}px`,
          }}
        >
          hello world
        </button>
      </Previewer>
    </div>
  );
};

export default ButtonSize;
