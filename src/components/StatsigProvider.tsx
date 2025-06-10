
import { StatsigProvider as StatsigReactProvider } from 'statsig-react';
import { ReactNode } from 'react';

interface StatsigProviderProps {
  children: ReactNode;
}

const StatsigProvider = ({ children }: StatsigProviderProps) => {
  // You'll need to add your Statsig client key here
  const statsigClientKey = 'client-your-statsig-key-here';
  
  return (
    <StatsigReactProvider
      sdkKey={statsigClientKey}
      user={{ userID: 'portfolio-visitor' }}
      options={{
        environment: { tier: 'production' }
      }}
    >
      {children}
    </StatsigReactProvider>
  );
};

export default StatsigProvider;
