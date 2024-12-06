import { useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";

const configAtom = atomWithImmer<Partial<TConfig>>({});

export const useConfigAtom = () => {
  const [config, setConfig] = useAtom(configAtom);

  return {
    config,
    setConfig,
  };
};
