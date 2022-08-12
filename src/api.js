export async function getData() {
  const response = await fetch("http://localhost:3001/inforyou");
  const body = await response.json();
  return body;
}
export async function getOwner() {
  const response = await fetch(`http://localhost:3001/inforyou`);
  const body = await response.json();
  return body;
}

// fetch(
//   "http://irgalb-1499737655.ap-northeast-2.elb.amazonaws.com/api/v1/members/modify",
//   {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       name: "name",
//     }),
//   }
// ).then((res) => {
//   if (res.ok) {
//     alert("생성 완료");
//   }
// });
