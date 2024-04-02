import { Box, Card, Flex, Image, Space, Text } from '@mantine/core';
import { SignIn } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

import { LoginFormSchema, LoginFormType } from './login-form-type';

import { NavigationRoutes } from '@/common/constants/route';
import { apiList, callApi } from '@/common/helpers/api';
import notification from '@/common/helpers/notifications';
import colors from '@/common/styles/colors';
import Form from '@/components/form';
import Input from '@/components/input';
import useAuth, { TokenModel } from '@/hooks/use-auth';
import useYupValidationResolver from '@/hooks/use-yup-validation-resolver';

export default function Login() {
  const { push } = useRouter();
  const defaultValues = React.useMemo<LoginFormType>(() => {
    return {
      password: '',
      username: '',
    };
  }, []);

  const resolver = useYupValidationResolver(LoginFormSchema());

  const methods = useForm({
    defaultValues,
    resolver,
  });

  const { setToken } = useAuth();

  const onSubmit = React.useCallback(
    async (values: LoginFormType) => {
      try {
        const result = await callApi<TokenModel>({
          method: 'POST',
          url: apiList.userLogin,
          data: values,
        });

        setToken(result.data);

        notification.success({
          message: 'berhasil login',
        });

        push(NavigationRoutes.home);
      } catch (e: any) {
        e.message &&
          notification.error({
            message: e.message,
          });
      }
    },
    [push, setToken],
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Box miw="100dvw" mih="100dvh" bg={colors.orange} p={16}>
        <Flex direction="column">
          <Text ta="center" fz={40} fw={900} c="white">
            Welcome to Toko Ria
          </Text>
          <Image w={200} src="/icons/logo.png" m="auto" />
          <Text ta="center" fz={50} fw={600} c="white">
            Login
          </Text>
          <Space h={38} />
          <Card maw={420} padding={24} radius="lg" h="100%" w="100%" m="auto">
            <Flex gap={16} direction="column">
              <Input type="text" name="username" label="Username" />
              <Input type="password" name="password" label="Password" />
              <Input
                type="submit"
                rightSection={<SignIn size={16} />}
                fullWidth
                color={colors.orange}
              >
                Login
              </Input>
            </Flex>
          </Card>
        </Flex>
      </Box>
    </Form>
  );
}
