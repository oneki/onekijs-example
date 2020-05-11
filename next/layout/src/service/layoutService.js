import { set, useReduxService } from 'onekijs';

export const layoutService = {
    name: "layout",
    reducers: {
      setSiteTitle: function(state, title) {
        set(state, 'layout.site.title', title);
      },
      setSiteSubTitle: function(state, subTitle) {
        set(state, 'layout.site.subTitle', subTitle);
      }
    }
}

export const useLayoutService = () => {
  return useReduxService(layoutService);
};