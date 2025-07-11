


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';
// import path from 'path';

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       cesium: path.resolve(__dirname, 'node_modules/cesium'),
//     },
//   },
//   define: {
//     CESIUM_BASE_URL: JSON.stringify('/cesium'),
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      cesium: path.resolve(__dirname, 'node_modules/cesium'),
      '@': path.resolve(__dirname, 'src'), // ✅ added for alias @ => src/
    },
  },
  define: {
    CESIUM_BASE_URL: JSON.stringify('/cesium'),
  },
});

