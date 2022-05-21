import { createIntl, createIntlCache } from "react-intl";
import zh_CN from "../locales/zh_CN";
const cache = createIntlCache();
// const message =
const intl = createIntl(
  {
    locale: "zh-CN",
    messages: zh_CN,
  },
  cache
);
export { intl };
