
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 14828, hash: '9a98b0127a0406cad55924a1fd8c839923f388fc0ae0488b1eb802d2a5b65d5f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8402, hash: '4375e7338fb1e0a9488b12ed34ce1e3208a9fca8db3a2ed7651cf23b554c6058', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 115182, hash: '9e934214ea1e95166f53c20badbc18055c42b390ece2cebf7e92bdb61bc10f4d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
