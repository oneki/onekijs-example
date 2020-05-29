import { useLogoutCallbackService, getI18nStaticProps, withI18nPaths } from "onekijs";
import React from "react";
import fs from 'fs';
import path from 'path';

export async function getStaticProps(context) {
  return getI18nStaticProps(fs, path, context.params.lang);
}

export async function getStaticPaths() {
  return {
    paths: withI18nPaths(fs, path),
    fallback: false
  }
}

export default React.memo(() => {
  useLogoutCallbackService();
  return null;
});
