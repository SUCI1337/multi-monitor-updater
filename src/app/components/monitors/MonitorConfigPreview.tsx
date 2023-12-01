import React from 'react';
import { CodeEditor } from '@dynatrace/strato-components-preview/editors';
import { Text } from '@dynatrace/strato-components-preview/typography';
import { useMonitor } from './useMonitor';
import { Skeleton } from '@dynatrace/strato-components-preview';

type MonitorConfigProps = { monitorId: string };

export const MonitorConfigPreview = ({ monitorId }: MonitorConfigProps) => {
  const { data: config, isLoading, error } = useMonitor(monitorId);

  if (isLoading) {
    return <Skeleton/>;
  }

  if (error) {
    return <Text textStyle='base-emphasized'>Up&apos;s something went wrong!</Text>;
  }

  const configAsString = config ? JSON.stringify(config, null, 2) : '';

  return configAsString !== '' ? (
    <CodeEditor key={configAsString} language='json' readOnly value={configAsString} fullHeight lineWrap />
  ) : (
    <Text textStyle='base-emphasized'>
      No monitor selected. Click one of the names in the list to display the configuration in JSON format here.
    </Text>
  );
};
