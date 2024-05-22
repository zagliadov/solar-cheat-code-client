import { FC } from "react";
import useFooterNavigation from "../model/use-footer-navigation";
import _ from "lodash";
import Link from "next/link";

export const Footer: FC = () => {
  const tabs = useFooterNavigation();
  return (
    <footer className="fixed bottom-0 z-50 w-full border border-base-200 bg-base-100 shadow-md">
      <nav className="isolate flex rounded-lg shadow" aria-label="Tabs">
        {_.map(tabs, (tab) => {
          return (
            <Link
              key={tab.name}
              href={tab.path}
              className={`${tab.current ? "text-primary" : "text-secondary"}
              group relative min-w-0 flex-1 overflow-hidden p-4 text-center text-xs hover:text-primary font-medium hover:bg-base-200 focus:z-10`}
            >
              <div className="flex flex-col items-center">
                {tab.current
                  ? tab.icon("h-4 w-4 shrink-0 stroke-primary")
                  : tab.icon("h-4 w-4 shrink-0 stroke-primary")}
                <span>{tab.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};
