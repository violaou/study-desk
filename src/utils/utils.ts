export default function isDev() {
    return import.meta.env.MODE === 'development';
}
