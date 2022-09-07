import { SiteV2 } from "../interfaces/siteV2";
export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export function capitalizar(str: string) {
  return str
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
}
export const getURL = (asPath: string) => {
  let url = asPath.split("/");
  url.length = url.length - 1;
  return url.join("/");
};

export const getQuery = (asPath: string) => {
  return asPath.slice(1).split("/");
};

//TODO: PAGES TODO:
export const getSite = (sites: SiteV2[], asPath: string) => {
  const query = getQuery(asPath);
  return sites.find((site) => site._id === query[2]);
};
//TODO: CHILDRENS TODO:

export const getChildrens0 = (sites: SiteV2[], asPath: string) => {
  return getSite(sites, asPath)?.children;
};
export const getChildrens1 = (sites: SiteV2[], asPath: string) => {
  return getChildren0(sites, asPath)?.children;
};
export const getChildrens2 = (sites: SiteV2[], asPath: string) => {
  return getChildren1(sites, asPath)?.children;
};
export const getChildrens3 = (sites: SiteV2[], asPath: string) => {
  return getChildren2(sites, asPath)?.children;
};
export const getChildrens4 = (sites: SiteV2[], asPath: string) => {
  return getChildren3(sites, asPath)?.children;
};
export const getChildrens5 = (sites: SiteV2[], asPath: string) => {
  return getChildren4(sites, asPath)?.children;
};

//TODO: CHILDREN TODO:
export const getChildren0 = (sites: SiteV2[], asPath: string) => {
  const query = getQuery(asPath);
  return getChildrens0(sites, asPath)?.find((data) => data.slug === query[3]);
};
export const getChildren1 = (sites: SiteV2[], asPath: string) => {
  const query = getQuery(asPath);
  return getChildrens1(sites, asPath)?.find((data) => data.slug === query[4]);
};
export const getChildren2 = (sites: SiteV2[], asPath: string) => {
  const query = getQuery(asPath);
  return getChildrens2(sites, asPath)?.find((data) => data.slug === query[5]);
};
export const getChildren3 = (sites: SiteV2[], asPath: string) => {
  const query = getQuery(asPath);
  return getChildrens3(sites, asPath)?.find((data) => data.slug === query[6]);
};
export const getChildren4 = (sites: SiteV2[], asPath: string) => {
  const query = getQuery(asPath);
  return getChildrens4(sites, asPath)?.find((data) => data.slug === query[7]);
};
export const getChildren5 = (sites: SiteV2[], asPath: string) => {
  const query = getQuery(asPath);
  return getChildrens5(sites, asPath)?.find((data) => data.slug === query[8]);
};

//TODO: PATHS TODO:
export const getSitesAsPaths = (sites: SiteV2[]) => {
  return sites.map((data) => `/dashboard/sites/${data._id}`);
};
export const getChildren0AsPaths = (sites: SiteV2[]) => {
  return sites
    .map(
      (data) =>
        data.children &&
        data.children.map(
          (data0) => `/dashboard/sites/${data._id}/${data0.slug}`
        )
    )
    .flat(1);
};
export const getChildren1AsPaths = (sites: SiteV2[]) => {
  return sites
    .map(
      (data) =>
        data.children &&
        data.children.map(
          (data0) =>
            data0.children &&
            data0.children.map(
              (data1) =>
                `/dashboard/sites/${data._id}/${data0.slug}/${data1.slug}`
            )
        )
    )
    .flat(2)
    .filter((data) => data);
};
export const getChildren2AsPaths = (sites: SiteV2[]) => {
  return sites
    .map(
      (data) =>
        data.children &&
        data.children.map(
          (data0) =>
            data0.children &&
            data0.children.map(
              (data1) =>
                data1.children &&
                data1.children.map(
                  (data2) =>
                    `/dashboard/sites/${data._id}/${data0.slug}/${data1.slug}/${data2.slug}`
                )
            )
        )
    )
    .flat(3)
    .filter((data) => data);
};
//TODO: SEO TODO:
