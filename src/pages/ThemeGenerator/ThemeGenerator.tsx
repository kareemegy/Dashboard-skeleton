import { useState } from "react";
import Stack from "../../components/ui/Stack/Stack";

const ThemeGenerator = () => {
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
        <div className="grid grid-cols-2 gap-5 place-items-center">
          <Stack className="space-y-4">
            <Stack className="border-2 border-gray-400 p-4">
              <h3 className="text-black font-bold text-xl">On Default </h3>
              <Stack>
                <label htmlFor="background">Background</label>
                <input
                  id="background"
                  type="color"
                  value={variantProps.background}
                  onChange={(e) =>
                    setVariantProps({
                      ...variantProps,
                      background: e.target.value,
                    })
                  }
                />
              </Stack>
              <Stack>
                <label htmlFor="color">Color</label>
                <input
                  id="color"
                  type="color"
                  value={variantProps.color}
                  onChange={(e) =>
                    setVariantProps({ ...variantProps, color: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <label htmlFor="border_color">Border Color</label>
                <input
                  id="border_color"
                  type="color"
                  value={variantProps.border.color}
                  onChange={(e) =>
                    setVariantProps({
                      ...variantProps,
                      border: {
                        ...variantProps.border,
                        color: e.target.value,
                      },
                    })
                  }
                />
              </Stack>
              <Stack>
                <label htmlFor="border_width">Border Width</label>
                <input
                  id="border_width"
                  type="number"
                  value={variantProps.border.width}
                  onChange={(e) =>
                    setVariantProps({
                      ...variantProps,
                      border: {
                        ...variantProps.border,
                        width: e.target.value,
                      },
                    })
                  }
                />
              </Stack>
            </Stack>
            <Stack className="border-2 border-gray-400 p-4">
              <h3 className="text-black font-bold text-xl">On Hover</h3>
              <Stack>
                <label htmlFor="hover_bg">Background</label>
                <input
                  id="hover_bg"
                  type="color"
                  value={variantProps.hover.background}
                  onChange={(e) =>
                    setVariantProps({
                      ...variantProps,
                      hover: {
                        ...variantProps.hover,
                        background: e.target.value,
                      },
                    })
                  }
                />
              </Stack>
              <Stack>
                <label htmlFor="hover_color">Color</label>
                <input
                  id="hover_color"
                  type="color"
                  value={variantProps.hover.color}
                  onChange={(e) =>
                    setVariantProps({
                      ...variantProps,
                      hover: {
                        ...variantProps.hover,
                        color: e.target.value,
                      },
                    })
                  }
                />
              </Stack>
              <Stack>
                <label htmlFor="hover_border_color">Border Color</label>
                <input
                  type="color"
                  value={variantProps.hover.border.color}
                  onChange={(e) =>
                    setVariantProps({
                      ...variantProps,
                      hover: {
                        ...variantProps.hover,
                        border: {
                          ...variantProps.hover.border,
                          color: e.target.value,
                        },
                      },
                    })
                  }
                />
              </Stack>
              <Stack>
                <label htmlFor="hover_border_width">Border Width</label>
                <input
                  id="hover_border_width"
                  type="number"
                  value={variantProps.hover.border.width}
                  onChange={(e) =>
                    setVariantProps({
                      ...variantProps,
                      hover: {
                        ...variantProps.hover,
                        border: {
                          ...variantProps.hover.border,
                          width: e.target.value,
                        },
                      },
                    })
                  }
                />
              </Stack>
            </Stack>
          </Stack>
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

export default ThemeGenerator;

const Previewer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack>
      <h3 className="text-black font-bold text-xl">Live Preview</h3>
      <div className="flex flex-col items-center justify-center w-52 h-52 border-2 border-blue-600 bg-slate-500">
        {children}
      </div>
    </Stack>
  );
};

const Hoverable = ({
  children,
}: {
  children: (props: { hovered: boolean }) => React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children({ hovered })}
    </div>
  );
};
