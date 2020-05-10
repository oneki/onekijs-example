import React from 'react'
import Head from "next/head";
import { withLayout,  getI18nStaticProps, withI18nPaths } from 'onekijs';
import SiteLayout from '../../layout/siteLayout';
import { useTranslation } from 'onekijs';
import fs from 'fs';
import path from 'path';

const i18nNamespaces = ['users', 'common'];

export async function getStaticProps(context) {
  const result = getI18nStaticProps(fs, path, context.params.lang)
  return result;
}

export async function getStaticPaths() {
  const result = withI18nPaths(fs, path);
  return {
    paths: withI18nPaths(fs, path),
    fallback: false
  }
}

const IndexPage = (props) => {
  // const name = "Franki";
  // const MyElement = <div>{t("toto", <>Welcome <button alt={t("this is the alt")}>{{name}}</button></>)} {t("hello {{name}}")}</div>;
  const [t, locale, loading] = useTranslation(i18nNamespaces);
  const lastname = "Franki";
  const firstname = "Bruno1";
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <div>{t(<>Hello <b><i>mister</i> {{firstname}} {{lastname}} <i>male</i></b> <u>address</u></>)}</div>
      <div>{t(<>Welcome {{lastname}} on Flora</>)}</div>
    </>
  );
}

export default withLayout(IndexPage, SiteLayout);
