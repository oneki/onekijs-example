import fs from 'fs';
import path from 'path';
import { get404StaticProps } from 'onekijs';

export async function getStaticProps() {
  return await get404StaticProps(fs, path);
}

export default () => null;
