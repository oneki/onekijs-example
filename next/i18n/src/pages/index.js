import React from 'react'
import Head from "next/head";
import { withLayout, addI18nStaticProps } from 'onekijs';
import SiteLayout from '../layout/siteLayout';
import { useTranslation } from 'onekijs';

// const i18nNamespaces = ['users', 'common'];

const IndexPage = (props) => {
  // const name = "Franki";
  // const MyElement = <div>{t("toto", <>Welcome <button alt={t("this is the alt")}>{{name}}</button></>)} {t("hello {{name}}")}</div>;
  const [T, t, locale, loading] = useTranslation();
  const lastname = "Franki";
  const firstname = "Bruno2";
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <div>{t(<>Hello <b><i>mister</i> {{firstname}} {{lastname}} <i>male</i></b> <u>address</u></>)}</div>
      <div>{t(<>Welcome {{lastname}} on Flora</>)}</div>
      <div><T>Welcome {{lastname}} on Flora</T></div>
    </>
  );
}

export default withLayout(IndexPage, SiteLayout);
