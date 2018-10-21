export default function({ $axios }) {
  $axios.onRequest((config) => {
    config.headers.common['Test'] == 'TEST/v1.0';
    return config;
  });
}
