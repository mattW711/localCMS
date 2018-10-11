export const route = (path, name, component, children, middleware) => {
  const meta = typeof middleware === 'object' ? middleware : {middleware}
  return {
    path,
    name,
    children,
    meta,
    component: () => import(`../${component}`)
  }
}
