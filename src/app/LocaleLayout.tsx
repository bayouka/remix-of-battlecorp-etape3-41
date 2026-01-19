import { Outlet } from "react-router-dom";
import { LocaleProvider } from "@/i18n/LocaleProvider";

/**
 * Layout wrapper for locale routes
 * Provides locale context to all nested routes
 */
export function LocaleLayout() {
  return (
    <LocaleProvider>
      <Outlet />
    </LocaleProvider>
  );
}

export default LocaleLayout;
