import crypto from "crypto";

async function getSHA256Hash(str: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

const main = async () => {
  const inputString = "[1, 2, 3, { a: 2 }]";
  const inputString2 = "[1, 2, 3, { a: 1 }]";

  console.log("Input String:", inputString);
  console.log("Input String2:", inputString2);

  const hash = await getSHA256Hash(inputString);
  console.log("SHA-256 Hash:", hash);

  const hash2 = await getSHA256Hash(inputString2);
  console.log("SHA-256 Hash:", hash2);
};

main()
