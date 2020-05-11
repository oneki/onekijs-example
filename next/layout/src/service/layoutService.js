import { set, useReduxService, get, useShallowEqual } from 'onekijs';
import { useEffect } from 'react';

export const layoutService = {
    name: "layout",
    reducers: {
      setLayoutProps: function(state, { layout, props }) {
        // set the props under state.layout.{{layout}}. Example: state.layout.site
        set(state, `layout.${layout}`, props);
      }
    }
}

export const useLayoutReducer = (layout, props) => {
  const service = useReduxService(layoutService);
  props = useShallowEqual(props);

  useEffect(() => {
    service.setLayoutProps({ layout, props });
  }, [layout, props])
};