import { useProductStore } from "./product.store";
import { useOrderStore } from "./order.store";

const appStore: any = {};

/**
 * register app state library
 */
export const registerStore = () => {
  appStore.useProductStore = useProductStore();
  appStore.useOrderStore = useOrderStore();
};

export default appStore;

// export * from './Product.store'