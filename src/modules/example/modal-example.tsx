import { Button, Modal, Text, TextInput, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';

function CustomModal() {
  return (
    <>
      <TextInput label="test" />
      <TextInput label="test" />
    </>
  );
}

export default function ModalExample() {
  const [opened, { open, close }] = useDisclosure(false);
  const openModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed.
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });
  return (
    <>
      <Title order={2}>Table Example</Title>
      <Button onClick={open}>Custom Modal</Button>
      <Button onClick={openModal}>Modal Manager</Button>
      <Modal opened={opened} centered onClose={close} title="test">
        <CustomModal />
      </Modal>
    </>
  );
}
