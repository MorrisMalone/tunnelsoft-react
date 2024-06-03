export default async function fetchImage(url: string, fetchOptions: RequestInit): Promise<string> {
    const response = await fetch(url, fetchOptions);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    return objectUrl;
}