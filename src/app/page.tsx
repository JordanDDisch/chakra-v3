"use client"
import { Heading, Popover, Button, Portal, Box, Input, LocaleProvider } from "@chakra-ui/react";

export default async function Home () {
  return (
    <main>
      <Heading color="primary">Hello World</Heading>

      <Popover.Root closeOnBlur={false} placement='left'>
        {(state) => (
          <>
            <Popover.Trigger asChild>
              <Button>Click to {state.open ? 'close' : 'open'}</Button>
            </Popover.Trigger>
            <Portal>
              <Popover.Content>
                <Popover.Header>This is the header</Popover.Header>
                <Popover.CloseTrigger />
                <Popover.Body>
                  <Input ref={ref} placeholder='Enter value' />
                  <Box>
                    Hello. Nice to meet you! This is the body of the popover
                  </Box>
                </Popover.Body>
                <Popover.Footer>This is the footer</Popover.Footer>
              </Popover.Content>
            </Portal>
          </>
        )}
      </Popover.Root>
    </main>
  );
}
