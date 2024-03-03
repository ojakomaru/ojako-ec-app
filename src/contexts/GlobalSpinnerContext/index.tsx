'use client';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface GlobalSpinnerContextProps {
  isGlobalSpinnerOn: boolean;
  setGlobalSpinner: Dispatch<SetStateAction<boolean>>;
}
const GlobalSpinnerContext = createContext<GlobalSpinnerContextProps>(
  {} as GlobalSpinnerContextProps,
);

// グローバルスピナーの表示・非表示
export const useGlobalSpinnerContext = () => useContext(GlobalSpinnerContext);

interface GlobalSpinnerContextProviderProps {
  children: React.ReactNode;
}
/**
 * グローバルスピナーコンテクストプロバイダー
 */
const GlobalSpinnerContextProvider = ({
  children,
}: GlobalSpinnerContextProviderProps) => {
  const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false);

  return (
    <GlobalSpinnerContext.Provider
      value={{ isGlobalSpinnerOn, setGlobalSpinner }}
    >
      {children}
    </GlobalSpinnerContext.Provider>
  );
};

export default GlobalSpinnerContextProvider;
