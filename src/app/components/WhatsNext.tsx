import React from 'react';
import { Container, ExternalLink, Flex, Heading, Paragraph } from '@dynatrace/strato-components-preview';

export const WhatsNext = () => {
  return (
    <Container
      as={Flex}
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
      marginTop={40}
      paddingY={12}
      paddingX={16}
    >
      <Flex flexDirection='column' alignItems='left' gap={4}>
        <Heading as='h2' level={6}>
          What&apos;s next?
        </Heading>
        <Paragraph>Fork this app on GitHub and learn how to write apps for Dynatrace.</Paragraph>
      </Flex>
      <Flex alignItems='right'>
        <ExternalLink href='https://github.com/Dynatrace/multi-monitor-updater'>Fork on Github</ExternalLink>
      </Flex>
    </Container>
  );
};
