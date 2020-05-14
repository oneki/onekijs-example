import { useLocale, useOnekiRouter, withLayout } from 'onekijs';
import { useEffect } from 'react';
import SiteLayout from '../layout/siteLayout';

const IndexPage = (props) => {
  const locale = useLocale();
  const router = useOnekiRouter();

  useEffect(() => {
    router.push("/");
  }, [locale])

  return null;
}

export default withLayout(IndexPage, SiteLayout);
