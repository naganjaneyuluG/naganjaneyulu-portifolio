
import { StatsigProvider as StatsigReactProvider } from 'statsig-react';
import { ReactNode } from 'react';

interface StatsigProviderProps {
  children: ReactNode;
}

const StatsigProvider = ({ children }: StatsigProviderProps) => {
  // Get Statsig client key from environment variables
  const statsigClientKey = import.meta.env.VITE_STATSIG_CLIENT_KEY || 'client-your-statsig-key-here';
  
  return (
    <StatsigReactProvider
      sdkKey={statsigClientKey}
      user={{ userID: 'portfolio-visitor' }}
      options={{
        environment: { tier: import.meta.env.VITE_ENVIRONMENT || 'production' }
      }}
    >
      {children}
    </StatsigReactProvider>
  );
};

export default StatsigProvider;
