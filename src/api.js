export async function getData() {
  const response = await fetch("http://localhost:3001/inforyou");
  const body = await response.json();
  return body;
}
