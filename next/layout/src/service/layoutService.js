import { set, useReduxService, get, useShallowEqual } from 'onekijs';
import { useEffect } from 'react';

export const layoutService = {
    name: "layout",
    reducers: {
      setLayoutProps: function(state, { layout, props }) {
        const currentProps = get(state, `layout.${layout}`, {});
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