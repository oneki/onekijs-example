import { useLocale, useOnekiRouter } from 'onekijs';
import { useEffect } from 'react';

const IndexPage = (props) => {
  const locale = useLocale();
  const router = useOnekiRouter();

  useEffect(() => {
    router.push("/");
  }, [locale])

  return null;
}

export default IndexPage;