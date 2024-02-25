'use client';

import AppLogo from 'components/atoms/AppLogo';
import ScaleImage from 'components/atoms/ScaleImage';

export default function Home() {
  return (
    <main className={'main'}>
      <h1>初めてのNextJs</h1>
      <AppLogo />
      <ScaleImage src={'/images/1.jpg'} alt={'test'} />
    </main>
  );
}
