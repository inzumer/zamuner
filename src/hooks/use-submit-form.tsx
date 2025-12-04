'use client';

/** Resources */
import { useState, useEffect } from 'react';
import { API_PATH } from '@constants';

interface FormData {
  from: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface UseContactFormResult {
  formData: FormData;
  status: FormStatus;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export const useContactForm = (): UseContactFormResult => {
  const [formData, setFormData] = useState<FormData>({
    from: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');

  useEffect(() => {
    if (status !== 'idle') {
      const resetStatus = setTimeout(() => {
        setStatus('idle');
      }, 5000);

      return () => clearTimeout(resetStatus);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(API_PATH.EMAIL, {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      await response.json();

      setStatus('success');
      setFormData({ from: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Fetch Error:', error);
    }
  };

  return { formData, status, handleSubmit, setFormData };
};
