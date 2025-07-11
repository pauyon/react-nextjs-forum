'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';
import { useActionState } from 'react';
import * as actions from '@/actions';

interface FormButtonProps {
  children: React.ReactNode;
  isLoading: boolean;
}

export default function FormButton({ children, isLoading }: FormButtonProps) {
    return  <Button type="submit" isLoading={isLoading}>{children}</Button>
}