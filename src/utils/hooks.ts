'use client';
import { useAuthContext } from 'contexts/AuthContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useAuthGuard = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { authUser, isLoading } = useAuthContext();

  useEffect(() => {
    if (!authUser && !isLoading) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('redirect_to', pathname);
      router.push(`/signin?${params.toString()}`);
    }
  }, [router, authUser, isLoading]);
};
