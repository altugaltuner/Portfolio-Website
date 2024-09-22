import withPWA from 'next-pwa';

const nextConfig = withPWA({
    dest: 'public',  // Servis çalışanının kaydedileceği yer
    disable: process.env.NODE_ENV === 'development', // Geliştirme modunda PWA'yı devre dışı bırak
});

export default nextConfig;
