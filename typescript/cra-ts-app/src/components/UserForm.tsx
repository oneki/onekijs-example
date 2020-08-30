import React, { FC } from 'react';
import { useForm, Input, InputProps } from 'onekijs';
import { Checkbox } from 'antd';
import './index.less';

const FirstnameInput: FC<InputProps> = () => {
  return <Input name="firstname" />;
};

export const UserForm = () => {
  const { Form } = useForm((data) => {
    console.log(data);
  });
  
  return (
    <Form>
      <div className="red"><Checkbox /></div>
      
      Firstname: <FirstnameInput name="firstname" />
    </Form>
  );
};
