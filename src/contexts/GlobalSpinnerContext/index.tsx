import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

const GlobalSpinnerContext = createContext<boolean>(false);
const GlobalSpinnerActionContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => {});

// グローバルスピナーの表示・非表示
export const useGlobalSpinnerContext = (): boolean =>
  useContext<boolean>(GlobalSpinnerContext);
// グローバルスピナーの表示・非表示のアクション
export const useGlobalSpinnerActionsContext = (): Dispatch<
  SetStateAction<boolean>
> => useContext<Dispatch<SetStateAction<boolean>>>(GlobalSpinnerActionContext);

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
    <GlobalSpinnerContext.Provider value={isGlobalSpinnerOn}>
      <GlobalSpinnerActionContext.Provider value={setGlobalSpinner}>
        {children}
      </GlobalSpinnerActionContext.Provider>
    </GlobalSpinnerContext.Provider>
  );
};

export default GlobalSpinnerContextProvider;
