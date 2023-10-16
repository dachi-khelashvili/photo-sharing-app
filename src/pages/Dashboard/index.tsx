import { DashboardView } from 'components';
import React from 'react';
import { WithLayout } from 'components';

const Dashboard: React.FC = () => {
  return <DashboardView />;
};

export const DashboardPage = WithLayout(Dashboard);
