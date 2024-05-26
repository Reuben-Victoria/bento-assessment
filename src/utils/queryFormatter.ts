/* =====================
 * FORMAT QUERY OBJECTS TO STRING FOR URL
 * ===================== */

function objectToQuery(obj: Record<string, any>) {
  if (!obj) {
    throw Error("objectToQuery expects an object");
  }
  return Object.entries(obj).reduce((query, cur) => {
    const [key, value] = cur;
    if (Array.isArray(value)) {
      query.append(key, `[${value}]`);
    } else if (value !== "") {
      query.set(key, value);
    }
    return query;
  }, new URLSearchParams());
}

export function getQueryToString(query: Record<string, any>) {
  if (!query) {
    return objectToQuery({}).toString();
  }
  return objectToQuery(query).toString();
}
