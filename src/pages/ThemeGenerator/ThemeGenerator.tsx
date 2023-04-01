import Accordion from "../../components/ui/Accordion/Accordion";
import Stack from "../../components/ui/Stack/Stack";
import ButtonGenerator from "./Button/ButtonGenerator";
import { GeneratorProvider } from "./ThemeGeneratorContext";

const ThemeGenerator = () => {
  return (
    <div className="flex flex-col w-full h-full border-2 border-primary p-5 space-y-10">
      <Stack>
        <Accordion>
          <Accordion.Item title="Buttons">
            <ButtonGenerator />
          </Accordion.Item>
        </Accordion>
      </Stack>
    </div>
  );
};

const withProvider = (Component: React.FC) => {
  return () => {
    return (
      <GeneratorProvider>
        <Component />
      </GeneratorProvider>
    );
  };
};
export default withProvider(ThemeGenerator);
