import React from 'react';
import Layout from './src/components/Layout';
import '@fontsource/open-sans';
import '@fontsource/zen-kurenaido';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
