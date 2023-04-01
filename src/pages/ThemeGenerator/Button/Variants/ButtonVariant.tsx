import Stack from "../../../../components/ui/Stack/Stack";
import { Variants, useThemeGenerator } from "../../ThemeGeneratorContext";
import Hoverable from "../../Utils/Hoverable";
import Previewer from "../../Utils/Previewer";

const ButtonVariant = ({ name }: { name: Variants }) => {
  const { variants, setVariants, updateGlobalVariable } = useThemeGenerator();
  const variantProps = variants[name];
  const setVariantProps = (props: typeof variantProps) => {
    setVariants({
      ...variants,
      [name]: props,
    });
  };

  return (
    <div className="grid grid-cols-2 gap-5 place-items-end">
      <div className="flex w-full space-x-4 border-2 border-gray-400 p-4">
        <Stack className="border-r-2 border-gray-400 pr-4">
          <h3 className="text-black font-bold text-xl">On Default </h3>
          <Stack>
            <label htmlFor="background">Background</label>
            <input
              id="background"
              type="color"
              value={variantProps.background}
              onChange={(e) => {
                updateGlobalVariable(`button-${name}-bg`, e.target.value);
                setVariantProps({
                  ...variantProps,
                  background: e.target.value,
                });
              }}
            />
          </Stack>
          <Stack>
            <label htmlFor="color">Color</label>
            <input
              id="color"
              type="color"
              value={variantProps.color}
              onChange={(e) => {
                updateGlobalVariable(`button-${name}-color`, e.target.value);
                setVariantProps({
                  ...variantProps,
                  color: e.target.value,
                });
              }}
            />
          </Stack>
          <Stack>
            <label htmlFor="border_color">Border Color</label>
            <input
              id="border_color"
              type="color"
              value={variantProps.border.color}
              onChange={(e) => {
                updateGlobalVariable(`button-${name}-border`, e.target.value);
                setVariantProps({
                  ...variantProps,
                  border: {
                    ...variantProps.border,
                    color: e.target.value,
                  },
                });
              }}
            />
          </Stack>
          <Stack>
            <label htmlFor="border_width">Border Width</label>
            <input
              id="border_width"
              type="number"
              value={variantProps.border.width}
              onChange={(e) => {
                updateGlobalVariable(
                  `button-${name}-border-width`,
                  e.target.value
                );
                setVariantProps({
                  ...variantProps,
                  border: {
                    ...variantProps.border,
                    width: e.target.value,
                  },
                });
              }}
            />
          </Stack>
        </Stack>
        <Stack>
          <h3 className="text-black font-bold text-xl">On Hover</h3>
          <Stack>
            <label htmlFor="hover_bg">Background</label>
            <input
              id="hover_bg"
              type="color"
              value={variantProps.hover.background}
              onChange={(e) => {
                updateGlobalVariable(`button-${name}-hover-bg`, e.target.value);
                setVariantProps({
                  ...variantProps,
                  hover: {
                    ...variantProps.hover,
                    background: e.target.value,
                  },
                });
              }}
            />
          </Stack>
          <Stack>
            <label htmlFor="hover_color">Color</label>
            <input
              id="hover_color"
              type="color"
              value={variantProps.hover.color}
              onChange={(e) => {
                updateGlobalVariable(
                  `button-${name}-hover-color`,
                  e.target.value
                );
                setVariantProps({
                  ...variantProps,
                  hover: {
                    ...variantProps.hover,
                    color: e.target.value,
                  },
                });
              }}
            />
          </Stack>
          <Stack>
            <label htmlFor="hover_border_color">Border Color</label>
            <input
              type="color"
              value={variantProps.hover.border.color}
              onChange={(e) => {
                updateGlobalVariable(
                  `button-${name}-hover-border`,
                  e.target.value
                );
                setVariantProps({
                  ...variantProps,
                  hover: {
                    ...variantProps.hover,
                    border: {
                      ...variantProps.hover.border,
                      color: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
          <Stack>
            <label htmlFor="hover_border_width">Border Width</label>
            <input
              id="hover_border_width"
              type="number"
              value={variantProps.hover.border.width}
              onChange={(e) => {
                updateGlobalVariable(
                  `button-${name}-hover-border-width`,
                  e.target.value
                );
                setVariantProps({
                  ...variantProps,
                  hover: {
                    ...variantProps.hover,
                    border: {
                      ...variantProps.hover.border,
                      width: e.target.value,
                    },
                  },
                });
              }}
            />
          </Stack>
        </Stack>
      </div>
      <Previewer>
        <Hoverable>
          {({ hovered }) => (
            <button
              style={{
                ...variantProps,
                border: `${variantProps.border.width}px solid ${variantProps.border.color}`,
                ...(hovered && {
                  ...variantProps.hover,
                  border: `${variantProps.hover.border.width}px solid ${variantProps.hover.border.color}`,
                }),
              }}
            >
              hello world
            </button>
          )}
        </Hoverable>
      </Previewer>
    </div>
  );
};

export default ButtonVariant;
