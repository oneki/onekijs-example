import React, { useEffect } from 'react'
import Head from "next/head";
import { withLayout, addI18nStaticProps, useOnekiRouter } from 'onekijs';
import SiteLayout from '../layout/siteLayout';
import { useTranslation } from 'onekijs';

// const i18nNamespaces = ['users', 'common'];

const IndexPage = (props) => {
  // const name = "Franki";
  // const MyElement = <div>{t("toto", <>Welcome <button alt={t("this is the alt")}>{{name}}</button></>)} {t("hello {{name}}")}</div>;
  const [T, t, locale, loading] = useTranslation();
  const router = useOnekiRouter();

  useEffect(() => {
    router.push("/");
  }, [locale])

  return null;
}

export default withLayout(IndexPage, SiteLayout);
