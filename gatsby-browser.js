import React from 'react';
import Layout from './src/components/Layout';
import '@fontsource/open-sans';
import '@fontsource/nunito';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
