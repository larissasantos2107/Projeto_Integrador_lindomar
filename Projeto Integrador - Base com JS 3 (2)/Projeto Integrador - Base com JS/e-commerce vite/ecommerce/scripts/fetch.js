export const getProdutos = async () => {
    const response = await fetch("http://localhost:8000/api/produtos")
    return response.json();
}